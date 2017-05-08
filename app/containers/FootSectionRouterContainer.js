import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import FootSectionRouter from './../components/navigators/footSection/FootSectionRouter.js';

const mapStateToProps = state => ({
  nav: state.nav
})

export default connect(mapStateToProps)(FootSectionRouter)