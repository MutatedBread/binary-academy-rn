import React, { Component } from 'react';

import {
    Container,
    Text
} from 'native-base';

import {
    StyleSheet,
    View
} from 'react-native';

import Barspinner from './../../spinner/Barspinner.js'

export default class Loading extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Barspinner/>
                <Text> Loading </Text>
            </View>
        );
    };
};

let styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 50,
    },
});