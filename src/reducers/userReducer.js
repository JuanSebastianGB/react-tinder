import { SET_USER } from '../types';

const item = 'tinder/user';

/* This is setting the initial state of the userReducer to the value of the item in localStorage. */
const initialState = JSON.parse(localStorage.getItem(item)) || {
  user: false,
};
/**
 * The userReducer function takes in a state and an action and returns a new state based on the action
 * type
 * @param [state] - This is the current state of the reducer.
 * @param action - This is the action that is being dispatched.
 * @returns The userReducer is returning the state and the action.
 */
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
