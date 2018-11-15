import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ProgressViewIOS
} from "react-native";
import { Button } from 'native-base';
import { Subscribe } from 'unstated';
import { AppStateContainer } from '../containers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3A2D2F',
  },
  topContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleContainer: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bottomContainer: {
    justifyContent: 'flex-end',
    width: '90%',
    margin: 20,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#F8F5BF',
  },
  image: {
    width: 300,
    height: 300,
    justifyContent: 'center',
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
  },
  subtext: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 8,
    marginBottom: 8,
    fontSize: 8,
    fontFamily: 'Retron2000'
  },
});

export default class _ extends React.Component {
  render() {
    return (
      <Subscribe to={[AppStateContainer]}>
        {state => (
          <View style={styles.container}>
            <View style={styles.topContainer}>
              <Text style={styles.title}>Supremacy</Text>
            </View>
            <View style={styles.middleContainer}>
              <Image source={require('../assets/img/penne.png')} style={styles.image} />
            </View>
            <View style={styles.bottomContainer}>
              <Button block
                style={styles.button}
                onPress={() => state.switchToIntro()}
              >
                <Text style={{fontFamily: 'Retron2000', color: 'black'}}>Recommencer</Text>
              </Button>
            </View>
          </View>
        )}
      </Subscribe>
    );
  }
}
