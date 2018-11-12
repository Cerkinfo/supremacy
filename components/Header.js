import React from 'react';
import { StyleSheet, View, Dimensions, Image, Animated, PanResponder } from 'react-native';
import { Header, Body, Title } from 'native-base';

export default class _ extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
      </Header>
    );
  }
}
