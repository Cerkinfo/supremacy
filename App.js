import React from 'react';
import { Font } from 'expo';
import { StyleSheet, View, Dimensions, Image, Animated, PanResponder } from 'react-native';
import { Container, Button, Text } from 'native-base';
import { Provider } from 'unstated';
import { Main } from './screens';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false
    };
  }

  async componentDidMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });

    this.setState({ fontLoaded: true, });
  }

  render() {
    return (
      <Provider>
        <Container>
          { this.state.fontLoaded ? (<Main/>): (null) }
        </Container>
      </Provider>
    );
  }
}
