import React from 'react';
import { Container } from 'unstated';

export default class _ extends Container {
  state = {
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

  diff(x, y) {
    return Math.max(Math.min(x + y, 100), 0);
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
}
