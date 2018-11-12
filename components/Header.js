import React from 'react';
import { StyleSheet, View, Dimensions, Image, Animated, PanResponder } from 'react-native';
import { Header, Body, Title } from 'native-base';
import { StoryContainer } from '../containers';
import { Subscribe } from 'unstated';

export default class _ extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Subscribe to={[StoryContainer]}>
        {x => (
          <Header>
            <Body>
              <Title>{x.state.story.title}</Title>
            </Body>
          </Header>
        )}
      </Subscribe>
    );
  }
}
