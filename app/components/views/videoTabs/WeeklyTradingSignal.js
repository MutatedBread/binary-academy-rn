import React, { Component } from 'react';

import VideoList from './VideoList.js';

var YoutubePlaylistId = require('./../../YoutubeAPI/YoutubePlaylistId.js');

export default class WeeklyTradingSignal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <VideoList playlistId={YoutubePlaylistId.weekly_trading_signals} 
                isLoading={this.props.isLoading} 
                videoArrayStore={this.props.videoArrayStore}
                loadingFunction={this.props.loading}
                videoArrayUpdateFunction={this.props.updateVideoList}
            />
        );
    }
} 