import React, { Component } from 'react';

import {
    Container,
    Body,
    Text
} from 'native-base';

import {
    StyleSheet
} from 'react-native';

import Barspinner from './../../spinner/Barspinner.js'

export default class Loading extends Component {
    render() {
        return (
            <Body>
                <Barspinner />
                <Text> Loading </Text>
            </Body>
        );
    };
};

let styles = StyleSheet.create({
    loading: {

    },
    text: {

    }
});