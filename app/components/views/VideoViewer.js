import React, { Component } from 'react';
import { 
    Container, 
    Header, 
    Title, 
    Button, 
    Icon,
    Left,
    Body
} from 'native-base';

export default class VideoViewer extends Component{
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon ios="ios-arrow-back" android="md-arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Video Viewer</Title>
                    </Body>
                </Header>
            </Container>
        );
    }
}