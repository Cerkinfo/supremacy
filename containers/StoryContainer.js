import React from 'react';
import { Container } from 'unstated';

const StoryAssets = [
  {
    id: "b70d622c-2e13-4d3b-85c4-4135c08f7fdd",
    uri: require('../assets/img/story/0.png'),
    title: "",
    description: "",
    left: {
      text: "Go !",
      stats: { ace: +0, ulb: +0, sponsors: +0, cercles: +0 },
      next: "c3ed58dc-ec2e-11e8-8eb2-f2801f1b9fd1",
    },
    right: {
      text: "Attendre ..." ,
      stats: { ace: -0, ulb: -0, sponsors: -0, cercles: -0 },
      next: "b70d622c-2e13-4d3b-85c4-4135c08f7fdd",
    },
  },
  {
    id: "c3ed58dc-ec2e-11e8-8eb2-f2801f1b9fd1",
    uri: require('../assets/img/story/1.jpg'),
    title: 'Bienvenu au nouveau président !',
    description: "Bonjour au nouveau prez de l'ACE ! Fraîchement élu par l'AG car personne ne veut se présenter à ce poste et tous les anciens ont déserté le comité, tu dois faire la première décision de ton mandat. Que faire ce soir ?",
    left: {
      text: "Gauguin",
      stats: { ace: +10, ulb: -5, sponsors: -5, cercles: +15 },
      next: "4fd1cbda-eab3-11e8-9f32-f2801f1b9fd1",
    },
    right: {
      text: "Dormir",
      stats: { ace: -20, ulb: +5, sponsors: -0, cercles: -15 },
      next: "4fd1cbda-eab3-11e8-9f32-f2801f1b9fd1",
    },
  },

  {
    id: "4fd1cbda-eab3-11e8-9f32-f2801f1b9fd1",
    uri: require('../assets/img/story/4fd1cbda-eab3-11e8-9f32-f2801f1b9fd1.png'),
    title: 'L\'autoluigis',
    description: "Le CP te tend un slip ! Que faire ? Autoluigis ou tu le gardes pour le donner aux réfugiés ?",
    left: {
      text: "Autoluigis",
      stats: { ace: -5, ulb: +0, sponsors: +0, cercles: +20 },
      next: "183c404c-eab3-11e8-9f32-f2801f1b9fd1",
    },
    right: {
      text: "Les réfugiés",
      stats: { ace: +10, ulb: +5, sponsors: +0, cercles: -10 },
      next: "183c404c-eab3-11e8-9f32-f2801f1b9fd1",
    },
  },

  {
    id: "183c404c-eab3-11e8-9f32-f2801f1b9fd1",
    uri: require('../assets/img/story/183c404c-eab3-11e8-9f32-f2801f1b9fd1.png'),
    title: 'Premiers pas ...',
    description: "Tu prends tes marques sur le groupe Facebook, tu essayes de marquer le coup en organisant une première rencontre avec les autres présidents pour créer une fausse cohésion de groupe. Que faire ? Bière ou pizza ?",
    left: {
      text: "Bière",
      stats: { ace: +0, ulb: -5, sponsors: +0, cercles: +9 },
      next: "44db8aaa-eab7-11e8-9f32-f2801f1b9fd1",
    },
    right: {
      text: "Pizza",
      stats: { ace: -5, ulb: -0, sponsors: -0, cercles: +7 },
      next: "44db8aaa-eab7-11e8-9f32-f2801f1b9fd1",
    },
  },

  // BEA on veut mieux que ça
  {
    id: "44db8aaa-eab7-11e8-9f32-f2801f1b9fd1",
    uri: require('../assets/img/story/44db8aaa-eab7-11e8-9f32-f2801f1b9fd1.png'),
    title: "Il est venu le temps de militer ?",
    description: "Comme à son habitude, le BEA demande l'avis des cercles de l'ACE pour signer une charte commune pour le refinancement de l'enseignement. L'ACE doit aussi se positionner par rapport à ça.",
    left: {
      text: "Signer",
      stats: { ace: +5, ulb: +0, sponsors: -5, cercles: +0 },
      next: "8e2e5d4e-eab8-11e8-9f32-f2801f1b9fd1",
    },
    right: {
      text: "Ne pas signer",
      stats: { ace: -10, ulb: +0, sponsors: +15, cercles: -20 },
      next: "9626d558-eab8-11e8-9f32-f2801f1b9fd1",
    },
  },
  {
    id: "8e2e5d4e-eab8-11e8-9f32-f2801f1b9fd1",
    uri: require('../assets/img/story/8e2e5d4e-eab8-11e8-9f32-f2801f1b9fd1.png'),
    title: "",
    description: "L'ensemble des cercles ont décidé de signer la charte commune. Il serait en effet trop mal vu pour eux de refuser de signer une telle charte.",
    next: "80415432-eaba-11e8-9f32-f2801f1b9fd1",
  },
  {
    id: "9626d558-eab8-11e8-9f32-f2801f1b9fd1",
    uri: require('../assets/img/story/9626d558-eab8-11e8-9f32-f2801f1b9fd1.png'),
    title: "Ha bon ?",
    description: "Vous êtes le seul cercle qui décide de ne pas signer la charte commune alors que tous les autres cercles ont tous accepté de signer la charte.",
    next: "eb5de058-eab2-11e8-9f32-f2801f1b9fd1",
  },
  {
    id: "80415432-eaba-11e8-9f32-f2801f1b9fd1",
    uri: require('../assets/img/story/80415432-eaba-11e8-9f32-f2801f1b9fd1.png'),
    title: "Organize !!!",
    description: "Le jour du rassemblement, tu te dis que ça serait pas une mauvaise idée de faire acte de présence pour représenter ton cercle. Une envie soudaine de t'en jeter une petite (bière) apparait néanmoins. Où vas-tu ?",
    left: {
      text: "Préfabs",
      stats: { ace: -5, ulb: -10, sponsors: +0, cercles: +5 },
      next: "6d22ecc2-eabe-11e8-9f32-f2801f1b9fd1",
    },
    right: {
      text: "Rassemblement",
      stats: { ace: +5, ulb: +10, sponsors: -0, cercles: -5 },
      next: "da1dbb96-eabd-11e8-9f32-f2801f1b9fd1",
    },
  },
  {
    id: "6d22ecc2-eabe-11e8-9f32-f2801f1b9fd1",
    title: "",
    uri: require('../assets/img/story/6d22ecc2-eabe-11e8-9f32-f2801f1b9fd1.png'),
    description: "Tu décides d'aller boire une petite bière malgré la manifestation, tu te dis que ta présence ne changera pas grand-chose au nombre de participants. En y arrivant tu remarques que l'ensemble des comités de cercles est occupé de boire des bières dans les préfabs.",
    next: "eb5de058-eab2-11e8-9f32-f2801f1b9fd1",
  },
  {
    id: "da1dbb96-eabd-11e8-9f32-f2801f1b9fd1",
    uri: require('../assets/img/story/da1dbb96-eabd-11e8-9f32-f2801f1b9fd1.png'),
    title: "",
    description: "À ton plus grand étonnement, tu te rends compte qu'aucun comité de cercle n'a pris la peine de venir au rassemblement, ceux-ci étant plus occupés à boire des bières aux préfabs.",
    next: "eb5de058-eab2-11e8-9f32-f2801f1b9fd1",
  },

  {
    id: "eb5de058-eab2-11e8-9f32-f2801f1b9fd1",
    uri: require('../assets/img/story/eb5de058-eab2-11e8-9f32-f2801f1b9fd1.png'),
    title: "TD Sectarisé ?",
    description: "Première réunion, déjà des décisions à prendre concernant les baptêmes, il faut négocier avec l'ULB pour trouver un endroit où faire les baptêmes. Où les faire ?",
    left: {
      text: "JEFKE",
      stats: { ace: +0, ulb: +10, sponsors: +0, cercles: -20 },
      next: "053a8de6-eab3-11e8-9f32-f2801f1b9fd1",
    },
    right: {
      text: "JEFKE",
      stats: { ace: +0, ulb: +10, sponsors: -0, cercles: -20 },
      next: "053a8de6-eab3-11e8-9f32-f2801f1b9fd1",
    },
  },

  {
    id: "053a8de6-eab3-11e8-9f32-f2801f1b9fd1",
    uri: require('../assets/img/story/053a8de6-eab3-11e8-9f32-f2801f1b9fd1.png'),
    title: 'Pull prez ...',
    description: "Toujours dans l'optique d'avoir une bonne cohésion au sein du groupe des présidents, tu te fixes comme objectif de commander les pulls prez au plus tôt. Tu décides de faire un design avec un dessin qui inclut tout le monde ou qui te met en avant ?",
    left: {
      text: "Me mettre en avant",
      stats: { ace: +0, ulb: +8, sponsors: +10, cercles: -15 },
      next: "e7daa252-eab4-11e8-9f32-f2801f1b9fd1",
    },
    right: {
      text: "Inclusif",
      stats: { ace: +5, ulb: -4, sponsors: -2, cercles: +10 },
      next: "e7daa252-eab4-11e8-9f32-f2801f1b9fd1",
    },
  },

  // CP ulb coopération
  {
    id: "e7daa252-eab4-11e8-9f32-f2801f1b9fd1",
    uri: require('../assets/img/story/e7daa252-eab4-11e8-9f32-f2801f1b9fd1.png'),
    title: "Qui a volé ?",
    description: "On te transmet que le panneau ULB coopération a été volé après un TD. Un suspect te parait évident mais tu n'as aucune preuve pour le dénoncer. Que fais-tu ? Faire un groupe de travail (GT) ou dénoncer le CP ?",
    left: {
      text: "Le CP",
      stats: { ace: -5, ulb: +20, sponsors: +5, cercles: -25 },
      next: "f1cecf56-eaa8-11e8-9f32-f2801f1b9fd1",
    },
    right: {
      text: "Faire un GT",
      stats: { ace: +0, ulb: -10, sponsors: -15, cercles: +0 },
      next: "f1cecf56-eaa8-11e8-9f32-f2801f1b9fd1",
    },
  },

  // Bières allégées bevin.
  {
    id: "f1cecf56-eaa8-11e8-9f32-f2801f1b9fd1",
    uri: require('../assets/img/story/f1cecf56-eaa8-11e8-9f32-f2801f1b9fd1.png'),
    title: "Une idée originale ?",
    description: "Après que BevIn soit venu présenter son agenda auprès des cercles, notamment sur les bières allégées, il te vient l'idée d'en servir en période de baptême pour réduire les risques lié à la consommation d'alcool. Mais le prix est un frein, qui va payer une partie des fûts ?",
    left: {
      text: "L'ULB",
      stats: { ace: +5, ulb: -10, sponsors: +20, cercles: +5 },
      next: "d9be6a1e-eaaa-11e8-9f32-f2801f1b9fd1",
    },
    right: {
      text: "Les cercles",
      stats: { ace: -5, ulb: 10, sponsors: -15, cercles: -15 },
      next: "8fdf813e-eaab-11e8-9f32-f2801f1b9fd1",
    },
  },
  {
    id: "d9be6a1e-eaaa-11e8-9f32-f2801f1b9fd1",
    uri: require('../assets/img/story/d9be6a1e-eaaa-11e8-9f32-f2801f1b9fd1.png'),
    title: "C'était si facile ...",
    description: "Tes bonnes relations avec la COCU te permettent d'avoir une réduction sur les prix. L'ULB est prête à rembourser une partie des fûts d'allégées pour rembourser les cercles de leur consommation d'alcool.",
    next: "8b5c8076-eab0-11e8-9f32-f2801f1b9fd1",
  },
  {
    id: "8fdf813e-eaab-11e8-9f32-f2801f1b9fd1",
    title: "Gros désaccord ...",
    description: "Aucun cercle n'est prêt à vous suivre, leurs mots sont les suivant: \"C'est pas à nous d'être responsable de la consommation d'alcool des gens, ils ont qu'à savoir boire\".",
    next: "8b5c8076-eab0-11e8-9f32-f2801f1b9fd1",
  },

  // ULB STARTUP NATION: wyse invite
  {
    id: "8b5c8076-eab0-11e8-9f32-f2801f1b9fd1",
    uri: require('../assets/img/story/8b5c8076-eab0-11e8-9f32-f2801f1b9fd1.png'),
    title: "ACE la futur startup nation ?",
    description: "Comme d'habitude une énième startup veut profiter de la tribune offerte par les réunions ACE auprès des étudiants pour venir faire la promotion de son nouveau produit. Ici, il s'agit d'une boisson énergisante soi-disant naturelle et bio. Il s'agit surtout d'un ancien membre du comité de l'ACE. Qu'est-ce que tu fais ?",
    left: {
      text: "L'inviter",
      stats: { ace: +10, ulb: -10, sponsors: +20, cercles: -15 },
      next: "b9951840-eab0-11e8-9f32-f2801f1b9fd1",
    },
    right: {
      text: "Le refuser",
      stats: { ace: +0, ulb: +10, sponsors: -15, cercles: +0 },
      next: "d217d664-eab0-11e8-9f32-f2801f1b9fd1",
    },
  },
  {
    id: "b9951840-eab0-11e8-9f32-f2801f1b9fd1",
    uri: require('../assets/img/story/b9951840-eab0-11e8-9f32-f2801f1b9fd1.png'),
    title: "",
    description: "Tu as tenu tête à l'ULB qui a interdit les boissons énergisantes. Leur coup de pub a bien fonctionné. Tellement qu'ils fournissent des boissons pour votre prochain team building. Comme quoi parfois ça paye.",
    next: "1a190c59-9560-454c-a1c6-42ecd5f99620",
  },
  {
    id: "d217d664-eab0-11e8-9f32-f2801f1b9fd1",
    uri: require('../assets/img/story/d217d664-eab0-11e8-9f32-f2801f1b9fd1.png'),
    title: "",
    description: "Tu as tenu tête à un ancien de l'ACE malgré ses pressions pour passer en réunion. Les boissons énergisantes sont interdites, les réunions ne sont pas le lieu pour donner une tribune libre aux entreprises privées pour leur permettre de faire de la pub.",
    next: "1a190c59-9560-454c-a1c6-42ecd5f99620",
  },

  {
    id: "1a190c59-9560-454c-a1c6-42ecd5f99620",
    uri: require('../assets/img/story/1a190c59-9560-454c-a1c6-42ecd5f99620.png'),
    title: "Enfin un thème pour la St-V ?",
    description: "Ton VPE a enfin réussi à mettre les cercles d'accord sur un thème pour la St-V qui concerne la communauté LGBTQI+. Un cercle vient souligner que le thème peut potentiellement amener des décors qui sont homophobes. En panique, que fais-tu ? Tu restes sur tes positions, car si les cercles agissent de la sorte cela prouve que le thème est d’actualité et  que changer les mentalités est nécessaire ou décides-tu de changer de thème in extremis ?",
    left: {
      text: "Garder",
      stats: { ace: +0, ulb: +10, sponsors: -0, cercles: +10 },
      next: "5f97e4be-eacc-11e8-9f32-f2801f1b9fd1",
    },
    right: {
      text: "Changer",
      stats: { ace: -10, ulb: -10, sponsors: -0, cercles: -10 },
      next: "5f97e4be-eacc-11e8-9f32-f2801f1b9fd1",
    },
  },

  // Écocups
  {
    id: "5f97e4be-eacc-11e8-9f32-f2801f1b9fd1",
    uri: require('../assets/img/story/5f97e4be-eacc-11e8-9f32-f2801f1b9fd1.png'),
    title: "Le cas écocups",
    description: "Les cercles se sentant concernés par la consommation de déchet dans la Jefke, ces derniers soulèvent un point sur le projet visant à la fin de l'utilisation de gobelets jetable. D'une part, le manque d'infra pour stocker et nettoyer toutes ces écocups à la Jefke d'autre part, la dangerosité de recevoir une écocup sur la tête en Jefke te préoccupent.  Il leur faut une réponse que dis-tu ? ",
    left: {
      text: "Pas assez d'infras",
      stats: { ace: +5, ulb: -5, sponsors: -5, cercles: +15 },
      next: "6b262dbc-eac3-11e8-9f32-f2801f1b9fd1",
    },
    right: {
      text: "Dangerosité",
      stats: { ace: +5, ulb: +10, sponsors: +0, cercles: +10 },
      next: "6b262dbc-eac3-11e8-9f32-f2801f1b9fd1",
    },
  },

  {
    id: "6b262dbc-eac3-11e8-9f32-f2801f1b9fd1",
    uri: require('../assets/img/story/6b262dbc-eac3-11e8-9f32-f2801f1b9fd1.png'),
    title: "Le consentement et BevIn",
    description: "Le représentant de BevIn décide de commander des fûts d'une bière allemande dégueulasse malgré la réponse négative de tous les cercles. Les camions de livraison sont devant ta porte, qu'est-ce que tu fais ?",
    left: {
      text: "Réceptionner",
      stats: { ace: -5, ulb: +0, sponsors: +30, cercles: -30 },
      next: "d8e523bc-eac8-11e8-9f32-f2801f1b9fd1",
    },
    right: {
      text: "Renvoyer",
      stats: { ace: +5, ulb: -0, sponsors: -30, cercles: +15 },
      next: "d8e523bc-eac8-11e8-9f32-f2801f1b9fd1",
    },
  },

  // Aggressions autours de la JEFKE
  {
    id: "d8e523bc-eac8-11e8-9f32-f2801f1b9fd1",
    uri: require('../assets/img/story/d8e523bc-eac8-11e8-9f32-f2801f1b9fd1.png'),
    title: "Mettre les priorités",
    description: "Suite aux nombreuses agressions qui se passent autour de la Jefke, un cercle propose de faire une campagne d'affichage d'urgence pour rappeler les règles de sécurité afin d'éviter les agressions. Qu'allez-vous répondre ?",
    left: {
      text: "Pousser le projet",
      stats: { ace: +5, ulb: -5, sponsors: -5, cercles: +25 },
      next: "9f38edf6-ead2-11e8-9f32-f2801f1b9fd1",
    },
    right: {
      text: "Faire un GT",
      stats: { ace: +15, ulb: +10, sponsors: +5, cercles: +5 },
      next: "9f38edf6-ead2-11e8-9f32-f2801f1b9fd1",
    },
  },

  // Champagne NTV
  {
    id: "9f38edf6-ead2-11e8-9f32-f2801f1b9fd1",
    uri: require('../assets/img/story/9f38edf6-ead2-11e8-9f32-f2801f1b9fd1.png'),
    title: "C'est ma tournée!",
    description: "Le lendemain de la NTV, le trésorier s'affole ! Un trou de plusieurs centaines d'euros dans ses comptes. Les images de surveillance montrent 1/4 de ton comité se servant dans le stock de champagne de la réserve. Tu en parles à la prochaine réunion ACE ou tu attends l'AG de fin d'année ?",
    left: {
      text: "Parler",
      stats: { ace: -15, ulb: -5, sponsors: +0, cercles: +15 },
      next: "bab14d0a-ead0-11e8-9f32-f2801f1b9fd1",
    },
    right: {
      text: "Attendre",
      stats: { ace: +15, ulb: +0, sponsors: +0, cercles: -15 },
      next: "36be27d6-ead3-11e8-9f32-f2801f1b9fd1",
    },
  },
  {
    id: "bab14d0a-ead0-11e8-9f32-f2801f1b9fd1",
    uri: require('../assets/img/story/bab14d0a-ead0-11e8-9f32-f2801f1b9fd1.png'),
    title: "",
    description: "Devant la pression des cercles, une AG extraordinaire est organisée début décembre pour rendre compte du problème et voter l'exclusion des fautifs. Cette AG est également l'occasion pour tous les membres du comité de faire le point sur leurs activités.",
    next: "d9644646-eb50-11e8-9f32-f2801f1b9fd1",
  },
  {
    id: "36be27d6-ead3-11e8-9f32-f2801f1b9fd1",
    uri: require('../assets/img/story/36be27d6-ead3-11e8-9f32-f2801f1b9fd1.png'),
    title: "",
    description: "La transparence c'est bien pour les autres! Autant noyer le poisson le plus longtemps possible. Il faudrait vraiment pas que les cercles mettent leur nez dans nos affaires. A l'AG de fin d'année, il sera trop tard pour qu'ils réagissent...",
    next: "d9644646-eb50-11e8-9f32-f2801f1b9fd1",
  },

  {
    id: "d9644646-eb50-11e8-9f32-f2801f1b9fd1",
    uri: require('../assets/img/story/d9644646-eb50-11e8-9f32-f2801f1b9fd1.png'),
    title: "Mais pour qui ils se prennent ?",
    description: "Le jour de la St-V un cercle se permet de faire un jeu vidéo qui critique nos agissements. Comment réagir ? On laisse tomber parce que ça fait partie de l'esprit de la St-V ou on s'en prend à eux, c'est vrai qu'ils vont pas réussir à tenir longtemps",
    left: {
      text: "Laisser tomber",
      stats: { ace: +5, ulb: -5, sponsors: -5, cercles: +25 },
      next: "0eeebd60-a784-4c31-9d85-4759932e6ad1",
    },
    right: {
      text: "Faire un GT",
      stats: { ace: 0, ulb: +10, sponsors: +5, cercles: +5 },
      next: "0eeebd60-a784-4c31-9d85-4759932e6ad1",
    },
  },
  // UPDATE 2019 

    // location litigieuse
  {
    id: "0eeebd60-a784-4c31-9d85-4759932e6ad1",
    uri: require('../assets/img/story/0eeebd60-a784-4c31-9d85-4759932e6ad1.png'),
    title: "Location Litigieuse",
    description: "Un Ordre louant un cercle pour une soirée a déféqué dans un frigo de Oxedos et fracassé la porte d’entrée du dit cercle .... Que faire pour leur rendre justice ?",
    left: {
      text: "Accuser les EDD",
      stats: { ace: +10, ulb: +5, sponsors: -5, cercles: +25 },
      next: "72e2faaa-a1e0-4856-a189-aa6cca1dca95",
    },
    right: {
      text: "Dénoncer les Gastériens",
      stats: { ace: -5, ulb: +10, sponsors: -5, cercles: +10 },
      next: "72e2faaa-a1e0-4856-a189-aa6cca1dca95",
    },
  },


  // Sol Glissant en Jefke
  {
    id: "72e2faaa-a1e0-4856-a189-aa6cca1dca95",
    uri: require('../assets/img/story/72e2faaa-a1e0-4856-a189-aa6cca1dca95.png'),
    title: "Sol Glissant en Jefke",
    description: "Des étudiants se sont blessées dans les WC de la Jefke. En effet, le sol devenu glissant suite à l'utilisation répétée. On vous répète que cela est dangereux pour le bien de tous mais que pour le réparer il faudrait attendre la période creuse sans TD pour éviter d'empêcher les festivités. Que faites -vous ?",
    left: {
      text: "Fermer dès maintenant",
      stats: { ace: +5, ulb: +15, sponsors: -5, cercles: -15 },
      next: "6fa04fbb-e21e-40c5-b7b2-1034e50ec4d1",
    },
    right: {
      text: "Attendre la fin des TD",
      stats: { ace: +5, ulb: -15, sponsors: 0, cercles: +5 },
      next: "6fa04fbb-e21e-40c5-b7b2-1034e50ec4d1",
    },
  },

  // Blues in distress
  {
    id: "6fa04fbb-e21e-40c5-b7b2-1034e50ec4d1",
    uri: require('../assets/img/story/6fa04fbb-e21e-40c5-b7b2-1034e50ec4d1.png'),
    title: "Blues in distress",
    description: "En période de bleusaille, un bleu en TD te demande de l’affoner. En tant que président folklo, comment réagis-tu ?",
    left: {
      text: "Demander au bleu d'aller chercher des bières",
      stats: { ace: +5, ulb: 0, sponsors: 0, cercles: +5 },
      next: "89d6c5b1-0740-4376-9f79-440c4276de52",
    },
    right: {
      text: "Affoner la demi-bière plate du bleu",
      stats: { ace: +5, ulb: 0, sponsors: 0, cercles: -1 },
      next: "89d6c5b1-0740-4376-9f79-440c4276de52",
    },
  },


  // Chasse à la baleine
  {
    id: "89d6c5b1-0740-4376-9f79-440c4276de52",
    uri: require('../assets/img/story/89d6c5b1-0740-4376-9f79-440c4276de52.png'),
    title: "Chasse à la baleine",
    description: "Suite aux importants travaux d’aménagement à côté de la Jefke pour faciliter l’accès à la future maison de retraite, les autorités de l’ULB décident d'aplatir la baleine. Étant un repère pour beaucoup d’étudiants, tu dois te positionner vis à vis de sa suppression.",
    left: {
      text: "Lancer une ASBL “Sauver la Baleine”",
      stats: { ace: -5, ulb: -10, sponsors: -5, cercles: +15 },
      next: "b85ffa0f-ca47-4300-ad97-db020fb3588c",
    },
    right: {
      text: "Chercher une nouvelle Jefke",
      stats: { ace: +5, ulb: +5, sponsors: +5, cercles: -5 },
      next: "b85ffa0f-ca47-4300-ad97-db020fb3588c",
    },
  },

  // Buffalo
  {
    id: "b85ffa0f-ca47-4300-ad97-db020fb3588c",
    uri: require('../assets/img/story/b85ffa0f-ca47-4300-ad97-db020fb3588c.png'),
    title: "Buffalo",
    description: "Étant assez éreinté par ton rôle de président du décide d’aller en TD pour te changer les idées … À peine après t’être servi un verre, un pote voulant t’attirer dans un traquenard te crie “Buffalo” !",
    left: {
      text: "Affoner”",
      stats: { ace: +2, ulb: 0, sponsors: 0, cercles: +5 },
      next: "961f8721-6cf6-460d-b630-1fe4cffb0ccf",
    },
    right: {
      text: "Euh non Geronimo",
      stats: { ace: -2, ulb: 0, sponsors: 0, cercles: -5 },
      next: "961f8721-6cf6-460d-b630-1fe4cffb0ccf",
    },
  },

  // Sur le chemin d’Erasme 
  {
    id: "961f8721-6cf6-460d-b630-1fe4cffb0ccf",
    uri: require('../assets/img/story/961f8721-6cf6-460d-b630-1fe4cffb0ccf.png'),
    title: "Sur le chemin d’Erasme",
    description: "Un étudiant du pôle santé (Erasme) intéressé à faire son baptême te demande de localiser le cercle le plus musclé de l'ULB. En tant que bon président, tu ... ",
    left: {
      text: "montres le CKO",
      stats: { ace: +2, ulb: 0, sponsors: 0, cercles: +5 },
      next: "047f4745-e2e6-4e49-9a7f-a3136a4d100e",
    },
    right: {
      text: "montres l'ISEP",
      stats: { ace: -2, ulb: 0, sponsors: 0, cercles: -5 },
      next: "047f4745-e2e6-4e49-9a7f-a3136a4d100e",
    },
  },

  // Musique en Jefke
  {
    id: "047f4745-e2e6-4e49-9a7f-a3136a4d100e",
    uri: require('../assets/img/story/047f4745-e2e6-4e49-9a7f-a3136a4d100e.png'),
    title: "Musique en Jefke",
    description: "En réunion ACE, un président de cercle se plaint de la musique redondante en Jefke. Il voudrait y apporter du folklore propre à son cercle…  ",
    left: {
      text: "Pookie",
      stats: { ace: -5, ulb: 0, sponsors: 0, cercles: -5 },
      next: "8d5f36a5-17bb-4518-ae5c-4ef5e838cfa1",
    },
    right: {
      text: "Drum & Bass",
      stats: { ace: +5, ulb: 0, sponsors: 0, cercles: +5 },
      next: "8d5f36a5-17bb-4518-ae5c-4ef5e838cfa1",
    },
  },

  // Post St V
  {
    id: "8d5f36a5-17bb-4518-ae5c-4ef5e838cfa1",
    uri: require('../assets/img/story/8d5f36a5-17bb-4518-ae5c-4ef5e838cfa1.png'),
    title: "Post St V",
    description: "Le lendemain de la St V, tu te rends compte que tu as vraiment déconné la veille. Malgré cela,aujourd’hui, tu décides de prendre une grande décision très importante pour ton mandat …",
    left: {
      text: "WC",
      stats: { ace: +5, ulb: 0, sponsors: -2, cercles: 0 },
      next: "0e178bab-4034-467e-bab1-846f364836b9",
    },
    right: {
      text: "Aquarius",
      stats: { ace: +5, ulb: 0, sponsors: +5, cercles: 0 },
      next: "0e178bab-4034-467e-bab1-846f364836b9",
    },
  },

  // Fumer en jefke
  {
    id: "0e178bab-4034-467e-bab1-846f364836b9",
    uri: require('../assets/img/story/0e178bab-4034-467e-bab1-846f364836b9.png'),
    title: "Fumer en Jefke",
    description: "Un agent de sécurité anonyme met la pression à l’ULB quand aux fumeurs passifs en Jefke et au fait que cela est interdit depuis la création de la Jefke. Que faire ?",
    left: {
      text: "Continuer de fumer",
      stats: { ace: -10, ulb: -10, sponsors: 0, cercles: +5 },
      next: "c27b907e-560e-48e5-888e-5883a432e09b",
    },
    right: {
      text: "Interdire de fumer",
      stats: { ace: +10, ulb: +10, sponsors: 0, cercles: -5 },
      next: "c27b907e-560e-48e5-888e-5883a432e09b",
    },
  },

  // TD Ecocup bis
  {
    id: "c27b907e-560e-48e5-888e-5883a432e09b",
    uri: require('../assets/img/story/c27b907e-560e-48e5-888e-5883a432e09b.png'),
    title: "TD Ecocup Now !",
    description: "Il est temps de se lancer sur un premier TD Ecocups. Cependant, il y a des risques de perdre beaucoup d’argent. Il faut montrer l’exemple. Ne serait-ce pas une bonne occasion pour l’ACE de se mettre en avant ou faudrait-il encore laisser le CP être la vedette ?",
    left: {
      text: "TD Ecocups avec l'ACE",
      stats: { ace: +10, ulb: +5, sponsors: 0, cercles: +5 },
      next: "f523b4df-316c-43dc-a244-d8e4fbd02a28",
    },
    right: {
      text: "TD Ecocups par le CP",
      stats: { ace: -10, ulb: +5, sponsors: 0, cercles: +5 },
      next: "f523b4df-316c-43dc-a244-d8e4fbd02a28",
    },
  },

  // Boissons Énergisante bis
  {
    id: "f523b4df-316c-43dc-a244-d8e4fbd02a28",
    uri: require('../assets/img/story/f523b4df-316c-43dc-a244-d8e4fbd02a28.png'),
    title: "Boissons Énergisante bis ",
    description: " L’ULB interdit de vendre des boissons énergisantes dans les cercles. Cependant, tu te dis que cela pourrait être une alternative à la consommation d’alcool. Vaut-il mieux pousser l'ULB à changer sa politique ou vendre des bières allégées est-il suffisant ?",
    left: {
      text: "Pousser l’ULB ",
      stats: { ace: +5, ulb: -10, sponsors: +10, cercles: +5 },
      next: "",
    },
    right: {
      text: "Bières allégées",
      stats: { ace: -5, ulb: +5, sponsors: +5, cercles: +5 },
      next: "",
    },
  },

  // Boissons Énergisante bis
  {
    id: "f523b4df-316c-43dc-a244-d8e4fbd02a28",
    uri: require('../assets/img/story/f523b4df-316c-43dc-a244-d8e4fbd02a28.png'),
    title: "Boissons Énergisante bis ",
    description: " L’ULB interdit de vendre des boissons énergisantes dans les cercles. Cependant, tu te dis que cela pourrait être une alternative à la consommation d’alcool. Vaut-il mieux pousser l'ULB à changer sa politique ou vendre des bières allégées est-il suffisant ?",
    left: {
      text: "Pousser l’ULB ",
      stats: { ace: +5, ulb: -10, sponsors: +10, cercles: +5 },
      next: "6b418c9b-6b4a-46fe-8c35-18d42e88168c",
    },
    right: {
      text: "Bières allégées",
      stats: { ace: -5, ulb: +5, sponsors: +5, cercles: -5 },
      next: "6b418c9b-6b4a-46fe-8c35-18d42e88168c",
    },
  },

  // Rachat Penne
  {
    id: "6b418c9b-6b4a-46fe-8c35-18d42e88168c",
    uri: require('../assets/img/story/6b418c9b-6b4a-46fe-8c35-18d42e88168c.png'),
    title: "Boissons Énergisante bis ",
    description: "Un bleu fraîchement baptisé a retrouvé ta penne en TD. Celle-ci valant 2 fûts, il te propose un rachat digne de ce nom. Tu hésites aussi à la récupérer à l'aide d'une technique secrète ...",
    left: {
      text: "Rachat ",
      stats: { ace: +5, ulb: 0, sponsors: 0, cercles: +5 },
      next: "d53ad706-77f5-4544-ad0b-cd1eb5264cef",
    },
    right: {
      text: "Pas de Rachat",
      stats: { ace: -5, ulb: 0, sponsors: 0, cercles: -10 },
      next: "d53ad706-77f5-4544-ad0b-cd1eb5264cef",
    },
  },

  // Décors St V
  {
    id: "d53ad706-77f5-4544-ad0b-cd1eb5264cef",
    uri: require('../assets/img/story/d53ad706-77f5-4544-ad0b-cd1eb5264cef.png'),
    title: "Décors St V",
    description: "Il faut décider des décors que nous afficherons sur les chars de la St V. Une idée survient, noter le numéro de gsm privé du bourgmestre de la ville de Bruxelles pour dénoncer son inaction au détriment du harcèlement de ce dernier. Mettre le numéro de Roger te parait aussi être une bonne idée ... ",
    left: {
      text: "Bourgmestre ",
      stats: { ace: -10, ulb: -10, sponsors: -5, cercles: +5 },
      next: "74cf4232-57fa-4bb6-8b38-46c0efffd2bc",
    },
    right: {
      text: "Roger",
      stats: { ace: +5, ulb: 0, sponsors: 0, cercles: +10 },
      next: "74cf4232-57fa-4bb6-8b38-46c0efffd2bc",
    },
  },

  // Affaire Roger
  {
    id: "74cf4232-57fa-4bb6-8b38-46c0efffd2bc",
    uri: require('../assets/img/story/74cf4232-57fa-4bb6-8b38-46c0efffd2bc.png'),
    title: "Affaire Roger",
    description: "Une fois encore, nous avons eu des problèmes avec les pennes des bleu.ette.s 2019 au niveau du prix exigé et de la qualité de couture. De plus, des présidents de cercle s'en sont plaints avec insistance en réunion. Que faire avec Roger ?",
    left: {
      text: "le Soudoyer avec le fond ACE",
      stats: { ace: -5, ulb: 0, sponsors: 0, cercles: -10 },
      next: "",
    },
    right: {
      text: "Changer de fournisseur",
      stats: { ace: +5, ulb: 0, sponsors: 0, cercles: +10 },
      next: "",
    },
  },

];

const DEFAULT = {
  story: {
    ...StoryAssets[0]
  },
  currentIndex: 0,
};

export default class _ extends Container {
  state = DEFAULT;

  isLast() {
    return (this.state.story == null && this.state.currentIndex == null);
  }

  isSwipable() {
    return !(
      (this.state.story.left == undefined || this.state.story.left == null) &&
      (this.state.story.right == undefined || this.state.story.right == null)
    );
  }

  set(uuid) {
    if (uuid) {
      this.setState({
        currentIndex: uuid,
        story: {...StoryAssets.find(x => uuid == x.id)}
      });
    } else {
      this.setState({
        currentIndex: null,
        story: null,
      })
    }
  }

  goNext(direction) {
    const newUuid = this.isSwipable() ? this.state.story[direction].next : this.state.story.next

    if (newUuid === "" || newUuid === null) {
      this.set(null);
    } else {
      this.set(newUuid);
    }
  }

  goToApp() {
    this.set("c3ed58dc-ec2e-11e8-8eb2-f2801f1b9fd1");
  }

  goToIntro() {
    this.set("b70d622c-2e13-4d3b-85c4-4135c08f7fdd");
  }

  reset() {
    this.goToApp();
  }
}
