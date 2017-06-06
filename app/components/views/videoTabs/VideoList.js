import React, { Component } from 'react';

import { View } from 'react-native';

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

import Loading from './Loading.js'
import LoadingMoreVideoSpinner from './LoadingMoreVideoSpinner.js'
import VideoItem from './VideoItem.js'

var YoutubeFetch = require('./../../YoutubeAPI/YoutubeFetch.js');
var YoutubeFetchStatus = require('./../../YoutubeAPI/YoutubeFetchStatus.js');

export default class VideoList extends Component {
    constructor(props) {
        super(props);
        this.youtubeFetch = new YoutubeFetch(this.props.playlistId);
    }

    async componentWillMount() {
        await this.loadVideos(YoutubeFetchStatus.NEW);
    }

    loadVideos = async (status) => {
        if(status === YoutubeFetchStatus.NEXT_PAGE)
            this.props.loadingFunction(true);
        var vids = this.props.videoArrayStore;
        let json = await this.youtubeFetch.getPlaylistDetails(status);
        for(var i = 0; i < await json.items.length; i++) {
            if(json.items[i].snippet.thumbnails) {
                vids.push({
                    title: json.items[i].snippet.title, 
                    medium_img_url: json.items[i].snippet.thumbnails.medium.url,
                    videoId: json.items[i].snippet.resourceId.videoId
                });
            }
        }
        this.props.videoArrayUpdateFunction(await vids);
        if(status === YoutubeFetchStatus.NEXT_PAGE)
            this.props.loadingFunction(false);
        this.forceUpdate();
    }

    render() {
        return (
            <Container>
                <Container>
                    {
                        (this.props.videoArrayStore.length > 0) ?
                            <List 
                                dataArray={this.props.videoArrayStore}
                                renderRow={(video) =>
                                    <VideoItem onPress={this.props.viewVideo} video={video}/>
                                }
                                renderFooter={() =>
                                    <ListItem center>
                                        {
                                            this.props.isLoading ? 
                                                <Icon name="ios-more" /> 
                                            :
                                                this.youtubeFetch.hasNextPage() ?
                                                    <Button binary onPress={() => this.loadVideos(YoutubeFetchStatus.NEXT_PAGE)}>
                                                        <Text> More Videos </Text>
                                                    </Button>
                                                :
                                                    null
                                        }
                                    </ListItem>
                                }
                                >
                                </List> 
                            :
                                <Loading />
                    }
                </Container>
                {
                    (this.props.isLoading) ?
                    <LoadingMoreVideoSpinner /> : null 
                }
            </Container>
        );
    }''
}