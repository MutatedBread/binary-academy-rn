import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import WeeklyTradingSignal from './../components/views/videoTabs/WeeklyTradingSignal.js'
import store from './../store/store.js'

const mapStateToProps = state => ({
  isLoading: state.video.weeklytradingsignal.isLoading,
  videoArrayStore: state.video.weeklytradingsignal.videoArrayStore,
});

const mapDispatchToProps = (dispatch) => ({
    loading: (bool) => {
        dispatch({type: 'WEEKLYTRADINGSIGNAL_LOADING', loading: bool});
    },
    updateVideoList: (array) => {
        dispatch({type: 'WEEKLYTRADINGSIGNAL_UPDATE_VIDEOLIST', videosArray: array});
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(WeeklyTradingSignal);