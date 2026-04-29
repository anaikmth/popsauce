const questions = [
  // Géographie
  { theme: "Géographie", emoji: "🗺️", question: "Quelle est la capitale de l'Australie ?", hint: "Ce n'est ni Sydney ni Melbourne", answers: ["canberra"] },
  { theme: "Géographie", emoji: "🌍", question: "Quel est le plus grand pays du monde en superficie ?", hint: "Il s'étend sur deux continents", answers: ["russie", "russia"] },
  { theme: "Géographie", emoji: "🗼", question: "Dans quelle ville se trouve la Tour Eiffel ?", hint: "Capitale de la France", answers: ["paris"] },
  { theme: "Géographie", emoji: "🏔️", question: "Quel est le plus haut sommet du monde ?", hint: "Situé dans l'Himalaya", answers: ["everest", "mont everest"] },
  { theme: "Géographie", emoji: "🌊", question: "Quel est l'océan le plus grand du monde ?", hint: "Il borde l'Asie et l'Amérique", answers: ["pacifique", "ocean pacifique"] },
  { theme: "Géographie", emoji: "🇧🇷", question: "Quelle est la capitale du Brésil ?", hint: "Ce n'est pas Rio de Janeiro", answers: ["brasilia", "brasília"] },
  { theme: "Géographie", emoji: "🌋", question: "Sur quelle île se trouve le volcan Etna ?", hint: "Grande île italienne", answers: ["sicile", "sicily"] },
  { theme: "Géographie", emoji: "🏜️", question: "Quel est le plus grand désert du monde ?", hint: "Il est blanc et très froid", answers: ["antarctique", "antarctica"] },
  { theme: "Géographie", emoji: "🇯🇵", question: "Quelle est la capitale du Japon ?", hint: "Plus grande métropole du monde", answers: ["tokyo"] },
  { theme: "Géographie", emoji: "🌐", question: "Combien de continents y a-t-il sur Terre ?", hint: "Entre 6 et 8 selon les définitions, la réponse classique...", answers: ["7", "sept"] },

  // Cinéma
  { theme: "Cinéma", emoji: "🎬", question: "Dans quel film voit-on un lion nommé Simba ?", hint: "Film d'animation Disney 1994", answers: ["le roi lion", "the lion king", "roi lion"] },
  { theme: "Cinéma", emoji: "🎬", question: "Quel acteur joue Iron Man dans les films Marvel ?", hint: "Robert Downey ...", answers: ["robert downey jr", "robert downey", "rdj"] },
  { theme: "Cinéma", emoji: "🎬", question: "Dans quelle saga trouve-t-on les personnages Harry, Ron et Hermione ?", hint: "Magie et sorciers", answers: ["harry potter"] },
  { theme: "Cinéma", emoji: "🎬", question: "Quel film d'animation Pixar met en scène un robot dans un monde dévasté ?", hint: "Son nom ressemble à un prénom", answers: ["wall-e", "walle", "wall e"] },
  { theme: "Cinéma", emoji: "🎬", question: "Qui réalise la saga 'Le Seigneur des Anneaux' ?", hint: "Réalisateur néo-zélandais", answers: ["peter jackson"] },
  { theme: "Cinéma", emoji: "🏆", question: "Quel film a remporté l'Oscar du meilleur film en 2020 ?", hint: "Film coréen de Bong Joon-ho", answers: ["parasite"] },
  { theme: "Cinéma", emoji: "🎬", question: "Dans 'Titanic', quel acteur joue Jack Dawson ?", hint: "Il a aussi joué dans Django", answers: ["leonardo dicaprio", "dicaprio", "leo dicaprio"] },
  { theme: "Cinéma", emoji: "🤖", question: "Quel personnage dit 'Je serai de retour' dans Terminator ?", hint: "Il deviendra gouverneur de Californie", answers: ["arnold schwarzenegger", "schwarzenegger", "terminator"] },

  // Musique
  { theme: "Musique", emoji: "🎵", question: "Qui a chanté 'Thriller' en 1982 ?", hint: "Le roi de la pop", answers: ["michael jackson", "jackson"] },
  { theme: "Musique", emoji: "🎸", question: "Quel groupe de rock chante 'Bohemian Rhapsody' ?", hint: "Le chanteur s'appelait Freddie Mercury", answers: ["queen"] },
  { theme: "Musique", emoji: "🎤", question: "Comment s'appelle la chanteuse de 'Bad Guy' ?", hint: "Prénom et nom commencent par la même lettre", answers: ["billie eilish", "eilish"] },
  { theme: "Musique", emoji: "🎹", question: "Quel rappeur français chante 'Tout va bien' avec Orelsan ?", hint: "Il s'appelle aussi Nekfeu", answers: ["nekfeu"] },
  { theme: "Musique", emoji: "🎵", question: "Quel pays a remporté l'Eurovision 2021 ?", hint: "Groupe de rock", answers: ["italie", "italy"] },
  { theme: "Musique", emoji: "🥁", question: "De quel pays viennent les Beatles ?", hint: "John, Paul, George et Ringo", answers: ["angleterre", "royaume-uni", "royaume uni", "uk", "grande-bretagne"] },
  { theme: "Musique", emoji: "🎤", question: "Comment s'appelle le rappeur américain né Aubrey Graham ?", hint: "Ancienne star de Degrassi", answers: ["drake"] },

  // Science
  { theme: "Science", emoji: "⚗️", question: "Quel est le symbole chimique de l'or ?", hint: "Deux lettres, commence par A", answers: ["au"] },
  { theme: "Science", emoji: "🔭", question: "Quelle est la planète la plus proche du Soleil ?", hint: "La plus petite du système solaire", answers: ["mercure", "mercury"] },
  { theme: "Science", emoji: "⚛️", question: "Quel scientifique a découvert la pénicilline ?", hint: "Alexander ...", answers: ["alexander fleming", "fleming"] },
  { theme: "Science", emoji: "🧬", question: "Quelle est la formule chimique de l'eau ?", hint: "2 hydrogènes, 1 oxygène", answers: ["h2o"] },
  { theme: "Science", emoji: "🌍", question: "Combien de temps met la Terre pour tourner autour du Soleil ?", hint: "En jours", answers: ["365", "365 jours", "un an", "1 an"] },
  { theme: "Science", emoji: "⚡", question: "Qui a inventé l'ampoule électrique ?", hint: "Thomas ...", answers: ["thomas edison", "edison"] },
  { theme: "Science", emoji: "🍎", question: "Quelle théorie est associée à la pomme qui tombe ?", hint: "Isaac Newton", answers: ["gravitation", "gravité", "loi de la gravitation", "attraction universelle"] },
  { theme: "Science", emoji: "🚀", question: "En quelle année Youri Gagarine est-il allé dans l'espace ?", hint: "Début des années 60", answers: ["1961"] },

  // Sport
  { theme: "Sport", emoji: "⚽", question: "Combien de joueurs sur le terrain dans une équipe de football ?", hint: "Gardien inclus", answers: ["11", "onze"] },
  { theme: "Sport", emoji: "🎾", question: "Combien de sets gagnants pour remporter un match de tennis en Grand Chelem (hommes) ?", hint: "Sur cinq sets possibles", answers: ["3", "trois"] },
  { theme: "Sport", emoji: "🏀", question: "Quel joueur NBA est surnommé 'The Goat' (le meilleur de tous les temps) selon beaucoup ?", hint: "Il a joué pour les Bulls", answers: ["michael jordan", "jordan"] },
  { theme: "Sport", emoji: "🏊", question: "Quel nageur a remporté 23 médailles d'or olympiques ?", hint: "Michael ...", answers: ["michael phelps", "phelps"] },
  { theme: "Sport", emoji: "🥊", question: "Qui est surnommé 'The Greatest' dans la boxe ?", hint: "Muhammad ...", answers: ["muhammad ali", "ali", "cassius clay"] },
  { theme: "Sport", emoji: "⚽", question: "Quel pays a remporté le plus de Coupes du monde de football ?", hint: "Pays d'Amérique du Sud", answers: ["bresil", "brésil", "brazil"] },
  { theme: "Sport", emoji: "🎿", question: "Dans quelle ville ont eu lieu les JO d'été 2024 ?", hint: "Capitale européenne, Tour Eiffel", answers: ["paris"] },
  { theme: "Sport", emoji: "🏇", question: "Quel sport pratique-t-on à Wimbledon ?", hint: "Raquette et balle", answers: ["tennis"] },

  // Histoire
  { theme: "Histoire", emoji: "🏛️", question: "En quelle année a eu lieu la Révolution française ?", hint: "La Bastille a été prise cette année-là", answers: ["1789"] },
  { theme: "Histoire", emoji: "🏆", question: "En quelle année l'homme a-t-il marché sur la Lune pour la première fois ?", hint: "Mission Apollo 11", answers: ["1969"] },
  { theme: "Histoire", emoji: "✌️", question: "En quelle année s'est terminée la Seconde Guerre mondiale ?", hint: "Milieu des années 40", answers: ["1945"] },
  { theme: "Histoire", emoji: "🗽", question: "Quel pays a offert la Statue de la Liberté aux États-Unis ?", hint: "Pays de Napoléon", answers: ["france"] },
  { theme: "Histoire", emoji: "🧱", question: "En quelle année le mur de Berlin est-il tombé ?", hint: "Fin des années 80", answers: ["1989"] },
  { theme: "Histoire", emoji: "⚓", question: "Qui a découvert l'Amérique en 1492 ?", hint: "Christophe ...", answers: ["christophe colomb", "colomb", "christopher columbus", "columbus"] },
  { theme: "Histoire", emoji: "👑", question: "Qui était le roi de France lors de la Révolution française ?", hint: "Louis XVI", answers: ["louis xvi", "louis 16", "louis seize"] },

  // Culture générale
  { theme: "Culture", emoji: "📚", question: "Qui a écrit 'Les Misérables' ?", hint: "Victor ...", answers: ["victor hugo", "hugo"] },
  { theme: "Culture", emoji: "🎨", question: "Qui a peint la Joconde ?", hint: "Génie de la Renaissance italienne", answers: ["leonard de vinci", "léonard de vinci", "da vinci", "leonardo da vinci"] },
  { theme: "Culture", emoji: "📖", question: "Dans quel roman trouve-t-on le personnage de Sherlock Holmes ?", hint: "Auteur : Arthur Conan Doyle", answers: ["sherlock holmes"] },
  { theme: "Culture", emoji: "🏺", question: "De quelle matière est faite la Tour Eiffel ?", hint: "Métal rouillé à l'origine", answers: ["fer", "acier", "metal", "métal"] },
  { theme: "Culture", emoji: "🌐", question: "En quelle année a été créé Facebook ?", hint: "Mark Zuckerberg, université de Harvard", answers: ["2004"] },
  { theme: "Culture", emoji: "📱", question: "Quel pays a créé Samsung ?", hint: "Péninsule asiatique", answers: ["coree du sud", "corée du sud", "coree", "south korea"] },

  // Animaux
  { theme: "Animaux", emoji: "🐾", question: "Quel est l'animal le plus rapide du monde ?", hint: "Un félin des savanes africaines", answers: ["guépard", "gepard", "cheetah"] },
  { theme: "Animaux", emoji: "🐋", question: "Quel est le plus grand animal du monde ?", hint: "Un mammifère marin", answers: ["baleine bleue", "rorqual bleu", "blue whale"] },
  { theme: "Animaux", emoji: "🦁", question: "Comment appelle-t-on un groupe de lions ?", hint: "Comme une troupe de théâtre", answers: ["troupe", "troupe de lions", "pride"] },
  { theme: "Animaux", emoji: "🐘", question: "Combien de temps dure la gestation d'un éléphant ?", hint: "Presque 2 ans, en mois ?", answers: ["22", "22 mois"] },
  { theme: "Animaux", emoji: "🦈", question: "Quel est le plus grand poisson du monde ?", hint: "Un requin inoffensif pour l'homme", answers: ["requin baleine", "whale shark"] },

  // Jeux vidéo
  { theme: "Jeux vidéo", emoji: "🎮", question: "Dans quel jeu incarne-t-on Link ?", hint: "Nintendo, épée et bouclier", answers: ["zelda", "the legend of zelda", "legend of zelda"] },
  { theme: "Jeux vidéo", emoji: "🎮", question: "Quel jeu se déroule dans la ville de Los Santos ?", hint: "GTA ...", answers: ["gta v", "gta 5", "grand theft auto v", "grand theft auto 5"] },
  { theme: "Jeux vidéo", emoji: "🎮", question: "Comment s'appelle le plombier de Nintendo ?", hint: "Mario ...", answers: ["mario", "super mario"] },
  { theme: "Jeux vidéo", emoji: "🎮", question: "Dans quel jeu construit-on des maisons avec des blocs ?", hint: "Le jeu le plus vendu de l'histoire", answers: ["minecraft"] },
  { theme: "Jeux vidéo", emoji: "🎮", question: "Quel personnage est le héros de la saga 'Sonic' ?", hint: "Il est bleu et très rapide", answers: ["sonic", "sonic the hedgehog"] },

  // Séries / TV
  { theme: "Séries", emoji: "📺", question: "Dans quelle série voit-on des dragons et un Trône de Fer ?", hint: "HBO, dragons et batailles", answers: ["game of thrones", "got"] },
  { theme: "Séries", emoji: "📺", question: "Comment s'appelle le personnage principal de 'Breaking Bad' ?", hint: "Professeur de chimie qui fabrique de la drogue", answers: ["walter white", "heisenberg", "walter"] },
  { theme: "Séries", emoji: "📺", question: "Dans quelle ville se passe la série 'Emily in Paris' ?", hint: "Ville lumière", answers: ["paris"] },
  { theme: "Séries", emoji: "📺", question: "Quelle série Netflix met en scène des adolescents dans un monde à l'envers ?", hint: "Eleven et ses amis", answers: ["stranger things"] },
  { theme: "Séries", emoji: "📺", question: "Dans quelle série française des enfants jouent à des jeux dangereux pour gagner de l'argent ?", hint: "Version française d'un hit coréen", answers: ["squid game", "le jeu du calmar"] },
];

module.exports = questions;
