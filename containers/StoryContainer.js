import React from 'react';
import { Container } from 'unstated';


const StoryAssets = [
  {
    id: 1,
    uri: require('../assets/img/story/1.jpg'),
    title: 'TD Sectarisé ?',
    description: "N'ayant plus de salle de fête où donner lieu aux baptêmes, il a été soumis en réunion ACE qu'il pourrait y avoir des TD fermés aux non baptisés dans le but de faire des baptêmes à ces moments là... Etes-vous pour ou contre cette résolution ?",
    left: "Non",
    right: "Oui",
    // 1er Swipe Left (refusé), 2eme Right (accepté)
    stats: [
      { ace: +1, ulb: +2, sponsors: +3, cercles: +4 },
      { ace: -1, ulb: -2, sponsors: -3, cercles: -4 },
    ]

  },
  {
    id: 2,
    uri: require('../assets/img/story/2.jpg'),
    title: 'Eco Cups ? On boit dans le vent ?',
    description: " L'ULB souhaiterait être plus propre quant à la production de déchets aux TD. Etes-vous d'accord avec la mise en place d'Eco Cups (gobelets réutilisables) en Jefke ?",
    left: "Non",
    right: "Oui",
    // 1er Swipe Left (refusé), 2eme Right (accepté)
    stats:[
        {ace:+1,ulb:+2,sponsors:+3,cercles:+4},
        {ace:-1,ulb:-2,sponsors:-3,cercles:-4}]

  },
];


export default class _ extends Container {
  state = {
    story: {
      title: StoryAssets[0].title,
      description: StoryAssets[0].description,
      uri: StoryAssets[0].uri,
      stats: StoryAssets[0].stats,
    },
    currentIndex: 0,
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.currentIndex < this.state.currentIndex) {
    }
  }

  goNext() {
    const newIndex = this.state.currentIndex + 1
    this.setState({
      currentIndex: newIndex,
      story: {...StoryAssets[newIndex]}
    });
  }
}
