import React, { Component } from 'react'

import { 
    StackNavigator
} from 'react-navigation';

import VideoViewerContainer from './../../../containers/VideoViewerContainer.js'
import ArticleViewerContainer from './../../../containers/ArticleViewerContainer.js'
import FootSectionNavigatorContainer from './../../../containers/FootSectionNavigatorContainer.js'

const RootNav = StackNavigator({
    FootSectionNavigatorContainer: {
        screen: FootSectionNavigatorContainer
    },
    VideoViewerContainer : {
        screen: VideoViewerContainer
    },
    ArticleViewerContainer : {
        screen: ArticleViewerContainer
    },
}, {
    initialRouteName: 'FootSectionNavigatorContainer',
    headerMode: 'none'
});

export default RootNav;