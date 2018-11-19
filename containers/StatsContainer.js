import React from 'react';
import { Container } from 'unstated';
import { ACEHigh, ACELow, CercleHigh, CercleLow, SponsorHigh, SponsorLow, ULBHigh, ULBLow } from '../screens/GameOver';

const DEFAULT = {
  old: {
    ulb: 50,
    cercles: 50,
    ace: 50,
    sponsors: 50,
  },
  ulb: 50,
  cercles: 50,
  ace: 50,
  sponsors: 50,
};

export default class _ extends Container {
  state = DEFAULT;

  diff(x, y) {
    return Math.max(Math.min(x + y, 100), 0);
  }

  isGameOver() {
    console.log(this.state);
    if (this.state.ace == 100) {
      return (<ACEHigh />)
    } else if (this.state.ace == 0) {
      return (<ACELow />)
    } else if (this.state.ulb == 100) {
      return (<ULBHigh />)
    } else if (this.state.ulb == 0) {
      return (<ULBLow />)
    } else if (this.state.sponsors == 100) {
      return (<SponsorHigh />)
    } else if (this.state.sponsors == 0) {
      return (<SponsorLow />)
    } else if (this.state.cercles == 100) {
      return (<CercleHigh />)
    } else if (this.state.cercles == 0) {
      return (<CercleLow />)
    } else {
      return null;
    }
  }

  changeValue(diff) {
    this.setState({
      old: { ...this.state, },
      ulb: this.diff(this.state.ulb, diff.ulb),
      cercles: this.diff(this.state.cercles, diff.cercles),
      ace: this.diff(this.state.ace, diff.ace),
      sponsors: this.diff(this.state.sponsors, diff.sponsors),
    });
  }

  reset() {
    this.setState(DEFAULT);
  }
}
