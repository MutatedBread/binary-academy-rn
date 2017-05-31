import React, { Component } from 'react';

import Barspinner from './../../spinner/Barspinner.js'

export default class Loading extends Component {
    render() {
        return (
            <Barspinner style={{   
                flex: 1,
                alignItems: 'center',             
                position: 'absolute',
            }} />
        );
    };
};