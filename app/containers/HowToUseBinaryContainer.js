import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import HowToUseBinary from './../components/views/videoTabs/HowToUseBinary.js';

const mapStateToProps = state => ({
  isLoading: state.video.howtousebinary.isLoading,
  videoArrayStore: state.video.howtousebinary.videoArrayStore,
});

const mapDispatchToProps = (dispatch) => ({
    loading: (bool) => {
        dispatch({type: 'HOWTOUSEBINARY_LOADING', loading: bool});
    },
    updateVideoList: (array) => {
        dispatch({type: 'HOWTOUSEBINARY_UPDATE_VIDEOLIST', videosArray: array});
    },
    viewVideo: (videoId) => {
        dispatch({type: 'VIEW_VIDEO', videoId: videoId});
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(HowToUseBinary);