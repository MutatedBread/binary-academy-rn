import { createStore, combineReducers } from 'redux'
import { NavigationActions } from 'react-navigation'
import FootSectionNav from './../components/navigators/footSection/FootSectionNav.js'

const init = {
  selectedTab: 'NEWS',
  nav: FootSectionNav.router.getStateForAction(FootSectionNav.router.getActionForPathAndParams('NEWS')),
  video: {
    binaryTV:{
      isLoading: false,
      videoArrayStore: [],
    },
    commoditiescorner:{
      isLoading: false,
      videoArrayStore: [],
    },
    webinar:{
      isLoading: false,
      videoArrayStore: [],
    },
    howtousebinary:{
      isLoading: false,
      videoArrayStore: [],
    },
    weeklytradingsignal:{
      isLoading: false,
      videoArrayStore: [],
    },
  }
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

const binaryTV_loading_reducer = (state = init.video.binaryTV.isLoading, action) => {
  switch(action.type){
    case 'BINARYTV_LOADING':
      return action.loading;
      break;
  }
  return state;
}

const commoditiescorner_loading_reducer = (state = init.video.commoditiescorner.isLoading, action) => {
  switch(action.type){
    case 'COMMODITIESCORNER_LOADING':
      return action.loading;
      break;
  }
  return state;
}

const webinar_loading_reducer = (state = init.video.webinar.isLoading, action) => {
  switch(action.type){
    case 'WEBINAR_LOADING':
      return action.loading;
      break;
  }
  return state;
}

const howtousebinary_loading_reducer = (state = init.video.howtousebinary.isLoading, action) => {
  switch(action.type){
    case 'HOWTOUSEBINARY_LOADING':
      return action.loading;
      break;
  }
  return state;
}

const weeklytradingsignal_loading_reducer = (state = init.video.weeklytradingsignal.isLoading, action) => {
  switch(action.type){
    case 'WEEKLYTRADINGSIGNAL_LOADING':
      return action.loading;
      break;
  }
  return state;
}

const binaryTV_videoArray_reducer = (state = init.video.binaryTV.videoArrayStore, action) => {
  switch(action.type){
    case 'BINARYTV_UPDATE_VIDEOLIST':
      return action.videosArray;
      break;
  }
  return state;
}

const commoditiescorner_videoArray_reducer = (state = init.video.commoditiescorner.videoArrayStore, action) => {
  switch(action.type){
    case 'COMMODITIESCORNER_UPDATE_VIDEOLIST':
      return action.videosArray;
      break;
  }
  return state;
}

const webinar_videoArray_reducer = (state = init.video.webinar.videoArrayStore, action) => {
  switch(action.type){
    case 'WEBINAR_UPDATE_VIDEOLIST':
      return action.videosArray;
      break;
  }
  return state;
}

const howtousebinary_videoArray_reducer = (state = init.video.howtousebinary.videoArrayStore, action) => {
  switch(action.type){
    case 'HOWTOUSEBINARY_UPDATE_VIDEOLIST':
      return action.videosArray;
      break;
  }
  return state;
}

const weeklytradingsignal_videoArray_reducer = (state = init.video.weeklytradingsignal.videoArrayStore, action) => {
  switch(action.type){
    case 'WEEKLYTRADINGSIGNAL_UPDATE_VIDEOLIST':
      return action.videosArray;
      break;
  }
  return state;
}

let videoReducer = combineReducers({
  binaryTV: combineReducers({
    isLoading: binaryTV_loading_reducer,
    videoArrayStore: binaryTV_videoArray_reducer,
  }),
  commoditiescorner: combineReducers({
    isLoading: commoditiescorner_loading_reducer,
    videoArrayStore: commoditiescorner_videoArray_reducer,
  }),
  webinar: combineReducers({
    isLoading: webinar_loading_reducer,
    videoArrayStore: webinar_videoArray_reducer,
  }),
  howtousebinary: combineReducers({
    isLoading: howtousebinary_loading_reducer,
    videoArrayStore: howtousebinary_videoArray_reducer,
  }),
  weeklytradingsignal: combineReducers({
    isLoading: weeklytradingsignal_loading_reducer,
    videoArrayStore: weeklytradingsignal_videoArray_reducer,
  }),
});

let appReducer = combineReducers({
  nav: navReducer,
  selectedTab: selectedTabReducer,
  video: videoReducer
});

let store = createStore(appReducer, init);

export default store;