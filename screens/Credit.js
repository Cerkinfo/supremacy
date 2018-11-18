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
          subtitle="Nous espérons que vous avez apprécié l'histoire qui vous a été contée pendant ces quelques minutes de jeu. Nous avons essayé de jongler un maximum entre les cartes à but humoristique (bien que pas complètement fausses) et celles relevant, malheureusement, du réel qui ont choqués les créateurs de ce jeu. Si vous êtes éloignés des cercles étudiants et n'y êtes pas impliqués, vous pourriez vous dire que tout cela est bien ridicule et pourtant c'est aujourd'hui une réalité: le folklore n'a plus aucune portée contestataire et passe son temps à ressasser des problèmes d'un autre siècle lorsque l'urgence est maintenant ailleurs. La connivence avec les entreprises privées est contestée à raison pour l'ULB mais tous les cercles sont prêt mettre de côté leur liberté et leur indépendance pour sauter sur la première demande de sponsoring venue. Si nous avons pris le temps et les moyens de monter un tel projet c'est que nous pensons que les cercles se voilent la face sur leurs responsabilités individuelles. La &quot;désobéissance civile&quot; citée pour expliquer le thème de la St-V 2018 n'est qu'un slogan de plus, vide de sens, car nullement appuyé par des actes. La St-V en est l'exemple le plus criant, une journée de contestation commune sur toute l'année. Mais où est la contestation? La plupart des cercles ne se donnent même plus la peine de faire des décors. La St-V ne dérange plus personne, et très certainement pas le pouvoir en place, avec ses slogans jeté en l'air si ce n'est les quelques bourgeois qui passent par le sablon. Pour faire changer les choses au sein de l'université, il faut d'abord savoir en premier lieu se remettre personnellement en question et admettre ses propres tords à son niveau, là où nos actions ont un impact direct."
          buttonText="Recommencer à jouer"
          buttonCallback={() => {state.switchToApp(); stats.reset(); story.reset() }}
          subButtonTitle="Hésitez pas à partager"
        />
      </ScrollView>
    )}
  </Subscribe>
)
