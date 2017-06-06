import React, { Component } from 'react';
import { 
    Container, 
    Header, 
    Title, 
    Button, 
    Icon,
    Left,
    Body,
    Text,
    Content
} from 'native-base';

import {
    WebView,
    StyleSheet
} from 'react-native';

export default class VideoViewer extends Component{

    onShouldStartLoadWithRequest = (navigator) => {
        if (navigator.url.indexOf('data:text/html;') !== -1 ||
            navigator.url.indexOf('about:blank') !== -1 ||
            navigator.url.indexOf('embed') !== -1
        ) {
            return true;
        } else {
            this.videoPlayer.stopLoading(); //Some reference to your WebView to make it stop loading that URL
            return false;
        }    
    }
    render() {
        return (
            <Container>
                <Icon 
                ios="ios-arrow-back" 
                android="md-arrow-back" 
                onPress={this.props.goBackToRoot}
                style={{                
                    position: 'absolute',
                    left: 15,
                    top: 15,
                    color: 'white',
                    zIndex: 100
                }} 
                />
                    <WebView 
                        ref={(ref) => { this.videoPlayer = ref;}}
                        scalesPageToFit={true} 
                        source={{ html: '<html><meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" /><iframe src="https://www.youtube.com/embed/' + this.props.navigation.state.params.videoId + '?modestbranding=1&playsinline=1&showinfo=0&rel=0" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" height="100%" width="100%"></iframe></html>'}} 
                        onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest} //for iOS
                        onNavigationStateChange ={this.onShouldStartLoadWithRequest} //for Android
                    />
            </Container>
        );
    }
}