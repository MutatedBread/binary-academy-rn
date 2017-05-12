import React, { Component } from 'react'

import {
    Footer,
    FooterTab,
    Button,
    Icon,
    Text
} from 'native-base'

export default class FootSectionControl extends Component{
    render() {
        return (
            <Footer>
                <FooterTab>
                    <Button onPress={this.props.selectNews} ref={(ref) => this.newsButton = ref} active={this.props.selectedTab==='NEWS'}>
                        <Icon ios="ios-paper" android="md-paper" />
                        <Text>News</Text>
                    </Button>
                    <Button onPress={this.props.selectVideos} ref={(ref) => this.videosButton = ref} active={this.props.selectedTab==='VIDEOS'}>
                        <Icon ios="ios-videocam" android="md-videocam" />
                        <Text>Videos</Text>
                    </Button>
                    <Button onPress={this.props.selectOthers} ref={(ref) => this.othersButton = ref} active={this.props.selectedTab==='OTHERS'}>
                        <Icon ios="ios-apps" android="md-apps" />
                        <Text>Others</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}