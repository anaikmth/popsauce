# PopSauce Clone

Quiz multijoueur en temps réel — clone de PopSauce/JKLM.fun

## Hébergement sur Render

1. Push ce dossier sur GitHub
2. Sur [render.com](https://render.com), crée un **New Web Service**
3. Connecte ton repo GitHub
4. Paramètres :
   - **Build Command** : `npm install`
   - **Start Command** : `npm start`
   - **Environment** : Node
5. Clique **Deploy** !

## Lancer en local

```bash
npm install
npm start
# Ouvre http://localhost:3000
```

## Fonctionnalités

- Salles multijoueurs (jusqu'à 12 joueurs)
- 65+ questions variées (géo, cinéma, musique, science, sport, histoire, jeux vidéo, séries...)
- Chrono 20 secondes — plus vite = plus de points (max 1000 pts)
- Avatars emoji
- Classement en temps réel
- L'hôte peut relancer une partie
