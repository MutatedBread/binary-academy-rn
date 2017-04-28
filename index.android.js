/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, ActivityIndicator, View, StyleSheet, Navigator} from 'react-native';
import { Container, Text, Drawer, Content, Footer, FooterTab, Header, Title, Button, Left, Right, Body, Icon, Tabs, Tab, StyleProvider } from 'native-base';
import getTheme from './theme/components'
import commonColor from './theme/variables/commonColor';
export default class bananapedia extends Component {

    constructor(props){
        super(props);
        this.state= {
            selectedTab: 'News'
        };
    };

    renderScene = (route, navigator) => {
        if(route.name === 'News'){
            return (                
            <Tabs tabBarUnderlineStyle={{backgroundColor: '#e98024'}}>
                <Tab tabStyle={{backgroundColor: '#2a3052'}} activeTabStyle={{backgroundColor: '#2a3052'}} activeTextStyle={{color: '#e98024'}} textStyle={{color: 'white'}} heading="What's New">
                    <ActivityIndicator
                    size="large"
                    color="black"
                    />
                </Tab>
                <Tab tabStyle={{backgroundColor: '#2a3052'}} activeTabStyle={{backgroundColor: '#2a3052'}} activeTextStyle={{color: '#e98024'}} textStyle={{color: 'white'}} heading="Daily Report">
                </Tab>
            </Tabs>);
        }
        if(route.name === 'Videos'){
            return (                
            <Tabs tabBarUnderlineStyle={{backgroundColor: '#e98024'}}>
                <Tab tabStyle={{backgroundColor: '#2a3052'}} activeTabStyle={{backgroundColor: '#2a3052'}} activeTextStyle={{color: '#e98024'}} textStyle={{color: 'white'}} heading="Money">
                    <ActivityIndicator
                    size="large"
                    color="black"
                    />
                </Tab>
                <Tab tabStyle={{backgroundColor: '#2a3052'}} activeTabStyle={{backgroundColor: '#2a3052'}} activeTextStyle={{color: '#e98024'}} textStyle={{color: 'white'}} heading="Binary">
                </Tab>
                <Tab tabStyle={{backgroundColor: '#2a3052'}} activeTabStyle={{backgroundColor: '#2a3052'}} activeTextStyle={{color: '#e98024'}} textStyle={{color: 'white'}} heading="Options">
                </Tab>
            </Tabs>);
        }
        if(route.name === 'Others'){
            return (
            <Tabs tabBarUnderlineStyle={{backgroundColor: '#e98024'}}>
                <Tab tabStyle={{backgroundColor: '#2a3052'}} activeTabStyle={{backgroundColor: '#2a3052'}} activeTextStyle={{color: '#e98024'}} textStyle={{color: 'white'}} heading="etc1">
                    <ActivityIndicator
                    size="large"
                    color="black"
                    />
                </Tab>
                <Tab tabStyle={{backgroundColor: '#2a3052'}} activeTabStyle={{backgroundColor: '#2a3052'}} activeTextStyle={{color: '#e98024'}} textStyle={{color: 'white'}} heading="et2">
                </Tab>
                <Tab tabStyle={{backgroundColor: '#2a3052'}} activeTabStyle={{backgroundColor: '#2a3052'}} activeTextStyle={{color: '#e98024'}} textStyle={{color: 'white'}} heading="tec2">
                </Tab>
                <Tab tabStyle={{backgroundColor: '#2a3052'}} activeTabStyle={{backgroundColor: '#2a3052'}} activeTextStyle={{color: '#e98024'}} textStyle={{color: 'white'}} heading="tea2t">
                </Tab>
            </Tabs>
            );
        }
    };

    _navigate = (property) => {
        var mountedRoute = this.navigator.getCurrentRoutes();
        var targetRouteObject = null;
        for(var i = 0; i < Object.keys(mountedRoute).length; i++){
            if(mountedRoute[i].name === property){
                targetRouteObject = mountedRoute[i]
                break;
            }
        }
        if(targetRouteObject !== null){
            this.navigator.jumpTo(targetRouteObject);
        }else{
            this.navigator.push({name: property});
        }
    };

    sectionButton = (sectionName) => {
        if(sectionName === 'News'){
            if(this.state.selectedTab != 'News'){
                this._navigate(sectionName);
                this.setState({'selectedTab': 'News'});
            }
        };
        if(sectionName === 'Videos'){
            if(this.state.selectedTab != 'Videos'){
                this._navigate(sectionName);
                this.setState({'selectedTab': 'Videos'});
            }
        };
        if(sectionName === 'Others'){
            if(this.state.selectedTab != 'Others'){
                this._navigate(sectionName);
                this.setState({'selectedTab': 'Others'});
            }
        };
    };

    render() {
        const routes= [
            {name: 'News'},
            {name: 'Videos'},
            {name: 'Others'}
        ];
        return (
            <StyleProvider style={getTheme(commonColor)}>
            <Container>
                <Header style={{backgroundColor: '#2a3052'}} hasTabs={true}>
                    <Body>
                        <Title>Binary.com Academy</Title>
                    </Body>
                </Header>
                <Navigator initialRoute={{name: 'News'}} renderScene={this.renderScene} ref={(ref) => this.navigator = ref} />
                <Footer>
                  <FooterTab>
                      <Button onPress={() => this.sectionButton('News')} ref={(ref) => this.newsButton = ref} active={this.state.selectedTab==='News'}>
                          <Icon ios="ios-paper" android="md-paper" />
                          <Text>News</Text>
                      </Button>
                      <Button onPress={() => this.sectionButton('Videos')} ref={(ref) => this.videosButton = ref} active={this.state.selectedTab==='Videos'}>
                          <Icon ios="ios-play" android="md-play" />
                          <Text>Videos</Text>
                      </Button>
                      <Button onPress={() => this.sectionButton('Others')} ref={(ref) => this.othersButton = ref} active={this.state.selectedTab==='Others'}>
                          <Icon ios="ios-apps" android="md-apps" />
                          <Text>Others</Text>
                      </Button>
                  </FooterTab>
                </Footer>
            </Container>
            </StyleProvider>
        );
    };
}

const styles = StyleSheet.create({
  styleOne: {

  },
});

AppRegistry.registerComponent('bananapedia', () => bananapedia);
