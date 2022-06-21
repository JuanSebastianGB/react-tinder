import { createStore } from 'redux';
import reducer from '../reducers';
const store = createStore(reducer);

/* A method that allows you to subscribe to the store and get notified whenever the state changes. */
store.subscribe(() => console.log(store.getState()));

export default store;
