import React, { Component } from 'react'

import {
   ActivityIndicator
} from 'react-native'

import {
    Container,
    Body,
    Title,
    Header,
    Tabs,
    Tab,
    ScrollableTab,
    Text
} from 'native-base'

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
                <ActivityIndicator
                size="large"
                color="black"
                />
            </Tab>
            <Tab tabStyle={{backgroundColor: '#2a3052'}} activeTabStyle={{backgroundColor: '#2a3052'}} activeTextStyle={{color: '#e98024'}} textStyle={{color: 'white'}} heading="Commodities Corner">
                <Text> asdasd </Text>
            </Tab>
            <Tab tabStyle={{backgroundColor: '#2a3052'}} activeTabStyle={{backgroundColor: '#2a3052'}} activeTextStyle={{color: '#e98024'}} textStyle={{color: 'white'}} heading="Webinars">
                <Text> asdasd </Text>
            </Tab>
            <Tab tabStyle={{backgroundColor: '#2a3052'}} activeTabStyle={{backgroundColor: '#2a3052'}} activeTextStyle={{color: '#e98024'}} textStyle={{color: 'white'}} heading="How To Use Binary.com">
                <Text> asdasd </Text>
            </Tab>
            <Tab tabStyle={{backgroundColor: '#2a3052'}} activeTabStyle={{backgroundColor: '#2a3052'}} activeTextStyle={{color: '#e98024'}} textStyle={{color: 'white'}} heading="Weekly Trading Signals">
                <Text> asdasd </Text>
            </Tab>
        </Tabs>
    </Container>
   )
}

export default Videos

/*
        <Tabs tabBarUnderlineStyle={{backgroundColor: '#e98024'}}  renderTabBar={()=> <ScrollableTab />}>
            <Tab tabStyle={{backgroundColor: '#2a3052'}} activeTabStyle={{backgroundColor: '#2a3052'}} activeTextStyle={{color: '#e98024'}} textStyle={{color: 'white'}} heading="BinaryTV">
                <ActivityIndicator
                size="large"
                color="black"
                />
            </Tab>
            <Tab tabStyle={{backgroundColor: '#2a3052'}} activeTabStyle={{backgroundColor: '#2a3052'}} activeTextStyle={{color: '#e98024'}} textStyle={{color: 'white'}} heading="Commodities Corner">
            </Tab>
            <Tab tabStyle={{backgroundColor: '#2a3052'}} activeTabStyle={{backgroundColor: '#2a3052'}} activeTextStyle={{color: '#e98024'}} textStyle={{color: 'white'}} heading="Webinars">
            </Tab>
            <Tab tabStyle={{backgroundColor: '#2a3052'}} activeTabStyle={{backgroundColor: '#2a3052'}} activeTextStyle={{color: '#e98024'}} textStyle={{color: 'white'}} heading="How To Use Binary.com">
            </Tab>
            <Tab tabStyle={{backgroundColor: '#2a3052'}} activeTabStyle={{backgroundColor: '#2a3052'}} activeTextStyle={{color: '#e98024'}} textStyle={{color: 'white'}} heading="Weekly Trading Signals">
            </Tab>
        </Tabs>
*/