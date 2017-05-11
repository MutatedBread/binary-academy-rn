import React, { Component } from 'react'

import { 
    TabNavigator,
    NavigationActions,
    addNavigationHelpers
} from 'react-navigation';

import FootSectionNav from './FootSectionNav.js'

export default class FootSectionRouter extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <FootSectionNav navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.nav})}/>
        );
    }
}