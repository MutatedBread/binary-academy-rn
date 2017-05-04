import React, { Component } from 'react'

import {
    BackHandler
} from 'react-native'

import {
    Container,
    StyleProvider,
    Body,
    Title,
    Toast
} from 'native-base'

import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import Router from './components/Router.js';
import FootSectionControlContainer from './containers/FootSectionControlContainer.js'
import store from './store/store.js';
import getTheme from './../theme/components'
import commonColor from './../theme/variables/commonColor';

export default class App extends Component{
    render() {
        var unsubscribe = store.subscribe(() => {
            this.router.navigate(store.getState());
        });

        BackHandler.addEventListener('hardwareBackPress', () => {
            Toast.show({
                text: 'Press back once more to exit the app.',
                position: 'bottom',
                duration: 2000
            });
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