import React, { Component } from 'react';

import {
    View,
    StyleSheet
} from 'react-native';

import AnimRect from './AnimRect.js';

export default class Barspinner extends Component {
    constructor(props) {
        super(props);
        this.timerHandler = null;
    };

    barspinnerAnimationAssembler = () => {
        this.rect1.animation();
        this.rect2.animation();
        this.rect3.animation();
        this.rect4.animation();
        this.rect5.animation();
    }

    barspinnerAnimationSchedule = () => {
        this.barspinnerAnimationAssembler();
        this.timerHandler = setInterval(() => {
            this.barspinnerAnimationAssembler();
        }, 1200
        );
    }

    componentDidMount() {
        this.barspinnerAnimationSchedule();
    }

    componentWillUnmount() {
        clearInterval(this.timerHandler);
    }

    render() {
        return(
            <View style={this.props.style}>
                <View style={styles.flexBox}>
                    <AnimRect initialDelayTime={100} ref={(ref) => {this.rect1 = ref;}}></AnimRect>
                    <AnimRect initialDelayTime={200} ref={(ref) => {this.rect2 = ref;}}></AnimRect>
                    <AnimRect initialDelayTime={300} ref={(ref) => {this.rect3 = ref;}}></AnimRect>
                    <AnimRect initialDelayTime={400} ref={(ref) => {this.rect4 = ref;}}></AnimRect>
                    <AnimRect initialDelayTime={500} ref={(ref) => {this.rect5 = ref;}}></AnimRect>
                </View>
            </View>
        );
    };
};

let styles = StyleSheet.create({
    flexBox:{
        flex: 1,
        flexDirection: 'row',
        width: 60,
        height: 40,
        justifyContent: 'space-between',
    },
});