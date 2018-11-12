import React from 'react';
import { StyleSheet, View, Dimensions, Image, Animated, PanResponder } from 'react-native';
import { Text, Footer, FooterTab, Button, Icon } from 'native-base';

export default class _ extends React.Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button vertical>
            <Image
              style={{ flex: 1, height: 10, width: 25, tintColor: "white", opacity: 0.6 }}
              source={require('../assets/img/logos/ace.png')}
            />
            <Text>ACE</Text>
          </Button>
          <Button vertical>
            <Image
              style={{ flex: 1, height: 10, width: 25, tintColor: "white", opacity: 0.6 }}
              source={require('../assets/img/logos/ulb.png')}
            />
            <Text>ULB</Text>
          </Button>
          <Button vertical>
            <Image
              style={{ flex: 1, height: 10, width: 25, tintColor: "white", opacity: 0.6 }}
              source={require('../assets/img/logos/sponsor.png')}
            />
            <Text>sponsor</Text>
          </Button>
          <Button vertical>
            <Image
              style={{ flex: 1, height: 10, width: 25, tintColor: "white", opacity: 0.6 }}
              source={require('../assets/img/logos/cercles.png')}
            />
            <Text>cercles</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
