import React, { Component } from 'react';

import {
    Platform
} from 'react-native';

var YoutubeAPIKey = require('./YoutubeAPIKey.js');
var YoutubeFetchStatus = require('./YoutubeFetchStatus.js');

export default class YoutubeFetch{
    constructor(playlistId) {
        if(isPhone()) {
            this.APIkey = YoutubeAPIKey.ios;
        }else{
            this.APIkey = YoutubeAPIKey.android;
        };
        this.playlistId = playlistId;
        this.previousPageToken= '';
        this.nextPageToken= '';
        this.pageNum= 0;
        this.videoNUm= 0;
    };
    isIphone = () => {
        return Platform.OS === 'ios';
    };
    isAndroid = () => {
        return Platform.OS === 'android';
    };
    generatePreviousToken = () => {
        if(!this.previousPageToken){
            return "";
        }
        return ("pageToken=" + this.previousPageToken);
    };
    generateNextToken = () => {
        if(!this.nextPageToken){
            return "";
        }
        return ("pageToken=" + this.nextPageToken);
    };
    generateYoutubePlaylistId = () => {
        return ("playlistId=" + this.playlistId);
    };
    generateKey = () => {
        return ("key=" + this.APIkey);
    };
    generateLink = () => {
        return (this.generateBoiletPlate() + "&" 
                + this.generateYoutubePlaylistId() + "&"
                + this.generateKey());
    };
    generatePreviousLink = () => {
        if(!this.previousPageToken){
            return this.generateLink();
        }
        return this.generateLink() + "&" + this.generatePreviousToken();
    };
    generateNextLink = () => {
        if(!this.nextPageToken){
            return this.generateLink();
        }
        return this.generateLink() + "&" + this.generateNextToken();
    };
    generateBoiletPlate = () => {
        return "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetail&maxResults=10";
    }
    getPlaylistDetails = (status) => {
        switch(status) {
            case YoutubeFetchStatus.NEW:
            break;
            case YoutubeFetchStatus.NEXT_PAGE:
            break;
            case YoutubeFetchStatus.PREVIOUS_PAGE:
            break;
        }
    };
}
//https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=PLVJJAiu3lRjYz1XO_yoyIRxgz5zBlQc-g&maxResults=10&key=AIzaSyCJ6yl3RwdjeGHK1qIIfOlduTCsy9T2c98
