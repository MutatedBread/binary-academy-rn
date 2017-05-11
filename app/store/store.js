import { createStore, combineReducers } from 'redux'
import { NavigationActions } from 'react-navigation'
import FootSectionNav from './../components/navigators/footSection/FootSectionNav.js'

const init = {
  selectedTab: 'NEWS',
  nav: FootSectionNav.router.getStateForAction(FootSectionNav.router.getActionForPathAndParams('NEWS'))
}

const selectedTabReducer = (state = init.selectedTab, action) => {
    switch(action.type){
      case 'NEWS':
        return 'NEWS';
      case 'VIDEOS':
        return 'VIDEOS';
      case 'OTHERS':
        return 'OTHERS';
    }
    return state;
}

const navReducer = (state = init.nav, action) => {
    switch(action.type){
      case 'NEWS':
        return FootSectionNav.router.getStateForAction(NavigationActions.navigate({routeName: 'NEWS'}), state);
      case 'VIDEOS':
        return FootSectionNav.router.getStateForAction(NavigationActions.navigate({routeName: 'VIDEOS'}), state);
      case 'OTHERS':
        return FootSectionNav.router.getStateForAction(NavigationActions.navigate({routeName: 'OTHERS'}), state);
    }
    return state;
}

let appReducer = combineReducers({
  nav: navReducer,
  selectedTab: selectedTabReducer,
});

let store = createStore(appReducer, init);

export default store;