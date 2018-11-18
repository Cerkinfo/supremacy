import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ProgressViewIOS,
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
    fontSize: 12,
    fontFamily: 'Retron2000'
  },
  title: {
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: 'Europhonic'
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

export default ({ title, subtitle, image, buttonText, buttonCallback, subButtonTitle }) => (
  <Subscribe to={[AppStateContainer]}>
    {state => (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>
            {subtitle}
          </Text>
        </View>
        {image
          ? (
            <View style={styles.middleContainer}>
              <Image source={image} style={styles.image} />
            </View>
          ) : null
        }
        <View style={styles.bottomContainer}>
          <Button block
            style={styles.button}
            onPress={buttonCallback}
          >
            <Text style={{fontFamily: 'Retron2000', color: 'black'}}>{buttonText}</Text>
          </Button>
          <Text style={styles.subtext}>
            {subButtonTitle}
          </Text>
        </View>
      </View>
    )}
  </Subscribe>
);
