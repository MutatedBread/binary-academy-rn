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
import Router from './components/Router.js';
import FootSectionControlContainer from './containers/FootSectionControlContainer.js'
import store from './store/store.js';
import getTheme from './../theme/components'
import commonColor from './../theme/variables/commonColor';

export default class App extends Component{
    render() {
        var backButtonPressed = false;

        var unsubscribe = store.subscribe(() => {
            this.router.navigate(store.getState());
        });

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
                        <Router ref={(ref) => this.router = ref}/>
                        <FootSectionControlContainer />
                    </Container>
                </StyleProvider>
            </Provider>
        );
    }
}