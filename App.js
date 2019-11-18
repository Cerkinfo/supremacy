import React from 'react';
import { Font, AppLoading  } from 'expo';
import { StyleSheet, View, Dimensions, Image, Animated, PanResponder } from 'react-native';
import { Container, Button, Text } from 'native-base';
import { Provider, Subscribe } from 'unstated';
import { AppStateContainer, StoryContainer } from './containers';
import { Credit } from './screens';

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
      'Europhonic': require('./assets/fonts/Europhonic.otf'),
    });

    this.setState({ fontLoaded: true, });
  }

  render() {
    return (
      <Provider>
        <Subscribe to={[AppStateContainer, StoryContainer]}>
          {(state, story) => (
            <Container>
              { this.state.fontLoaded
                  ? story.isLast()
                    ? <Credit/>
                    : state.state.page
                  : <AppLoading/>
              }
            </Container>
          )}
        </Subscribe>
      </Provider>
    );
  }
}
