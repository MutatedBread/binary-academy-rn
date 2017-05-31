import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RootNavigation from './../components/navigators/rootNavigator/RootNavigation.js';

const mapStateToProps = state => ({
  nav: state.rootNav
});

export default connect(mapStateToProps)(RootNavigation);