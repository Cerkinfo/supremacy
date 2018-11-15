import React from 'react';
import { Container } from 'unstated';

export default class _ extends Container {
  state = {
    index: true,
    intro: false,
  };

  switchToApp() {
    this.setState({
      index: false,
      intro: false,
    });
  }

  switchToIntro() {
    this.setState({
      index: false,
      intro: true,
    });
  }
}
