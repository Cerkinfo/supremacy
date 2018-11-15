import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Text, Image, Grid, Col } from 'react-native';
import { LinearGradient } from 'expo';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Subscribe } from 'unstated';
import { AppStateContainer } from '../containers';
import { SCREEN_WIDTH } from '../settings';
import theme from '../style/theme.style'

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    margin: 30,
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'center',
    borderRadius: 30,
  },
  icon: {
    left: 25,
    width: 30,
    height: 30,
    resizeMode: 'center',
    tintColor: 'white',
  },
  line: {
    color: 'rgba(255, 255, 255, 0.8)',
    width: (3 * SCREEN_WIDTH) / 5,
    backgroundColor: 'transparent',
    fontFamily: 'Retron2000',
    left: 40,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 32,
    marginBottom: 32,
    fontFamily: 'Retron2000'
  },
  title: {
    fontSize: 22,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: 'Retron2000'
  }
});

const slides = [
  {
    key: '1',
    title: 'Qu\'est ce que c\'est ?',
    text: 'Supremacy est le jeu qui vous met dans la peau d\'un délégué de l\'ACE le long d\'une partie',
    image: require('../assets/img/intro/cheers.png'),
    icon: 'ios-images-outline',
    colors: [theme.PRIMARY_COLOR, theme.DISABLED_COLOR],
  },
  {
    key: '2',
    title: 'Comment jouer ?',
    text: 'C\'est simple, vous avez déjà utilisé Tinder ? Le principe est le même des images arrivent à l\'écran et c\'est à vous de décidé si vous l\'acceptez ou refusez en swipant vers la gauche ou la droite.',
    image: require('../assets/img/intro/swipe.png'),
    colors: [theme.DISABLED_COLOR, theme.PRIMARY_COLOR],
  },
  {
    key: '3',
    title: 'Les décisions ...',
    text: 'Chacune de vos décisions va influencer l\'avis que des acteurs ont sur vous. À vous d\'essayer d\'avoir le meilleurs score pour chaque parties.',
    list: [
      { id: 1, text: 'Ce logo représente l\'avis qu\'a le comité ACE de vous', image: require('../assets/img/logos/ace.png'), },
      { id: 2, text: 'Celui ci représente le taux de satisfaction de l\'ULB par apport à vos actions.', image: require('../assets/img/logos/ulb.png'), },
      { id: 3, text: 'Les entreprises privées, elles aussi, doivent aussi être satisfaites par les actions que vous prenez', image: require('../assets/img/logos/sponsor.png'), },
      { id: 4, text: 'Le plus important est l\'avis qu\'on les cercles de vous', image: require('../assets/img/logos/cercles.png'), },
    ],
    colors: [theme.PRIMARY_COLOR, theme.DISABLED_COLOR],
  }
];

const Entry = ({text, image}) => (
  <View style={{ flex: 1, flexDirection: 'row'}}>
    <Image
      style={styles.icon}
      source={image}
    />
    <Text style={styles.line}>{text}</Text>
  </View>
);

// const Entry = ({text, image}) => (
//   <Grid>
//     <Col style={{ }}>
//       <Image
//         style={styles.image}
//         source={image}
//       />
//     </Col>
//     <Col style={{ }}>
//       <Text>{text}</Text>
//     </Col>
//   </Grid>
// );

export default class App extends React.Component {
  _renderItem(props) {
    if (props.list && props.list.length) {
      return (
        <LinearGradient
          style={[styles.mainContent, {
            paddingTop: props.topSpacer,
            paddingBottom: props.bottomSpacer,
            width: props.width,
            height: props.height,
          }]}
          colors={props.colors}
          start={{x: 0, y: .1}} end={{x: .1, y: 1}}
        >
          <View>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.text}>{props.text}</Text>
            { props.list.map(x => <Entry key={x.id} {...x} />) }
          </View>
        </LinearGradient>
      );
    } else {
      return (
        <LinearGradient
          style={[styles.mainContent, {
            paddingTop: props.topSpacer,
            paddingBottom: props.bottomSpacer,
            width: props.width,
            height: props.height,
          }]}
          colors={props.colors}
          start={{x: 0, y: .1}} end={{x: .1, y: 1}}
        >
          <View>
            <Text style={styles.title}>{props.title}</Text>
            <Image
              style={styles.image}
              source={props.image}
            />
            <Text style={styles.text}>{props.text}</Text>
          </View>
        </LinearGradient>
      );
    }
  }

  render() {
    return (
      <Subscribe to={[AppStateContainer]}>
        {state => (
          <AppIntroSlider
            slides={slides}
            renderItem={this._renderItem}
            onDone={() => state.switchToApp()}
            onSkip={() => state.switchToApp()}
            nextLabel="Suivant"
            skipLabel="Passer"
            showSkipButton
          />
        )}
      </Subscribe>
    );
  }
}
