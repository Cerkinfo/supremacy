import React from 'react';
import { StyleSheet, View, Dimensions, Image, Animated, PanResponder } from 'react-native';
import { Text } from 'native-base';
import { StoryContainer } from '../containers';
import { Subscribe } from 'unstated';
import theme from '../style/theme.style'

export default class _ extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Subscribe to={[StoryContainer]}>
        {x => (
          <Text style={{
            textAlign: "center",
            fontSize: 20,
            fontSize: 25,
            backgroundColor: theme.SECONDARY_COLOR,
            paddingBottom: 15
          }}>
            {x.state.story.title}
          </Text>
        )}
      </Subscribe>
    );
  }
}
