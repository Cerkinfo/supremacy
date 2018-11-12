import React from 'react';
import { StyleSheet, View, Dimensions, Image, Animated, PanResponder } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

export default class _ extends React.Component {
  constructor(props) {
    super(props);

    this.position = new Animated.ValueXY();
    this.state = {
      currentIndex: 0,
    };
  }

  componentWillMount() {
    this.PanResponder = PanResponder.create({

      onStartShouldSetPanResponder: (evt, gestureState) => true,

      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({ x: gestureState.dx, y: gestureState.dy })
      },

      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 120) {
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          })
        } else if (gestureState.dx < -120) {
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
          }).start(() => {
            this.setState({ currentIndex: this.state.currentIndex + 1 }, () => {
              this.position.setValue({ x: 0, y: 0 })
            })
          })
        } else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4
          }).start()
        }
      }
    })
  }

  render() {
    return (
      <Animated.View
        {...this.PanResponder.panHandlers}
        style={{ transform: this.position.getTranslateTransform(), height: SCREEN_HEIGHT - 120, width: SCREEN_WIDTH, }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}
