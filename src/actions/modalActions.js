import { HIDE_MODAL, SHOW_MODAL } from '../types';

/**
 * It returns an object with a type property
 */
export const showModal = () => ({ type: SHOW_MODAL });
/**
 * It returns an object with a type property set to HIDE_MODAL
 */
export const hideModal = () => ({ type: HIDE_MODAL });
