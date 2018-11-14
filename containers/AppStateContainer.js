import React from 'react';
import { Container } from 'unstated';

export default class _ extends Container {
  state = {
    intro: true,
  };

  switchToApp() {
    this.setState({
      intro: false,
    });
  }
}
