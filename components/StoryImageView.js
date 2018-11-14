import React from 'react';
import { Image } from 'react-native';
import { Subscribe } from 'unstated';
import { StoryContainer } from '../containers';

export default class extends React.Component {
  render() {
    return (
      <Subscribe to={[StoryContainer]}>
        {x => (
          <Image
            style={{
              flex: 1,
              height: null,
              width: null,
              resizeMode: 'cover',
              borderRadius: 10 }}
            source={x.state.story.uri}
          />
        )}
      </Subscribe>
    );
  }
}
