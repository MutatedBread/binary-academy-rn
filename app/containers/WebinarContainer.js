import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Webinar from './../components/views/videoTabs/Webinar.js';

const mapStateToProps = state => ({
  isLoading: state.video.webinar.isLoading,
  videoArrayStore: state.video.webinar.videoArrayStore,
});

const mapDispatchToProps = (dispatch) => ({
    loading: (bool) => {
        dispatch({type: 'WEBINAR_LOADING', loading: bool});
    },
    updateVideoList: (array) => {
        dispatch({type: 'WEBINAR_UPDATE_VIDEOLIST', videosArray: array});
    },
    viewVideo: (videoId) => {
        dispatch({type: 'VIEW_VIDEO', videoId: videoId});
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Webinar);