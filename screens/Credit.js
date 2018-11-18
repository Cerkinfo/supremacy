import React from 'react';
import { ScrollView, } from "react-native";
import { Subscribe } from 'unstated';
import { AppStateContainer, StatsContainer, StoryContainer } from '../containers';
import { ButtonScreen } from '../components';

export default () => (
  <Subscribe to={[AppStateContainer, StatsContainer, StoryContainer]}>
    {(state, stats, story) => (
      <ScrollView>
        <ButtonScreen
          title="On ne fait que commencer ..."
          subtitle="J'espère que vous avez aimé l'histoire qui vous a été raconté pendants ces quelques minutes de jeu nous avons essayé de jongler un maximum entre les cartes à but humouristique (bien que pas complêtement fausses) et celle relevant complêtement du réelle qui ont choqués l'ensemble des créateurs de ce jeu. Si vous êtes éloignés des cercles étudiants et surtout pas tellement impliqué dedans vous pouriez vous dire que tout cela est bien ridicule et pourtant c'est aujourd'hui la réalitée dans les cercles: le folklore n'a plus aucune portée contestataire et passe son temps à ressasser des problèmes d'un autre siècle lorsque l'urgence est aujourd'hui ailleurs, la conivence avec les entreprises privées est contesté à raison pour l'ULB mais tout les cercles sont prêt à vendre leur valeur de liberté et à sauter sur la première demande de sponsoring venue. Si nous avons pris aujourd'hui le temps et les moyens de monter un tel projet c'est que nous pensons que les cercles se voilent la face sur leurs responsabilitées individuelles, que la contestation n'est en aucun point présente. La St-V en est l'exemple le plus criant, une journée de contestation commune sur toute l'année. Mais où est la contestation ? La plupart des cercles ne se donnent même plus la peine de faire des décors. La St-V ne dérange plus personne, et très certainement pas le pouvoir en place, avec ses slogans jeté en l'air si ce n'est les quelques bourgeois qui passent par le sablon. Pour faire changer les choses au seins de l'université il faut d'abord savoir en premier lieu se remettre personnellement en question et admettre ses propres tord à un niveau où on a une réelle influence."
          buttonText="Recommencer à jouer"
          buttonCallback={() => {state.switchToApp(); stats.reset(); story.reset() }}
          subButtonTitle="Hésitez pas à partager"
        />
      </ScrollView>
    )}
  </Subscribe>
)
