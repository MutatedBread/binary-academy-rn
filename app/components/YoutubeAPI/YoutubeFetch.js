import React, { Component } from 'react';

import {
    Platform
} from 'react-native';

var YoutubeAPIKey = require('./YoutubeAPIKey.js');
var YoutubeFetchStatus = require('./YoutubeFetchStatus.js');

class YoutubeFetch{
    constructor(playlist_id) {
        if(this.isIphone()) {
            this.APIkey = YoutubeAPIKey.ios;
        }
        if(this.isAndroid()) {
            this.APIkey = YoutubeAPIKey.android;
        };
        this.playlistId = playlist_id;
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
        return "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=15";
    }
    getPlaylistDetails = async(status) => {
        let link = "";
        switch(status) {
            case YoutubeFetchStatus.NEW:
                link = this.generateLink();
                break;
            case YoutubeFetchStatus.NEXT_PAGE:
                if(this.nextPageToken){
                    link = this.generateNextLink();
                }
                break;
            case YoutubeFetchStatus.PREVIOUS_PAGE:
                if(this.previousPageToken){
                    link = this.generatePreviousLink();
                }
                break;
        }
        if(!link) {
            return "ERROR : no more pages to load.";
        }
        let respond = await fetch(link, {method: 'GET'});
        let respondJson = await respond.json();
        this.detailsPopulatePageTokens(await respondJson);
        return respondJson;
    };
    detailsPopulatePageTokens = (obj) => {
        if(obj.prevPageToken) {
            this.previousPageToken = obj.prevPageToken;
        } else {
            this.previousPageToken = "";
        }
        if(obj.nextPageToken) {
            this.nextPageToken = obj.nextPageToken;
        } else {
            this.nextPageToken = "";
        }
    };
    
}

module.exports = YoutubeFetch;