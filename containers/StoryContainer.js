import React from 'react';
import { Container } from 'unstated';


const StoryAssets = [
  {
    id: 0,
    uri: require('../assets/img/story/0.png'),
    title: "",
    description: "",
    left: {
      text: "Go !",
      stats: { ace: +0, ulb: +0, sponsors: +0, cercles: +0 },
      next: 1,
    },
    right: {
      text: "Attendre ..." ,
      stats: { ace: -0, ulb: -0, sponsors: -0, cercles: -0 },
      next: 0,
    },
  },
  {
    id: 1,
    uri: require('../assets/img/story/1.jpg'),
    title: 'Bienvenu au nouveau prez !',
    description: "Bonjour au nouveau prez de l'ACE ! Fraichement élu par l'AG car personne ne veut se présenter à ce poste et tous les anciens ont déserté le comité, tu dois faire la première décision de ton mandat. Que faire ce soir ?",
    left: {
      text: "Gauguin",
      stats: { ace: +15, ulb: -5, sponsors: -5, cercles: +15 },
      next: "4fd1cbda-eab3-11e8-9f32-f2801f1b9fd1",
    },
    right: {
      text: "Dormir",
      stats: { ace: -10, ulb: +5, sponsors: -0, cercles: -15 },
      next: "4fd1cbda-eab3-11e8-9f32-f2801f1b9fd1",
    },
  },

  {
    id: "4fd1cbda-eab3-11e8-9f32-f2801f1b9fd1",
    uri: require('../assets/img/story/4fd1cbda-eab3-11e8-9f32-f2801f1b9fd1.png'),
    title: 'L\'autoluigis',
    description: "Le CP te tend un slip ! Que faire ? Autoluigis direct ou tu le gardes pour le donner aux réfugiés ?",
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
    description: "Tu prends tes marques sur le groupe facebook, tu essayes de marquer le coup directement en organisant une première rencontre avec les autres présidents pour créer une fausse cohésion de groupe. Que faire ? Bière ou pizza ?",
    left: {
      text: "Bière",
      stats: { ace: +2, ulb: +0, sponsors: +0, cercles: +9 },
      next: "053a8de6-eab3-11e8-9f32-f2801f1b9fd1",
    },
    right: {
      text: "Pizza",
      stats: { ace: -5, ulb: -0, sponsors: -0, cercles: +7 },
      next: "053a8de6-eab3-11e8-9f32-f2801f1b9fd1",
    },
  },

  {
    id: "053a8de6-eab3-11e8-9f32-f2801f1b9fd1",
    uri: require('../assets/img/story/053a8de6-eab3-11e8-9f32-f2801f1b9fd1.png'),
    title: 'Pull prez ...',
    description: "Toujours dans l'optique d'avoir une bonne cohésion au sein du groupe des présidents, tu te fixes comme objectif de commander les pulls prez au plus tôt. Tu décides de faire le design, mais tu fais un dessin qui inclut tout le monde ou qui te met en avant ?",
    left: {
      text: "Me mettre en avant",
      stats: { ace: +2, ulb: +8, sponsors: +10, cercles: -15 },
      next: "eb5de058-eab2-11e8-9f32-f2801f1b9fd1",
    },
    right: {
      text: "Inclusif",
      stats: { ace: +3, ulb: -4, sponsors: -2, cercles: +10 },
      next: "eb5de058-eab2-11e8-9f32-f2801f1b9fd1",
    },
  },

  {
    id: "eb5de058-eab2-11e8-9f32-f2801f1b9fd1",
    uri: require('../assets/img/story/eb5de058-eab2-11e8-9f32-f2801f1b9fd1.png'),
    title: "TD Sectarisé ?",
    description: "Première réunion, déjà des décisions à prendre concernant les baptêmes, il faut négocier avec l'ULB pour trouver un endroit où faire les baptêmes. Où le faire ?",
    left: {
      text: "JEFKE",
      stats: { ace: +5, ulb: +10, sponsors: +0, cercles: -20 },
      next: "44db8aaa-eab7-11e8-9f32-f2801f1b9fd1",
    },
    right: {
      text: "JEFKE",
      stats: { ace: +5, ulb: +10, sponsors: -0, cercles: -20 },
      next: "44db8aaa-eab7-11e8-9f32-f2801f1b9fd1",
    },
  },

  // BEA on veut mieux que ça
  {
    id: "44db8aaa-eab7-11e8-9f32-f2801f1b9fd1",
    uri: require('../assets/img/story/44db8aaa-eab7-11e8-9f32-f2801f1b9fd1.png'),
    title: "Il est venu le temps de militer ?",
    description: "Comme à son habitude, le BEA demande l'avis des cercles de l'ACE pour signer une charte commune pour le refinancement de l'enseignement. L'ACE doit aussi se positionner par apport à ça.",
    left: {
      text: "Signer",
      stats: { ace: +5, ulb: +0, sponsors: -5, cercles: +0 },
      next: "8e2e5d4e-eab8-11e8-9f32-f2801f1b9fd1",
    },
    right: {
      text: "Ne pas signer",
      stats: { ace: +0, ulb: +0, sponsors: +15, cercles: -20 },
      next: "9626d558-eab8-11e8-9f32-f2801f1b9fd1",
    },
  },
  {
    id: "8e2e5d4e-eab8-11e8-9f32-f2801f1b9fd1",
    uri: require('../assets/img/story/8e2e5d4e-eab8-11e8-9f32-f2801f1b9fd1.png'),
    title: "",
    description: "L'ensemble des cercles ont décidé de signer la charte commune comme à leur habitude. Il serait en effet trop mal vu pour eux de refuser de signer une telle charte et donc se contente de suivre les autres cercles.",
    next: "80415432-eaba-11e8-9f32-f2801f1b9fd1",
  },
  {
    id: "9626d558-eab8-11e8-9f32-f2801f1b9fd1",
    uri: require('../assets/img/story/9626d558-eab8-11e8-9f32-f2801f1b9fd1.png'),
    title: "Ha bon ?",
    description: "Vous êtes le seul cercle qui décide de ne pas signer la charte commune. Les autres cercles à leur habitude ont tous accepté de signer la charte.",
    next: "5f97e4be-eacc-11e8-9f32-f2801f1b9fd1",
  },
  {
    id: "80415432-eaba-11e8-9f32-f2801f1b9fd1",
    uri: require('../assets/img/story/80415432-eaba-11e8-9f32-f2801f1b9fd1.png'),
    title: "Organize !!!",
    description: "Le jour du rassemblement tu te dis que ça serait pas une mauvaise idée de faire acte de présence pour représenter ton cercle. Une envie soudaine de t'en jeter une petite (bière) apparait néanmoins. Où vas-tu ?",
    left: {
      text: "Préfabs",
      stats: { ace: +5, ulb: +10, sponsors: +0, cercles: +5 },
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
    description: "Tu décides finalement d'aller boire une petite bière malgré la manifestation, tu te dis que ta présence ne changera pas grand-chose au nombre de participants. À ton étonnement en y arrivant tu te rends compte que l'ensemble des comités de cercles est occupé de boire des bières dans les préfabs.",
    next: "5f97e4be-eacc-11e8-9f32-f2801f1b9fd1",
  },
  {
    id: "da1dbb96-eabd-11e8-9f32-f2801f1b9fd1",
    uri: require('../assets/img/story/da1dbb96-eabd-11e8-9f32-f2801f1b9fd1.png'),
    title: "",
    description: "À ton plus grand étonnement tu te rends compte qu'aucun comité de cercle n'a pris la peine de venir au rassemblement, ceux-ci étant plus occupé à boire des bières au préfab.",
    next: "5f97e4be-eacc-11e8-9f32-f2801f1b9fd1",
  },

  // Écocups
  {
    id: "5f97e4be-eacc-11e8-9f32-f2801f1b9fd1",
    uri: require('../assets/img/story/5f97e4be-eacc-11e8-9f32-f2801f1b9fd1.png'),
    title: "Le cas écocups",
    description: "L'ensemble des cercles se sentant concerné par la consommation de déchet dans la Jefke posent de plus en plus de question sur l'état du projet visant à la fin de l'utilisation de gobelets jetable. Il leur faut une réponse que dis-tu ? Les premiers points qui te viennent à l'esprit sont le manque d'infra pour stocker et nettoyer toute ces écocups à la Jefke, le second est la dangerosité de recevoir une écocup sur la tête.",
    left: {
      text: "Les infras",
      stats: { ace: +5, ulb: -5, sponsors: -5, cercles: +15 },
      next: "f1cecf56-eaa8-11e8-9f32-f2801f1b9fd1",
    },
    right: {
      text: "Dangerosité",
      stats: { ace: +5, ulb: +10, sponsors: +0, cercles: +10 },
      next: "f1cecf56-eaa8-11e8-9f32-f2801f1b9fd1",
    },
  },

  // Bières allégées bevin.
  {
    id: "f1cecf56-eaa8-11e8-9f32-f2801f1b9fd1",
    uri: require('../assets/img/story/f1cecf56-eaa8-11e8-9f32-f2801f1b9fd1.png'),
    title: "Une idée originale ?",
    description: "Après qu'BevIn soit venu présenter son agenda au près des cercles, notamment sur les bières avec un taux d'alcool plus faible, il te vient l'idée d'en servir en période de baptême pour réduire les risques lié à la consommation d'alcool. Mais le prix est un frein, qui va payer une partie des fûts ?",
    left: {
      text: "L'ULB",
      stats: { ace: +10, ulb: -10, sponsors: +20, cercles: +5 },
      next: "d9be6a1e-eaaa-11e8-9f32-f2801f1b9fd1",
    },
    right: {
      text: "Les cercles",
      stats: { ace: +2, ulb: +10, sponsors: -15, cercles: -15 },
      next: "8fdf813e-eaab-11e8-9f32-f2801f1b9fd1",
    },
  },
  {
    id: "d9be6a1e-eaaa-11e8-9f32-f2801f1b9fd1",
    uri: require('../assets/img/story/d9be6a1e-eaaa-11e8-9f32-f2801f1b9fd1.png'),
    title: "C'était si facile ...",
    description: "Tes bonnes relations avec la COCU te permettent d'avoir une réduction sur les prix sans trop de soucis. L'ULB est prête à rembourser une partie des fûts d'allégés pour rembourser les cercles de leur consommation d'alcool responsable.",
    next: "1a190c59-9560-454c-a1c6-42ecd5f99620",
  },
  {
    id: "8fdf813e-eaab-11e8-9f32-f2801f1b9fd1",
    title: "Gros désaccord ...",
    description: "Aucun cercle n'est prêt à vous suivre, leurs mots sont les suivant: \"C'est pas à nous d'être responsable de la consommation d'alcool des gens, ils ont qu'à savoir boire\".",
    next: "1a190c59-9560-454c-a1c6-42ecd5f99620",
  },

  {
    id: "1a190c59-9560-454c-a1c6-42ecd5f99620",
    uri: require('../assets/img/story/1a190c59-9560-454c-a1c6-42ecd5f99620.png'),
    title: "Enfin un thème pour la St-V ?",
    description: "Au bout de plusieurs réunions, ton VPE a réussi à mettre les cercles d'accord sur un thème pour la St-V qui concerne la communauté LGBTQI+. Un cercle vient néanmoins souligner que le thème peut potentiellement amener des décors qui sont homophobes. En panique que fais-tu ? Tu restes sur tes positions, car si les cercles agissent de la sorte ça prouve d'autant plus que le thème est d’actualité et changer les mentalités est nécessaire ou tu décides de changer de thème in extremis ?",
    left: {
      text: "Garder",
      stats: { ace: +5, ulb: +10, sponsors: -0, cercles: +10 },
      next: "e7daa252-eab4-11e8-9f32-f2801f1b9fd1",
    },
    right: {
      text: "Changer",
      stats: { ace: -10, ulb: -10, sponsors: -0, cercles: -10 },
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
      next: "8b5c8076-eab0-11e8-9f32-f2801f1b9fd1",
    },
    right: {
      text: "Faire un GT",
      stats: { ace: +15, ulb: -10, sponsors: -15, cercles: +0 },
      next: "8b5c8076-eab0-11e8-9f32-f2801f1b9fd1",
    },
  },

  // ULB STARTUP NATION: wyse invite
  {
    id: "8b5c8076-eab0-11e8-9f32-f2801f1b9fd1",
    uri: require('../assets/img/story/8b5c8076-eab0-11e8-9f32-f2801f1b9fd1.png'),
    title: "ACE la futur startup nation ?",
    description: "Comme d'habitude une énième startup veut profiter de la tribune offerte par les réunions ACE auprès des étudiants pour venir faire la promotion de son nouveau produit. Ici il s'agit d'une boisson énergisante soi-disant naturelle et bio. Il s'agit surtout d'un ancien membre du comité de l'ACE. Qu'est-ce que tu fais ?",
    left: {
      text: "L'inviter",
      stats: { ace: +10, ulb: -10, sponsors: +20, cercles: -15 },
      next: "b9951840-eab0-11e8-9f32-f2801f1b9fd1",
    },
    right: {
      text: "Le refuser",
      stats: { ace: +2, ulb: +10, sponsors: -15, cercles: +0 },
      next: "d217d664-eab0-11e8-9f32-f2801f1b9fd1",
    },
  },
  {
    id: "b9951840-eab0-11e8-9f32-f2801f1b9fd1",
    uri: require('../assets/img/story/b9951840-eab0-11e8-9f32-f2801f1b9fd1.png'),
    title: "",
    description: "Tu as tenu tête à l'ULB qui a interdit les boissons énergisantes. Leur coup de pub a bien fonctionné. Tellement qu'ils fournissent des boissons pour votre prochain team building. Comme quoi parfois ça paye.",
    next: "6b262dbc-eac3-11e8-9f32-f2801f1b9fd1",
  },
  {
    id: "d217d664-eab0-11e8-9f32-f2801f1b9fd1",
    uri: require('../assets/img/story/d217d664-eab0-11e8-9f32-f2801f1b9fd1.png'),
    title: "",
    description: "Tu as tenu tête à un ancien de l'ACE malgré ses pressions pour passer en réunion. Les boissons énergisantes sont interdites et les réunions ne sont pas le lieu pour donner une tribune libre aux entreprises privées pour leur permettre de faire de la pub.",
    next: "6b262dbc-eac3-11e8-9f32-f2801f1b9fd1",
  },

  {
    id: "6b262dbc-eac3-11e8-9f32-f2801f1b9fd1",
    uri: require('../assets/img/story/6b262dbc-eac3-11e8-9f32-f2801f1b9fd1.png'),
    title: "Le consentement et BevIn",
    description: "Le représentant de BevIn décide de commander des fûts d'une bière allemande dégueulasse malgré la réponse négative de tous les cercles. Les camions sont devant ta porte, qu'est-ce que tu fais ?",
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

  {
    id: "",
    uri: require('../assets/img/story/.png'),
    title: "",
    description: "",
    left: {
      text: "",
      stats: { ace: -5, ulb: +0, sponsors: +30, cercles: -30 },
      next: "",
    },
    right: {
      text: "",
      stats: { ace: +5, ulb: -0, sponsors: -30, cercles: +15 },
      next: "",
    },
  },

  // Aggressions autours de la JEFKE
  {
    id: "d8e523bc-eac8-11e8-9f32-f2801f1b9fd1",
    uri: require('../assets/img/story/d8e523bc-eac8-11e8-9f32-f2801f1b9fd1.png'),
    title: "Mettre les priorités",
    description: "Suite aux nombreuses agressions qui se passent autour de la JEFKE, un cercle propose de faire une campagne d'affichage d'urgence pour rappeler les règles de sécurité afin d'éviter des agressions avec des comportements à risque. Qu'allez-vous répondre ?",
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
    description: "Le lendemain de la NTV, le trésorier s'affole! Un trou de plusieurs centaines d'euros dans ses comptes. Les images de surveillance montrent 1/4 de ton comité se servant dans le stock de champagne de la réserve. Tu en parles à la prochaine réunion ACE ou tu attends l'AG de fin d'année ?",
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
    description: "La transparence c'est bien pour les autres! Autant noyer le poisson le plus longtemps possible. Il faudrait vraiment pas que les cercles mettent leur nez dans nos affaires. A l'AG de fin d'année il sera trop tard pour qu'ils réagissent...",
    next: "d9644646-eb50-11e8-9f32-f2801f1b9fd1",
  },

  {
    id: "d9644646-eb50-11e8-9f32-f2801f1b9fd1",
    uri: require('../assets/img/story/d9644646-eb50-11e8-9f32-f2801f1b9fd1.png'),
    title: "Mais pour qui ils se prennent ?",
    description: "Le jour de la St-V un cercle se permet de faire un jeu vidéo qui critique nos agissements. Comment réagir ? On laisse tomber parce que ça fait partie de l'esprit de la StV ou on s'en prend à eux, c'est vrai qu'ils vont pas réussir à tenir longtemps",
    left: {
      text: "Laisser tomber",
      stats: { ace: +5, ulb: -5, sponsors: -5, cercles: +25 },
      next: "",
    },
    right: {
      text: "Faire un GT",
      stats: { ace: +15, ulb: +10, sponsors: +5, cercles: +5 },
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

    if (newUuid == "" || newUuid == null) {
      this.set(null);
    } else {
      this.set(newUuid);
    }
  }

  goToApp() {
    this.set(1);
  }

  goToIntro() {
    this.set(0);
  }

  reset() {
    this.goToApp();
  }
}
