import React from 'react';
import { StyleSheet, View, Dimensions, Image, Animated, PanResponder } from 'react-native';
import { Header, Footer, AnimatedView } from '../components';
import { Container, Text } from 'native-base';

const ImgAssets = [
  {
    id: 1,
    uri: require('../assets/img/story/1.jpg'),
    title: 'Ice Cream',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a nibh eget purus venenatis euismod in ac eros.',
  },
  {id: 2, uri: require('../assets/img/story/2.jpg')},
  {id: 3, uri: require('../assets/img/story/3.jpg')},
  {id: 4, uri: require('../assets/img/story/4.jpg')},
  {id: 5, uri: require('../assets/img/story/5.jpg')},
];

export default class _ extends React.Component {
  constructor(props) {
    super(props);

    this.position = new Animated.ValueXY();
  }

  render() {
    return (
      <Container>
        <Header title={ImgAssets[0].title}/>
        <View style={{ flex: 1 }}>
          <AnimatedView position={this.position}>
            <Image
              style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
              source={ImgAssets[0].uri}
            />
          </AnimatedView>
        </View>
        <Footer/>
      </Container>
    );
  }
}
