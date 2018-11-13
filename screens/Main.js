import React from 'react';
import { StyleSheet, View, Dimensions, Image, Animated, PanResponder } from 'react-native';
import { Header, Footer, StoryView, StoryImageView, AnimatedView } from '../components';
import { Container, Text } from 'native-base';
import { Subscribe } from 'unstated';
import { StatsContainer, StoryContainer } from '../containers';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../settings';

export default class _ extends React.Component {
  constructor(props) {
    super(props);

    this.position = new Animated.ValueXY();
  }

  render() {
    return (
      <Container>
        <Header/>
        <StoryView style={{ flex: 1 }}/>
        <View style={{ flex: 1 }}>
          <Subscribe to={[StoryContainer, StatsContainer]}>
            {(story, stats) => (
              <AnimatedView story={story} stats={stats} position={this.position}>
                <StoryImageView style={{height: SCREEN_HEIGHT/3, width: SCREEN_WIDTH}}/>
              </AnimatedView>
            )}
          </Subscribe>
        </View>
        <Footer/>
      </Container>
    );
  }
}
