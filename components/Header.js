import React from 'react';
import { StyleSheet, View, Dimensions, Image, Animated, PanResponder } from 'react-native';
import { Text, Footer, FooterTab, Button, Icon } from 'native-base';
import { Subscribe } from 'unstated';
import { StatsContainer } from '../containers';
import theme from '../style/theme.style'

export default class _ extends React.Component {
  getColor(stats, actor) {
    const current = stats[actor];
    const old = stats.old[actor];
    return current == old
      ? theme.HIGHLIGHT_COLOR
      : current > old
        ? 'green'
        : 'red';
  }

  render() {
    return (
      <Subscribe to={[StatsContainer]}>
        {stats => (
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
                <Text style={{color: this.getColor(stats.state, 'ace')}}>{stats.state.ace}%</Text>
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
                <Text style={{color: this.getColor(stats.state, 'ulb')}}>{stats.state.ulb}%</Text>
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
                <Text style={{color: this.getColor(stats.state, 'sponsors')}}>{stats.state.sponsors}%</Text>
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
                <Text style={{color: this.getColor(stats.state, 'cercles')}}>{stats.state.cercles}%</Text>
              </Button>
            </FooterTab>
          </Footer>
        )}
      </Subscribe>
    );
  }
}
