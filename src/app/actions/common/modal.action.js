import {
    CLOSE_MODAL, SHOW_CONFIRMATION_MODAL,
    SHOW_STATUS_MODAL
} from '../types';


//Actions, not action creators.
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

export const showDeleteNoteConfirmationModal = (id) => {
    showConfirmationModal({
        title: 'Do you want to deletethisnote',
        accept: {
            label: 'YES',
            callback: () => deleteNote(id)
        },
        decline: {
            label: 'NO',
            callback: closeModal
        }
    })
};
export const showConfirmationModal = (details) => ({
    type: SHOW_CONFIRMATION_MODAL,
    payload: details
});

export const closeModal = () => ({
    type: CLOSE_MODAL,
});
