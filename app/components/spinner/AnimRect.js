import React, { Component } from 'react';

import{
    Animated,
    Easing,
    StyleSheet,
    View
} from 'react-native';

export default class AnimRect extends Component {
    constructor(props) {
        super(props);

        this.STRETCH_MIN_FACTOR = 1;
        this.STRETCH_MAX_FACTOR = 2;
        
        this.ANIMATION_TIME = 1200;
        this.STRETCH_TIME = this.ANIMATION_TIME * 0.2;
        this.SHRINK_TIME = this.ANIMATION_TIME * 0.2;
        this.DELAY_TIME = this.ANIMATION_TIME * 0.6;

        this.INITIAL_DELAY_TIME = (this.props.initialDelayTime ? this.props.initialDelayTime : 1000);

        this.loopMoreThanOnce = false;
        this.state = {
            heightAnim: new Animated.Value(this.STRETCH_MIN_FACTOR),
        }
    }
    
    animation = () => {
        Animated.sequence([
            Animated.delay(this.INITIAL_DELAY_TIME),
            Animated.timing(
                this.state.heightAnim, {
                    easing: Easing.bezier(0.42,0,0.58,1),
                    toValue: this.STRETCH_MAX_FACTOR,
                    duration: this.STRETCH_TIME,
                    useNativeDriver: true,
                }
            ),
            Animated.timing(
                this.state.heightAnim, {
                    easing: Easing.bezier(0.42,0,0.58,1),
                    toValue: this.STRETCH_MIN_FACTOR,
                    duration: this.SHRINK_TIME,
                    useNativeDriver: true,
                }
            ),
            Animated.delay(this.DELAY_TIME)
        ]).start((event) => {
            if(event.finished) {
                this.loopMoreThanOnce = true;
            }
        });
    }

    render() {
        return(
            <Animated.View style={{
                height: 20,
                transform: [
                    { scaleY: this.state.heightAnim },
                ],
                backgroundColor: '#2a3052',
                borderStyle: 'solid',
                borderRadius: 5,
                width: 7,
                zIndex: 100,
                }}
            >
                { this.props.children }
            </Animated.View>
        );
    }
};