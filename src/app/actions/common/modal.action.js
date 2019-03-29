import {
    CLOSE_MODAL,
    SHOW_MESSAGE_MODAL
    } from '../types';

export const showMessageModal = (message = '') => ({
    type: SHOW_MESSAGE_MODAL,
    payload: {
        message
    }
});

export const closeModal = () => ({
    type: CLOSE_MODAL,
});
