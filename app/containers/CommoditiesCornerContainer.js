import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import CommoditiesCorner from './../components/views/videoTabs/CommoditiesCorner.js'
import store from './../store/store.js'

const mapStateToProps = state => ({
  isLoading: state.video.commoditiescorner.isLoading,
  videoArrayStore: state.video.commoditiescorner.videoArrayStore,
});

const mapDispatchToProps = (dispatch) => ({
    loading: (bool) => {
        dispatch({type: 'COMMODITIESCORNER_LOADING', loading: bool});
    },
    updateVideoList: (array) => {
        dispatch({type: 'COMMODITIESCORNER_UPDATE_VIDEOLIST', videosArray: array});
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CommoditiesCorner);