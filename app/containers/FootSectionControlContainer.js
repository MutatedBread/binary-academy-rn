import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import FootSectionControl from './../components/navigators/footSection/FootSectionControl.js';

const mapStateToProps = state => ({
  selectedTab: state.selectedTab
});

const mapDispatchToProps = (dispatch) => ({
  selectNews: (previousTab) => { 
    if(previousTab != 'NEWS') {
      dispatch({ type: 'NEWS' });
    };
  },
  selectVideos: (previousTab) => { 
    if(previousTab != 'VIDEOS') {
      dispatch({ type: 'VIDEOS' });
    };
  },
  selectOthers: (previousTab) => { 
    if(previousTab != 'OTHERS') {
      dispatch({ type: 'OTHERS' });
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FootSectionControl);