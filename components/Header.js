import React from 'react';
import { StyleSheet, View, Dimensions, Image, Animated, PanResponder } from 'react-native';
import { Text, Footer, FooterTab, Button, Icon } from 'native-base';
import theme from '../style/theme.style'

export default class _ extends React.Component {
  render() {
    return (
      <Footer style={{height: "15%"}}>
        <FooterTab style={{ backgroundColor: theme.PRIMARY_COLOR }}>
          <Button vertical style={{paddingTop:"25%", paddingBottom:"25%"}}>
            <Image
              style={{
                flex: 1,
                width: "30%",
                tintColor: theme.HIGHLIGHT_COLOR
              }}
              source={require('../assets/img/logos/ace.png')}
            />
            <Text style={{color: theme.HIGHLIGHT_COLOR}}>ACE</Text>
          </Button>
          <Button vertical style={{paddingTop:"25%", paddingBottom:"25%"}}>
            <Image
              style={{
                flex: 1,
                width: "30%",
                tintColor: theme.HIGHLIGHT_COLOR
              }}
              source={require('../assets/img/logos/ulb.png')}
            />
            <Text style={{color: theme.HIGHLIGHT_COLOR}}>ULB</Text>
          </Button>
          <Button vertical style={{paddingTop:"25%", paddingBottom:"25%"}}>
            <Image
              style={{
                flex: 1,
                width: "30%",
                tintColor: theme.HIGHLIGHT_COLOR
              }}
              source={require('../assets/img/logos/sponsor.png')}
            />
            <Text style={{color: theme.HIGHLIGHT_COLOR}}>sponsor</Text>
          </Button>
          <Button vertical style={{paddingTop:"25%", paddingBottom:"25%"}}>
            <Image
              style={{
                flex: 1,
                width: "30%",
                tintColor: theme.HIGHLIGHT_COLOR
              }}
              source={require('../assets/img/logos/cercles.png')}
            />
            <Text style={{color: theme.HIGHLIGHT_COLOR}}>cercles</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
