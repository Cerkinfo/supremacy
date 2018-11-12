import React from 'react';
import { StyleSheet, View, Dimensions, Image, Animated, PanResponder } from 'react-native';
import { Text, Footer, FooterTab, Button, Icon } from 'native-base';

export default class _ extends React.Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button vertical>
            <Icon name="apps" />
            <Text>Apps</Text>
          </Button>
          <Button vertical>
            <Icon name="camera" />
            <Text>Camera</Text>
          </Button>
          <Button vertical>
            <Icon active name="navigate" />
            <Text>Navigate</Text>
          </Button>
          <Button vertical>
            <Icon name="person" />
            <Text>Contact</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
