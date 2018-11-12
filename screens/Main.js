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
    this.swipeLeftCallback = this.swipeLeftCallback.bind(this);
    this.swipeRightCallback = this.swipeRightCallback.bind(this);
  }

  goNext(direction) {
    React.createElement(
      Subscribe,
      { to: [StoryContainer, ] },
      story => {
        React.createElement(
          Subscribe,
          { to: [StatsContainer, ] },
          stats => {
            console.log("fjweoijfweoij");
            stats.changeValue(story.state.story.stats[direction]);
            story.goNext();
          }
        );
      }
    );
  }

  swipeLeftCallback() {
    this.goNext(0);
  }

  swipeRightCallback() {
    this.goNext(1);
  }

  render() {
    return (
      <Container>
        <Header/>
        <StoryView style={{ flex: 1 }}/>
        <View style={{ flex: 1 }}>
          <AnimatedView position={this.position} swipeLeftCallback={this.swipeLeftCallback} swipeRightCallback={this.swipeRightCallback}>
            <StoryImageView style={{height: SCREEN_HEIGHT/3, width: SCREEN_WIDTH}}/>
          </AnimatedView>
        </View>
        <Footer/>
      </Container>
    );
  }
}
