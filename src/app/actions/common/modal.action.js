import {
    CLOSE_MODAL,
    SHOW_DELETE_CONFIRMATION_MODAL,
    SHOW_STATUS_MODAL
} from '../types';


//Action, not action creator.
export const showSuccessModal = (details) => ({
    type: SHOW_STATUS_MODAL,
    payload: {
        status: 'success',
        ...details
    }
});
//Object passed in (details), expecting body and title within object.
export const showFailModal = (details) => ({
    type: SHOW_STATUS_MODAL,
    payload: {
        status: 'fail',
        ...details
    }
});

export const showDeleteNoteConfirmationModal = (id) => ({
    type: SHOW_DELETE_CONFIRMATION_MODAL,
    payload: {
        id
    }
});

export const closeModal = () => ({
    type: CLOSE_MODAL
});
