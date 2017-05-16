import React, { Component } from 'react';

import {
    Container,
    Body,
    Spinner,
    Text
} from 'native-base';

export default class Loading extends Component {
    render() {
        return (
            <Body>
                <Spinner color="#15212d" />
                <Text> Loading </Text>
            </Body>
        );
    };
};