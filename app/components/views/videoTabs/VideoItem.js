import React, { Component } from 'react';

import {
    ListItem,
    Thumbnail,
    Body,
    Text,
    Icon,
    Button,
    Right,
} from 'native-base';

export default class VideoItem extends Component{
    render() {
        return (
            <ListItem onPress={() => this.props.onPress(this.props.video.videoId)}>
                <Thumbnail square size={180} source={{uri: this.props.video.medium_img_url}} />
                <Body>
                    <Text>{this.props.video.title}</Text>
                </Body>
                <Right>
                    <Button circle bordered binary>
                        <Icon ios="ios-play" android="md-play" />
                    </Button>
                </Right>
            </ListItem>
        );
    };
};