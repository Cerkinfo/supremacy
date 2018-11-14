import React from 'react';
import { Font, AppLoading  } from 'expo';
import { StyleSheet, View, Dimensions, Image, Animated, PanResponder } from 'react-native';
import { Container, Button, Text } from 'native-base';
import { Provider, Subscribe } from 'unstated';
import { AppStateContainer } from './containers';
import { Intro, Main } from './screens';

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
      'Retron2000': require('./assets/fonts/Retron2000.ttf'),
    });

    this.setState({ fontLoaded: true, });
  }

  render() {
    return (
      <Provider>
        <Subscribe to={[AppStateContainer]}>
          {state => (
            <Container>
              {
                this.state.fontLoaded
                  ? state.state.intro
                    ? <Intro/>
                    : <Main/>
                  : <AppLoading/>
              }
            </Container>
          )}
        </Subscribe>
      </Provider>
    );
  }
}
