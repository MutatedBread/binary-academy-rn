import React, { Component } from 'react'

import { 
    StackNavigator,
    NavigationActions
} from 'react-navigation';

import News from './views/News'
import Videos from './views/Videos'
import Others from './views/Others'

const AppNavigator = StackNavigator({
    NEWS: {
        screen: News
    },
    VIDEOS: {
        screen: Videos
    },
    OTHERS: {
        screen: Others
    }
}, {
    initialRouteName: 'NEWS',
    headerMode: 'none',
});

export default class Router extends Component{
    constructor(props){
        super(props);
    }

    navigate = (route) => {
        const navigateAction = 
        this.navigation.dispatch(
            NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: route})
                ]
            })
        )
    }

    render(){
        News.navigationOptions = {
            title: 'News',
        }

        Videos.navigationOptions = {
            title: 'Videos',
        }

        Others.navigationOptions = {
            title: 'Others',
        }

        return (
            <AppNavigator ref={(ref) => this.navigation = ref}/>
        );
    }
}
// used with deprecated Navigator component
/*
_navigate = (property) => {
    var mountedRoute = this.navigator.getCurrentRoutes();
    var targetRouteObject = null;
    for(var i = 0; i < Object.keys(mountedRoute).length; i++){
        if(mountedRoute[i].name === property){
            targetRouteObject = mountedRoute[i]
            break;
        }
    }
    if(targetRouteObject !== null){
        this.navigator.jumpTo(targetRouteObject);
    }else{
        this.navigator.push({name: property});
    }
};

renderScene = (route, navigator) => {
    if(route.name === 'NEWS'){
        return (      
            <News />
        );
    }
    if(route.name === 'VIDEOS'){
        return (           
            <Videos />
        );
    }
    if(route.name === 'OTHERS'){
        return (
            <Others />
        );
    }
};

render() {
    return (
        <Navigator initialRoute={{name: 'NEWS'}} renderScene={this.renderScene} ref={(ref) => this.navigator = ref} />
    );
}
*/