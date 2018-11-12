import React from 'react';
import { ScrollView } from 'react-native';
import { View, Text } from 'native-base';
import { Subscribe } from 'unstated';
import { StoryContainer } from '../containers';

export default class _StoryView extends React.Component {
  render() {
    return (
      <Subscribe to={[StoryContainer]}>
        {x => (
          <View style={{margin: 20, alignItems: 'center', justifyContent: 'center'}}>
            <Text>
              {x.state.story.description}
            </Text>
          </View>
        )}
      </Subscribe>
    );
  }
}
