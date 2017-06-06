import React, { Component } from 'react'

import {
    ActivityIndicator,
    StyleSheet   
} from 'react-native'

import Barspinner from './../spinner/Barspinner.js';

import {
    Container,
    Body,
    Title,
    Header,
    Tabs,
    Tab,
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
                <Barspinner style={styles.spinner}/>
            </Tab>
            <Tab tabStyle={{backgroundColor: '#2a3052'}} activeTabStyle={{backgroundColor: '#2a3052'}} activeTextStyle={{color: '#e98024'}} textStyle={{color: 'white'}} heading="Daily Report">
                <Barspinner style={styles.spinner}/>
            </Tab>
        </Tabs>
    </Container>
   )
}

let styles = StyleSheet.create({
    spinner: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        top: 40,
    }
})

export default News