import React, { Component } from 'react';

import {
    Container,
    Body,
    Right,
    Title,
    Header,
    Tabs,
    Tab,
    ScrollableTab,
    Text,
    Button,
    Card,
    Icon,
    CardItem,
    Content,
    List,
    ListItem,
} from 'native-base';

import VideoList from './videoTabs/VideoList.js';
import BinaryTVContainer from './../../containers/BinaryTVContainer.js';
import CommoditiesCornerContainer from './../../containers/CommoditiesCornerContainer.js';
import HowToUseBinaryContainer from './../../containers/HowToUseBinaryContainer.js';
import WebinarContainer from './../../containers/WebinarContainer.js';
import WeeklyTradingSignalContainer from './../../containers/WeeklyTradingSignalContainer.js';

var YoutubePlaylistId = require('./../YoutubeAPI/YoutubePlaylistId.js');

const Videos = (props) => {
   return (
    <Container>
        <Header hasTabs={true}>
            <Body>
                <Title>Videos</Title>
            </Body>
        </Header>
        <Tabs tabBarUnderlineStyle={{backgroundColor: '#e98024'}}  renderTabBar={()=> <ScrollableTab />}>
            <Tab tabStyle={{backgroundColor: '#2a3052'}} activeTabStyle={{backgroundColor: '#2a3052'}} activeTextStyle={{color: '#e98024'}} textStyle={{color: 'white'}} heading="BinaryTV">
                <BinaryTVContainer />
            </Tab>
            <Tab tabStyle={{backgroundColor: '#2a3052'}} activeTabStyle={{backgroundColor: '#2a3052'}} activeTextStyle={{color: '#e98024'}} textStyle={{color: 'white'}} heading="Commodities Corner">
                <CommoditiesCornerContainer />
            </Tab>
            <Tab tabStyle={{backgroundColor: '#2a3052'}} activeTabStyle={{backgroundColor: '#2a3052'}} activeTextStyle={{color: '#e98024'}} textStyle={{color: 'white'}} heading="Webinars">
                <HowToUseBinaryContainer />
            </Tab>
            <Tab tabStyle={{backgroundColor: '#2a3052'}} activeTabStyle={{backgroundColor: '#2a3052'}} activeTextStyle={{color: '#e98024'}} textStyle={{color: 'white'}} heading="How To Use Binary.com">
                <WebinarContainer />
            </Tab>
            <Tab tabStyle={{backgroundColor: '#2a3052'}} activeTabStyle={{backgroundColor: '#2a3052'}} activeTextStyle={{color: '#e98024'}} textStyle={{color: 'white'}} heading="Weekly Trading Signals">
                <WeeklyTradingSignalContainer />
            </Tab>
        </Tabs>
    </Container>
   )
};

export default Videos;

/*
                <Container>
                    <Content>
                        <List>
                            <ListItem noBorder>
                                <Button block binary><Text> Success </Text></Button>
                            </ListItem >
                            <ListItem noBorder>
                                <Card>
                                <CardItem>
                                    <Icon active name="logo-googleplus" />
                                    <Text>Google Plus</Text>
                                    <Right>
                                        <Icon name="arrow-forward" />
                                    </Right>
                                    </CardItem>
                                </Card>
                            </ListItem>
                            <ListItem noBorder>
                                <Card>
                                <CardItem>
                                    <Icon active name="logo-googleplus" />
                                    <Text>Google Plus</Text>
                                    <Right>
                                        <Icon name="arrow-forward" />
                                    </Right>
                                    </CardItem>
                                </Card>
                            </ListItem>
                            <ListItem noBorder>
                                <Card>
                                <CardItem>
                                    <Icon active name="logo-googleplus" />
                                    <Text>Google Plus</Text>
                                    <Right>
                                        <Icon name="arrow-forward" />
                                    </Right>
                                    </CardItem>
                                </Card>
                            </ListItem>
                            <ListItem noBorder>
                                <Card>
                                <CardItem>
                                    <Icon active name="logo-googleplus" />
                                    <Text>Google Plus</Text>
                                    <Right>
                                        <Icon name="arrow-forward" />
                                    </Right>
                                    </CardItem>
                                </Card>
                            </ListItem>
                            <ListItem noBorder>
                                <Card>
                                <CardItem>
                                    <Icon active name="logo-googleplus" />
                                    <Text>Google Plus</Text>
                                    <Right>
                                        <Icon name="arrow-forward" />
                                    </Right>
                                    </CardItem>
                                </Card>
                            </ListItem>
                            <ListItem noBorder>
                                <Card>
                                <CardItem>
                                    <Icon active name="logo-googleplus" />
                                    <Text>Google Plus</Text>
                                    <Right>
                                        <Icon name="arrow-forward" />
                                    </Right>
                                    </CardItem>
                                </Card>
                            </ListItem>
                            <ListItem noBorder>
                                <Card>
                                <CardItem>
                                    <Icon active name="logo-googleplus" />
                                    <Text>Google Plus</Text>
                                    <Right>
                                        <Icon name="arrow-forward" />
                                    </Right>
                                    </CardItem>
                                </Card>
                            </ListItem>
                        </List>
                    </Content>
                </Container>
*/