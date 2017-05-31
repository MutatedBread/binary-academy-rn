import React, { Component } from 'react';

import VideoList from './VideoList.js';

var YoutubePlaylistId = require('./../../YoutubeAPI/YoutubePlaylistId.js');

export default class HowToUseBinary extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <VideoList playlistId={YoutubePlaylistId.how_to_use_binary_dot_com} 
                isLoading={this.props.isLoading} 
                videoArrayStore={this.props.videoArrayStore}
                loadingFunction={this.props.loading}
                videoArrayUpdateFunction={this.props.updateVideoList}
                viewVideo={this.props.viewVideo}
            />
        );
    }
} 