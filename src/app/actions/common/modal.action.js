import {
    CLOSE_MODAL,
    SHOW_DELETE_CONFIRMATION_MODAL,
    SHOW_CONFIRMATION_MODAL,
    SHOW_STATUS_MODAL
} from '../types';
import {deleteCallback} from '../../actions/note/notes.action';


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
// export const showDeleteNoteConfirmationModal = (id) => dispatch => {
//     dispatch(
//         showConfirmationModal({
//             body: 'Do you want to delete this note',
//             accept: {
//                 label: 'YES',
//                 callback: () => dispatch(deleteCallback(id))
//             },
//             decline: {
//                 label: 'NO',
//                 callback: closeModal
//             }
//         })
//     )
// };

export const showConfirmationModal = (details) => ({
    type: SHOW_CONFIRMATION_MODAL,
    payload: details
});

export const closeModal = () => ({
    type: CLOSE_MODAL,
});
