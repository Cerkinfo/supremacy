import React from "react";
import { Subscribe } from 'unstated';
import { AppStateContainer } from '../containers';
import { ButtonScreen } from '../components';

export default () => (
  <Subscribe to={[AppStateContainer]}>
    {state => (
      <ButtonScreen
        title="Supremacy"
        subtitle="Dans la peau de l'ACE (l'Association des Capitaliste Extrêmiste) juqu'au bout des doigts."
        image={require('../assets/img/penne.png')}
        buttonText="Jouer"
        buttonCallback={() => state.switchToIntro()}
        subButtonTitle="Toute ressemblance avec des personnes existantes ou ayant existé est purement fortuite."
      />
    )}
  </Subscribe>
)
