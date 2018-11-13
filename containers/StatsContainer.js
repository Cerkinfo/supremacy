import React from 'react';
import { Container } from 'unstated';

export default class _ extends Container {
  state = {
    ulb: 0,
    cercles: 0,
    ace: 0,
    sponsors: 0,
  };

  changeValue(diff) {
    this.setState({
      ulb: this.state.ulb + diff.ulb,
      cercles: this.state.cercles + diff.cercles,
      ace: this.state.ace + diff.ace,
      sponsors: this.state.sponsors + diff.sponsors,
    });
  }
}
