import React from 'react';
import { StyleSheet, View, Image, Animated, PanResponder } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../settings'
import { Text } from 'native-base';
import theme from '../style/theme.style'

export default class _ extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
    };

    this.rotate = this.props.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ['-10deg', '0deg', '10deg'],
      extrapolate: 'clamp',
    })

    this.rotateAndTranslate = {
      transform: [{
        rotate: this.rotate
      },
      ...this.props.position.getTranslateTransform(),
    ]};

    this.rightSwipeOpacity = this.props.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 4, 0, SCREEN_WIDTH / 4],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp',
    });

    this.leftSwipeOpacity = this.props.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 4, 0, SCREEN_WIDTH / 4],
      outputRange: [1, 0, 0],
      extrapolate: 'clamp',
    });
  }

  componentWillMount() {
    this.PanResponder = PanResponder.create({

      onStartShouldSetPanResponder: (evt, gestureState) => true,

      onPanResponderMove: (evt, gestureState) => {
        this.props.position.setValue({ x: gestureState.dx, y: 0 })
      },

      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 120) {
          Animated.spring(this.props.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: 0 }
          }).start(() => {
            this.props.stats.changeValue(this.props.story.state.story.stats[1]);
            this.props.story.goNext();
            this.props.position.setValue({ x: 0, y: 0 });

          })
        } else if (gestureState.dx < -120) {
          Animated.spring(this.props.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: 0 }
          }).start(() => {
            this.props.stats.changeValue(this.props.story.state.story.stats[0]);
            this.props.story.goNext();
            this.props.position.setValue({ x: 0, y: 0 });
          })
        } else {
          Animated.spring(this.props.position, {
            toValue: { x: 0, y: 0 },
            friction: 4
          }).start()
        }
      }
    })
  }

  getFontSize(text) {
    return text.length > 10 ? 16 : 32;
  }

  render() {
    return (
      <View>
        <View style={{
          position: "absolute",
          top: "5%",
          height: "95%",
          width: "80%",
          left: "10%",
          backgroundColor: theme.BACKGROUND_COLOR,
          borderRadius: 10,
        }}>
          <Image
            source={require('../assets/img/logos/sceau.png')}
            style={{
              flex: 1,
              height: undefined,
              width: undefined,
              margin: "10%",
              tintColor: theme.DISABLED_COLOR
            }}
              resizeMode="center" />
        </View>
        <Animated.View
            {...this.PanResponder.panHandlers}
            style={[this.rotateAndTranslate, { top: "5%", height: "95%", width: "80%", left: "10%" }]}>
            <Animated.View style={{ opacity: this.rightSwipeOpacity, position: 'absolute', top: 50, left: 40, zIndex: 1000}}>
              <Text style={{ borderWidth: 1, borderColor: theme.SECONDARY_COLOR, color: theme.SECONDARY_COLOR, fontSize:this.getFontSize(this.props.story.state.story.right), fontWeight: '800', padding: 10 }}>
                {this.props.story.state.story.right ? this.props.story.state.story.right : "Non"}
              </Text>
            </Animated.View>
            <Animated.View style={{ opacity: this.leftSwipeOpacity, position: 'absolute', top: 50, right: 40, zIndex: 1000}}>
              <Text style={{ borderWidth: 1, borderColor: theme.SECONDARY_COLOR, color: theme.SECONDARY_COLOR, fontSize: this.getFontSize(this.props.story.state.story.left), fontWeight: '800', padding: 10 }}>
                {this.props.story.state.story.left ? this.props.story.state.story.left: "Oui"}
              </Text>
            </Animated.View>
            {this.props.children}
        </Animated.View>
      </View>
    );
  }
}
