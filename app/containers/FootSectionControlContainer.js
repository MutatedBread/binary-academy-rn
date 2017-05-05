import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import FootSectionControl from './../components/navigators/footSection/FootSectionControl.js';

const mapStateToProps = state => ({
  selectedTab: state.selectedTab
})

const mapDispatchToProps = (dispatch) => ({
  selectNews: () => { dispatch({ type: 'NEWS' }) },
  selectVideos: () => { dispatch({ type: 'VIDEOS' }) },
  selectOthers: () => { dispatch({ type: 'OTHERS' }) },
})

export default connect(mapStateToProps, mapDispatchToProps)(FootSectionControl)