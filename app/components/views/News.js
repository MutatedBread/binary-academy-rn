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
                <ActivityIndicator
                size="large"
                color="black"
                />
            </Tab>
            <Tab tabStyle={{backgroundColor: '#2a3052'}} activeTabStyle={{backgroundColor: '#2a3052'}} activeTextStyle={{color: '#e98024'}} textStyle={{color: 'white'}} heading="Daily Report">
            </Tab>
        </Tabs>
    </Container>
   )
}

export default News