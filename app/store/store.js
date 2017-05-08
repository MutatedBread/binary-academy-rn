import { createStore, combineReducers } from 'redux'
import FootSectionNav from './../components/navigators/footSection/FootSectionNav.js'

const init = {
  selectedTab: 'NEWS',
  nav: FootSectionNav.router.getStateForAction(FootSectionNav.router.getActionForPathAndParams('NEWS'))
}

const appReducer  = (state = init, action) => {
    switch(action.type){
      case 'NEWS':
        return {
          selectedTab: 'NEWS',
          nav: FootSectionNav.router.getStateForAction(FootSectionNav.router.getActionForPathAndParams('NEWS'))
        };
      case 'VIDEOS':
        return {
          selectedTab: 'VIDEOS',
          nav: FootSectionNav.router.getStateForAction(FootSectionNav.router.getActionForPathAndParams('VIDEOS'))
        };
      case 'OTHERS':
        return {
          selectedTab: 'OTHERS',
          nav: FootSectionNav.router.getStateForAction(FootSectionNav.router.getActionForPathAndParams('OTHERS'))
        };
    }
    return state;
}

let store = createStore(appReducer, init);

export default store;