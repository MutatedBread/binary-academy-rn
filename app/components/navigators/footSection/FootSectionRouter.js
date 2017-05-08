import React, { Component } from 'react'

import { 
    TabNavigator,
    NavigationActions,
    addNavigationHelpers
} from 'react-navigation';

import store from './../../../store/store.js'
import FootSectionNav from './FootSectionNav.js'

export default class FootSectionRouter extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <FootSectionNav ref={ref => this.navigation = ref } navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.nav})}/>
        );
    }
}