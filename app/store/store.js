import { createStore } from 'redux'

export const router = (state = 'NEWS', action) => {
  switch (action.type) {
  case 'NEWS':
    return 'NEWS'
  case 'VIDEOS':
    return 'VIDEOS';
  case 'OTHERS':
    return 'OTHERS';
  }
  return state;
}

let store = createStore(router);

export default store;