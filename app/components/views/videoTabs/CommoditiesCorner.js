import React, { Component } from 'react';

import VideoList from './VideoList.js';

var YoutubePlaylistId = require('./../../YoutubeAPI/YoutubePlaylistId.js');

export default class CommoditiesCorner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <VideoList playlistId={YoutubePlaylistId.commodities_corner} 
                isLoading={this.props.isLoading} 
                videoArrayStore={this.props.videoArrayStore}
                loadingFunction={this.props.loading}
                videoArrayUpdateFunction={this.props.updateVideoList}
            />
        );
    }
} 