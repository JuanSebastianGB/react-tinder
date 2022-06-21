import { HIDE_MODAL, SHOW_MODAL } from '../types';

const initialState = { visible: false };

/**
 * It returns a new state object with the visible property set to true if the action type is
 * SHOW_MODAL, and false if the action type is HIDE_MODAL
 * @param [state] - This is the current state of the reducer.
 * @param action - This is the action object that was dispatched.
 * @returns The modalReducer is returning the state of the modal.
 */
const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        ...state,
        visible: true,
      };
    case HIDE_MODAL:
      return {
        ...state,
        visible: false,
      };
    default:
      return state;
  }
};

export default modalReducer;
