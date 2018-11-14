import React from 'react';
import { ScrollView } from 'react-native';
import { View, Text } from 'native-base';
import { Subscribe } from 'unstated';
import { StoryContainer } from '../containers';
import theme from '../style/theme.style'

export default class _StoryView extends React.Component {
  render() {
    return (
      <Subscribe to={[StoryContainer]}>
        {x => (
          <View style={{
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme.SECONDARY_COLOR,
          }}>
            <Text style={{textAlign: "center", fontFamily: 'Retron2000', fontSize: 14}}>
              {x.state.story.description}
            </Text>
          </View>
        )}
      </Subscribe>
    );
  }
}
