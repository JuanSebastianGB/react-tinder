import { combineReducers } from 'redux';
import modalReducer from './modalReducer';
import userReducer from './userReducer';

/* Combining the reducers into one reducer. */
const reducer = combineReducers({
  user: userReducer,
  modal: modalReducer,
});

export default reducer;
