import React, { Component } from 'react';

import {
    addNavigationHelpers,
} from 'react-navigation';

import RootNav from './RootNav.js';

export default class RootNavigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <RootNav navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.nav})}/>
        );
    };
};