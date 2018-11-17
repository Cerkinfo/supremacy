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
    description: "Bonjour nouveau prez ! Fraichement élu par l'AG car personne ne veut se présenter à ce poste et tout les anciens ont déserté le comité, tu dois faire la première décision de ton mandat. Que faire ce soir ?",
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
    description: "Deuxième décision qui peut influencer l'avis que les gens ont de toi est de faire un autoluigis avec un slip que le CP offre. On te le tend, qu'est-ce que tu fais ?",
    left: {
      text: "Autoluigis",
      stats: { ace: -5, ulb: +0, sponsors: +0, cercles: +20 },
      next: "183c404c-eab3-11e8-9f32-f2801f1b9fd1",
    },
    right: {
      text: "C'est mort",
      stats: { ace: -5, ulb: -0, sponsors: -0, cercles: -5 },
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
    description: "Toujours dans l'optique d'avoir une bonne cohésion au seins du groupe des présidents, tu te fixes comme objectif de commander les pulls prez au plus tôt. Tu décides de faire le design, mais tu fais un dessins qui inclut tout le monde ou qui te met en avant ?",
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
    description: "Première réunion, déjà les premières décision à prendre concernant le baptême, il faut négocier avec l'ULB pour trouver un endroit où faire les baptêmes. Où le faire ?",
    left: {
      text: "JEFKE",
      stats: { ace: +5, ulb: +10, sponsors: +0, cercles: -20 },
      next: "f1cecf56-eaa8-11e8-9f32-f2801f1b9fd1",
    },
    right: {
      text: "JEFKE",
      stats: { ace: +5, ulb: +10, sponsors: -0, cercles: -20 },
      next: "f1cecf56-eaa8-11e8-9f32-f2801f1b9fd1",
    },
  },

  // Bières allégées bevin.
  {
    id: "f1cecf56-eaa8-11e8-9f32-f2801f1b9fd1",
    uri: require('../assets/img/story/f1cecf56-eaa8-11e8-9f32-f2801f1b9fd1.png'),
    title: "Une idée originale ?",
    description: "Après qu'InbeV soit venu présenté son agenda au près des cercles, notamment sur les bières avec un taux d'alcool plus faible, il te viens l'idée d'en servir en période de baptême pour réduire les risques lié à la consommation d'alcool. Mais le prix est un frein, qui va payer une partie des fûts ?",
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
    title: "C'était si facile ...",
    description: "T'es bonne relation avec la COCU te permette d'avoir une réduction sur les prix sans trop de soucis. L'ULB est prête à rembourser une partie des fûts d'alléger pour rembourser les cercles de leur consommation d'alcool responsable.",
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
    description: "Comme d'habitude une enième startup veut profiter de la tribune offerte par les réunions ACE au près des étudiants pour venir faire la promotion de son nouveau produit. Ici il s'agit d'une boisson énergissant soit disant naturelle et bio. Il s'agit surtout d'un ancien membre du comité de l'ACE. Qu'est-ce que tu fais ?",
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
    description: "Tu as fait tête à l'ULB qui à interdit les boissons énergisante. Leur coup de pub a bien fonctionné. Tellement qu'ils fournissent des boissons pour votre prochain team building. Comme quoi parfois ça paye.",
    next: 9,
  },
  {
    id: "d217d664-eab0-11e8-9f32-f2801f1b9fd1",
    uri: require('../assets/img/story/d217d664-eab0-11e8-9f32-f2801f1b9fd1.png'),
    title: "",
    description: "Tu as tenu tête à un ancien de l'ACE malgrés ses pression pour passer en réunion. Les boissons énergisante sont interdites et les réunions ne sont pas le lieu pour donner une tribune libre aux entreprises privées pour leur permettre de faire de la pub.",
    next: 9,
  },
];

const DEFAULT = {
  story: {
    title: StoryAssets[0].title,
    description: StoryAssets[0].description,
    uri: StoryAssets[0].uri,
    left: StoryAssets[0].left,
    right: StoryAssets[0].right,
    stats: StoryAssets[0].stats,
  },
  currentIndex: 0,
};

export default class _ extends Container {
  state = DEFAULT;

  isLast() {
    return (this.state.currentIndex + 1) == StoryAssets.length;
  }

  isSwipable() {
    return !(
      (this.state.story.left == undefined || this.state.story.left == null) &&
      (this.state.story.right == undefined || this.state.story.right == null)
    );
  }

  set(uuid) {
    this.setState({
      currentIndex: uuid,
      story: {...StoryAssets.find(x => uuid == x.id)}
    });
  }

  goNext(direction) {
    const newUuid = this.isSwipable() ? this.state.story[direction].next : this.state.story.next

    this.set(newUuid);
  }

  goToApp() {
    this.set(1);
  }

  goToIntro() {
    this.set(0);
  }

  reset() {
    this.setState(DEFAULT);
  }
}
