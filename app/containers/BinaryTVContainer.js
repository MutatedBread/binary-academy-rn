import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import BinaryTV from './../components/views/videoTabs/BinaryTV.js'
import store from './../store/store.js'

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
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(BinaryTV);