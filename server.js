const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const QUESTIONS = require('./src/questions');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, 'public')));

// --- Room management ---
const rooms = {};

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function normalize(str) {
  return str.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function createRoom(code) {
  rooms[code] = {
    code,
    players: {},
    host: null,
    started: false,
    questions: [],
    currentQ: 0,
    answered: new Set(),
    timer: null,
    timeLeft: 0,
    TIMER: 20,
    NUM_QUESTIONS: 10,
  };
  return rooms[code];
}

function generateCode() {
  const chars = 'ABCDEFHJKLMNPQRSTUVWXYZ23456789';
  let code;
  do { code = Array.from({length: 4}, () => chars[Math.floor(Math.random() * chars.length)]).join(''); }
  while (rooms[code]);
  return code;
}

function getScores(room) {
  return Object.values(room.players).map(p => ({ id: p.id, name: p.name, score: p.score, avatar: p.avatar })).sort((a, b) => b.score - a.score);
}

function startQuestion(room) {
  if (room.currentQ >= room.questions.length) {
    endGame(room);
    return;
  }
  room.answered = new Set();
  room.timeLeft = room.TIMER;
  const q = room.questions[room.currentQ];

  io.to(room.code).emit('question', {
    index: room.currentQ,
    total: room.questions.length,
    theme: q.theme,
    emoji: q.emoji,
    question: q.question,
    hint: q.hint,
    timer: room.TIMER,
  });

  room.timer = setInterval(() => {
    room.timeLeft -= 0.5;
    io.to(room.code).emit('tick', { timeLeft: Math.max(0, room.timeLeft) });
    if (room.timeLeft <= 0) {
      clearInterval(room.timer);
      const q = room.questions[room.currentQ];
      io.to(room.code).emit('timeout', { answer: q.answers[0] });
      setTimeout(() => nextQuestion(room), 3000);
    }
  }, 500);
}

function nextQuestion(room) {
  room.currentQ++;
  io.to(room.code).emit('scores', getScores(room));
  setTimeout(() => startQuestion(room), 1500);
}

function endGame(room) {
  io.to(room.code).emit('game_over', getScores(room));
  room.started = false;
}

// --- Socket.io ---
io.on('connection', (socket) => {

  socket.on('create_room', ({ name, avatar }) => {
    const code = generateCode();
    const room = createRoom(code);
    room.host = socket.id;
    room.players[socket.id] = { id: socket.id, name, avatar: avatar || '😎', score: 0 };
    socket.join(code);
    socket.data.roomCode = code;
    socket.emit('room_created', { code });
    io.to(code).emit('players', getScores(room));
  });

  socket.on('join_room', ({ code, name, avatar }) => {
    const room = rooms[code.toUpperCase()];
    if (!room) { socket.emit('error', 'Salle introuvable'); return; }
    if (room.started) { socket.emit('error', 'La partie a déjà commencé'); return; }
    if (Object.keys(room.players).length >= 12) { socket.emit('error', 'Salle pleine (max 12)'); return; }
    room.players[socket.id] = { id: socket.id, name, avatar: avatar || '🙂', score: 0 };
    socket.join(code.toUpperCase());
    socket.data.roomCode = code.toUpperCase();
    socket.emit('room_joined', { code: code.toUpperCase() });
    io.to(code.toUpperCase()).emit('players', getScores(room));
  });

  socket.on('start_game', () => {
    const room = rooms[socket.data.roomCode];
    if (!room || room.host !== socket.id) return;
    if (Object.keys(room.players).length < 1) return;
    room.started = true;
    room.currentQ = 0;
    room.questions = shuffle(QUESTIONS).slice(0, room.NUM_QUESTIONS);
    Object.values(room.players).forEach(p => p.score = 0);
    io.to(room.code).emit('game_start');
    setTimeout(() => startQuestion(room), 1000);
  });

  socket.on('answer', ({ answer }) => {
    const room = rooms[socket.data.roomCode];
    if (!room || !room.started) return;
    if (room.answered.has(socket.id)) return;
    const player = room.players[socket.id];
    if (!player) return;
    const q = room.questions[room.currentQ];
    const correct = q.answers.some(a => normalize(a) === normalize(answer));
    if (correct) {
      room.answered.add(socket.id);
      const pts = Math.round(Math.max(100, (room.timeLeft / room.TIMER) * 1000));
      player.score += pts;
      socket.emit('answer_result', { correct: true, pts, answer: q.answers[0] });
      io.to(room.code).emit('player_answered', { name: player.name, correct: true });
      // If all players answered, move on
      if (room.answered.size >= Object.keys(room.players).length) {
        clearInterval(room.timer);
        io.to(room.code).emit('all_answered', { answer: q.answers[0] });
        setTimeout(() => nextQuestion(room), 2000);
      }
    } else {
      socket.emit('answer_result', { correct: false });
    }
  });

  socket.on('disconnect', () => {
    const code = socket.data.roomCode;
    const room = rooms[code];
    if (!room) return;
    delete room.players[socket.id];
    if (Object.keys(room.players).length === 0) {
      clearInterval(room.timer);
      delete rooms[code];
      return;
    }
    if (room.host === socket.id) {
      room.host = Object.keys(room.players)[0];
      io.to(code).emit('new_host', room.host);
    }
    io.to(code).emit('players', getScores(room));
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`PopSauce running on port ${PORT}`));
