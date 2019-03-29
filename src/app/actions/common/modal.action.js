import {SHOW_MODAL, CLOSE_MODAL, SHOW_HELLO_WORLD_MODAL} from "../types";

export const dispatchModal = (modalType, modalContent) => {
    return dispatch => {
        dispatch(showModal({modalType, modalContent}));
    }
};
export const showHelloWorldModal = (message = '') => ({
    type: SHOW_HELLO_WORLD_MODAL,
    payload: {
        message
    }
});
