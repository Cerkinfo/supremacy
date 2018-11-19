import React from "react";
import { Subscribe } from 'unstated';
import { AppStateContainer, StatsContainer, StoryContainer } from '../../containers';
import { ButtonScreen } from '../../components';

export default ({image, text}) => (
  <Subscribe to={[AppStateContainer, StatsContainer, StoryContainer]}>
    {(state, stats, story) => (
      <ButtonScreen
        title="GAME OVER"
        subtitle={text}
        image={require('../../assets/img/penne.png')}
        buttonText="Recommencer"
        buttonCallback={() => {state.switchToApp(); stats.reset(); story.reset() }}
      />
    )}
  </Subscribe>
)
