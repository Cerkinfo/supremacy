import React from 'react';
import { Container } from 'unstated';
import { Intro, LandingPage, Main } from '../screens';

export default class _ extends Container {
  state = {
    page: <LandingPage/>,
  };

  switchToGameOver() {
    // this.setState({
    //   page: ,
    // });
  }

  switchToApp() {
    this.setState({
      page: <Main/>,
    });
  }

  switchToIntro() {
    this.setState({
      page: <Intro/>,
    });
  }

  switchToIndex() {
    this.setState({
      page: <LandingPage/>,
    });
  }
}
