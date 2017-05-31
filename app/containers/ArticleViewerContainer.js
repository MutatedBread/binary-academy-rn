import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import ArticleViewer from './../components/views/ArticleViewer.js'

const mapStateToProps = state => ({

});

const mapDispatchToProps = (dispatch) => ({
    goBackToRoot: () => {
        dispatch({type: 'VIEW_ROOT'});
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleViewer);