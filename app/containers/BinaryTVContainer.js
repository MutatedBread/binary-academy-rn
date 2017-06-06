import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import BinaryTV from './../components/views/videoTabs/BinaryTV.js'

const mapStateToProps = state => ({
  isLoading: state.video.binaryTV.isLoading,
  videoArrayStore: state.video.binaryTV.videoArrayStore,
});

const mapDispatchToProps = (dispatch) => ({
    loading: (bool) => {
        dispatch({type: 'BINARYTV_LOADING', loading: bool});
    },
    updateVideoList: (array) => {
        dispatch({type: 'BINARYTV_UPDATE_VIDEOLIST', videosArray: array});
    },
    viewVideo: (videoId) => {
        dispatch({type: 'VIEW_VIDEO', videoId: videoId});
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(BinaryTV);