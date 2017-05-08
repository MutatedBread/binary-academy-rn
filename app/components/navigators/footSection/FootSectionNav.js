import React, { Component } from 'react'

import { 
    TabNavigator
} from 'react-navigation';

import News from './../../views/News.js'
import Videos from './../../views/Videos.js'
import Others from './../../views/Others.js'

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
    animationEnabled: false,
});

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

export default FootSectionNav