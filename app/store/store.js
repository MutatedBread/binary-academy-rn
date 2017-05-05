import { createStore } from 'redux'

const initState = {
  selectedTab: 'NEWS'
}

export const footControl = (state = initState, action) => {
  switch (action.type) {
  case 'NEWS':
    return {selectedTab: 'NEWS'};
  case 'VIDEOS':
    return {selectedTab: 'VIDEOS'};
  case 'OTHERS':
    return {selectedTab: 'OTHERS'};
  }
  return state;
}

let store = createStore(footControl);

export default store;