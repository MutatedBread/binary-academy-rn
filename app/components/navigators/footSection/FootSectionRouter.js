import React, { Component } from 'react'

import { 
    TabNavigator,
    NavigationActions,
    addNavigationHelpers
} from 'react-navigation';

import News from './../../views/News.js'
import Videos from './../../views/Videos.js'
import Others from './../../views/Others.js'
import store from './../../../store/store.js'

const FootSectionNav = TabNavigator({
    NEWS: {
        screen: News
    },
    VIDEOS: {
        screen: Videos
    },
    OTHERS: {
        screen: Others
    }
}, {
    backBehavior: 'none',
    swipeEnabled: false,
    initialRouteName: 'NEWS',
    tabBarPosition: 'bottom',
    animationEnabled: true,
});

export default class FootSectionRouter extends Component{    
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            console.log(store.getState().selectedTab);
            this.navigation.dispatch(
                NavigationActions.navigate({ routeName: store.getState().selectedTab })
            )
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        News.navigationOptions = {
            tabLabel: 'News',
            tabBarVisible: false,
        }

        Videos.navigationOptions = {
            tabLabel: 'Videos',
            tabBarVisible: false,
        }

        Others.navigationOptions = {
            tabLabel: 'Others',
            tabBarVisible: false,
        }

        return (
            <FootSectionNav ref={ref => this.navigation = ref} />
        );
    }
}