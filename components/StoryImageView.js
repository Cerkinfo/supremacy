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
            style={{ margin: 30, flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 2 }}
            source={x.state.story.image}
          />
        )}
      </Subscribe>
    );
  }
}
