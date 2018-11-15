import React from 'react';
import { Container } from 'unstated';

export default class _ extends Container {
  state = {
    index: true,
    intro: false,
    gameover: false,
  };

  switchToGameOver() {
    this.setState({
      index: false,
      intro: false,
      gameover: true,
    });
  }

  switchToApp() {
    this.setState({
      index: false,
      intro: false,
      gameover: false,
    });
  }

  switchToIntro() {
    this.setState({
      index: false,
      intro: true,
      gameover: false,
    });
  }

  switchToIndex() {
    this.setState({
      index: true,
      intro: false,
      gameover: false,
    });
  }
}
