import React, { Component } from 'react';

import {
    List,
    Content,
    Container,
    ListItem,
    Left,
    Right,
    Body,
    Button,
    Thumbnail,
    Text,
    Icon
} from 'native-base';

var YoutubeFetch = require('./../../YoutubeAPI/YoutubeFetch.js');
var YoutubeFetchStatus = require('./../../YoutubeAPI/YoutubeFetchStatus.js');

export default class VideoList extends Component {
    constructor(props) {
        super(props);
        this.youtubeFetch = new YoutubeFetch(this.props.playlistId);
        this.refreshView = false;
        this.state={
            videosArray: []
        }
    }

    async componentWillMount() {
        let json = await this.youtubeFetch.getPlaylistDetails(YoutubeFetchStatus.NEW);
        console.log(json);
        this.videosArray = Object.values(await json.items);
        this.setState({videosArray:this.videosArray});
    }

    render() {
        console.log("ASD");
        console.log(this.state.videosArray);
        return (
            <List 
                dataArray={this.state.videosArray}
                renderRow={(video) => 
                    <ListItem>
                        <Thumbnail square size={300} source={{uri: video.snippet.thumbnails.standard.url}} />
                        <Body>
                            <Text>{video.snippet.title}</Text>
                        </Body>
                        <Right>
                            <Button block binary>
                                <Icon ios="ios-play" android="md-play" />
                            </Button>
                        </Right>
                    </ListItem>
                }>
            </List>
        );
    }''
}