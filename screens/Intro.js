import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Subscribe } from 'unstated';
import { AppStateContainer } from '../containers';

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
    borderRadius: 10,
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
    title: 'Supremacy !',
    text: 'Supremacy est le jeu qui vous met dans la peau d\'un délégué de l\'ACE le long d\'une partie',
    image: require('../assets/img/intro/cheers.png'),
    imageStyle: styles.image,
    icon: 'ios-images-outline',
    colors: ['#231402', '#7F6D4E'],
  },
  {
    key: '2',
    title: 'Comment jouer ?',
    text: 'C\'est simple, vous avez déjà utilisé Tinder ? Le principe est le même des images arrivent à l\'écran et c\'est à vous de décidé si vous l\'acceptez ou refusez en swipant vers la gauche ou la droite.',
    image: require('../assets/img/story/2.jpg'),
    imageStyle: styles.image,
    backgroundColor: '#febe29',
    colors: ['#63E2FF', '#B066FE'],
  },
  {
    key: '3',
    title: 'Les décisions ...',
    text: 'Chacune de vos décisions va influencer l\'avis que des acteurs ont sur vous. À vous d\'essayer d\'avoir le meilleurs score pour chaque parties.',
    image: require('../assets/img/story/3.jpg'),
    imageStyle: styles.image,
    backgroundColor: '#22bcb5',
    colors: ['#63E2FF', '#B066FE'],
  }
];

export default class App extends React.Component {
  _renderItem(props) {
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
