import React from 'react';
import { StyleSheet, View, Dimensions, Image, Animated, PanResponder } from 'react-native';
import { Header, Footer, StoryView, StoryImageView, AnimatedView, ButtonScreen } from '../components';
import { Container, Text, Body, Button } from 'native-base';
import { Subscribe } from 'unstated';
import { StatsContainer, StoryContainer } from '../containers';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../settings';
import theme from '../style/theme.style'

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
        <Subscribe to={[StoryContainer, StatsContainer]}>
          {(story, stats) => (story.isSwipable() ? (
              <View style={{ flex: 2, backgroundColor: theme.SECONDARY_COLOR }}>
                <AnimatedView story={story} stats={stats} position={this.position}>
                  <StoryImageView style={{height: SCREEN_HEIGHT/3, width: SCREEN_WIDTH}}/>
                </AnimatedView>
              </View>
            ) : (
              <View style={{ flex: 2, backgroundColor: theme.SECONDARY_COLOR, }}>
                <View style={{ flex: 3, justifyContent: 'flex-start', top: "5%", height: "95%", width: "80%", left: "10%", }}>
                  <StoryImageView style={{height: SCREEN_HEIGHT/4, width: SCREEN_WIDTH}}/>
                </View>
                <View style={{ justifyContent: 'flex-end', width: '90%', margin: 20, padding: 10, height: 60}}>
                  <Button
                    block
                    style={{ flex:3, alignItems: 'center', backgroundColor: theme.DISABLED_COLOR, }}
                    onPress={() => story.goNext()}
                  >
                    <Text style={{fontFamily: 'Retron2000', color: 'black', }}>Suivant</Text>
                  </Button>
                </View>
              </View>
          ))}
        </Subscribe>
        <Footer/>
      </Container>
    );
  }
}
