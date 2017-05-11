import React, { Component } from 'react'

import { 
    StackNavigator
} from 'react-navigation';

import VideoViewer from './../../views/VideoViewer.js'
import ArticleViewer from './../../views/ArticleViewer.js'
import FootSectionNavigatorContainer from './../../../containers/FootSectionNavigatorContainer.js'

const RootNav = StackNavigator({
    FootSectionNavigatorContainer: {
        screen: FootSectionNavigatorContainer
    },
    VideoViewer : {
        screen: VideoViewer
    },
    ArticleViewer : {
        screen: ArticleViewer
    },
}, {
    initialRouteName: 'FootSectionNavigatorContainer',
    headerMode: 'none'
});



export default RootNav;