import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import FootSectionControl from './../components/navigators/footSection/FootSectionControl.js';
import store from './../store/store.js'

const mapStateToProps = state => ({
  selectedTab: state.selectedTab
});

const mapDispatchToProps = (dispatch) => ({
  selectNews: () => { 
    if(store.getState().selectedTab != 'NEWS') {
      dispatch({ type: 'NEWS' });
    };
  },
  selectVideos: () => { 
    if(store.getState().selectedTab != 'VIDEOS') {
      dispatch({ type: 'VIDEOS' });
    };
  },
  selectOthers: () => { 
    if(store.getState().selectedTab != 'OTHERS') {
      dispatch({ type: 'OTHERS' });
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FootSectionControl);