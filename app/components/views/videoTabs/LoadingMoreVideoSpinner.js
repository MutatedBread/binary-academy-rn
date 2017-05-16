import React, { Component } from 'react';

import {
    Spinner
} from 'native-base';

export default class Loading extends Component {
    render() {
        return (
            <Spinner style={{                
                position: 'absolute',
                left: 0,
                right: 0,
            }} color="#15212d" />
        );
    };
};