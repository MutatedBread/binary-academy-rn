import React, { Component } from 'react'

import {
   ActivityIndicator
} from 'react-native'

import Barspinner from './../spinner/Barspinner.js';

import {
    Container,
    Body,
    Title,
    Header,
    Tabs,
    Tab
} from 'native-base'

const News = (props) => {
   return (
    <Container>
        <Header hasTabs={true}>
            <Body>
                <Title>News</Title>
            </Body>
        </Header>
        <Tabs tabBarUnderlineStyle={{backgroundColor: '#e98024'}}>
            <Tab tabStyle={{backgroundColor: '#2a3052'}} activeTabStyle={{backgroundColor: '#2a3052'}} activeTextStyle={{color: '#e98024'}} textStyle={{color: 'white'}} heading="What's New">
                <Barspinner />
            </Tab>
            <Tab tabStyle={{backgroundColor: '#2a3052'}} activeTabStyle={{backgroundColor: '#2a3052'}} activeTextStyle={{color: '#e98024'}} textStyle={{color: 'white'}} heading="Daily Report">
                <Barspinner />
            </Tab>
        </Tabs>
    </Container>
   )
}

export default News