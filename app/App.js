import React, { Component } from 'react';

import {
    BackHandler,
} from 'react-native';

import {
    Container,
    StyleProvider,
    Body,
    Title
} from 'native-base';

import Toast from 'react-native-simple-toast';

import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import FootSectionNavigatorContainer from './containers/FootSectionNavigatorContainer.js'
import RootNav from './components/navigators/rootNavigator/RootNav.js'
import store from './store/store.js';
import getTheme from './../theme/components'
import commonColor from './../theme/variables/commonColor';

export default class App extends Component{
    render() {
        var backButtonPressed = false;

        BackHandler.addEventListener('hardwareBackPress', () => {
            if(!this.backButtonPressed){
                Toast.show("Press back once more to exit the app.", 1500);
                this.backButtonPressed = true;
                setTimeout(() => {
                    this.backButtonPressed = false;
                }, 1500);
            }else{
                BackHandler.exitApp();
            }
            return true;
        });

        return (
            <Provider store={store}>
                <StyleProvider style={getTheme(commonColor)}>
                    <Container>
                        <RootNav />
                    </Container>
                </StyleProvider>
            </Provider>
        );
    }
}