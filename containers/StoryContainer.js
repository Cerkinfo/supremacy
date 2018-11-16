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
      next: 2,
    },
    right: {
      text: "Dormir",
      stats: { ace: -10, ulb: +5, sponsors: -0, cercles: -15 },
      next: 2,
    },
  },
  {
    id: 2,
    uri: require('../assets/img/story/2.png'),
    title: 'L\'autoluigis',
    description: "Deuxième décision qui peut influencer l'avis que les gens ont de toi est de faire un autoluigis avec un slip que le CP offre. On te le tend, qu'est-ce que tu fais ?",
    left: {
      text: "Autoluigis",
      stats: { ace: -5, ulb: +0, sponsors: +0, cercles: +20 },
      next: 3,
    },
    right: {
      text: "C'est mort",
      stats: { ace: -5, ulb: -0, sponsors: -0, cercles: -5 },
      next: 3,
    },
  },
  {
    id: 3,
    uri: require('../assets/img/story/3.png'),
    title: 'Premiers pas ...',
    description: "Tu prends tes marques sur le groupe facebook, tu essayes de marquer le coup directement en organisant une première rencontre avec les autres présidents pour créer une fausse cohésion de groupe. Que faire ? Bière ou pizza ?",
    left: {
      text: "Bière",
      stats: { ace: +2, ulb: +0, sponsors: +0, cercles: +9 },
      next: 4,
    },
    right: {
      text: "Pizza",
      stats: { ace: -5, ulb: -0, sponsors: -0, cercles: +7 },
      next: 4,
    },
  },
  {
    id: 4,
    uri: require('../assets/img/story/4.png'),
    title: 'Pull prez ...',
    description: "Toujours dans l'optique d'avoir une bonne cohésion au seins du groupe des présidents, tu te fixes comme objectif de commander les pulls prez au plus tôt. Tu décides de faire le design, mais tu fais un dessins qui inclut tout le monde ou qui te met en avant ?",
    left: {
      text: "Me mettre en avant",
      stats: { ace: +2, ulb: +8, sponsors: +10, cercles: -15 },
      next: 5,
    },
    right: {
      text: "Inclusif",
      stats: { ace: +3, ulb: -4, sponsors: -2, cercles: +10 },
      next: 5,
    },
  },
  {
    id: 5,
    uri: require('../assets/img/story/5.png'),
    title: "TD Sectarisé ?",
    description: "Première réunion, déjà les premières décision à prendre concernant le baptême, il faut négocier avec l'ULB pour trouver un endroit où faire les baptêmes. Où le faire ?",
    left: {
      text: "JEFKE",
      stats: { ace: +5, ulb: +10, sponsors: +0, cercles: -20 },
      next: 5,
    },
    right: {
      text: "JEFKE",
      stats: { ace: +5, ulb: +10, sponsors: -0, cercles: -20 },
      next: 5,
    },
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

  goNext(direction) {
    const newIndex = this.state.story[direction].next;
    this.setState({
      currentIndex: newIndex,
      story: {...StoryAssets[newIndex]}
    });
  }

  set(index) {
    this.setState({
      currentIndex: index,
      story: {...StoryAssets[index]}
    });
  }

  reset() {
    this.setState(DEFAULT);
  }
}
