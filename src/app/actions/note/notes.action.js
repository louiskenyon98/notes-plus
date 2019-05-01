import axios from 'axios';
import history from '../../history';
import {showFailModal, showSuccessModal} from '../common/modal.action';
import {GET_NOTE, GET_NOTES} from '../types';


//Action creator to get all notes.
//Kept async/await for posterity and future reference.

// export const getNotes = () => dispatch => {
//     try {
//         axios.get('/api/notes/');
//         dispatch({
//             type: 'GET_NOTES',
//             payload: response.data
//         });
//     } catch (error) {
//         dispatch({
//             type: 'API_ERROR'
//         })
//     }
// };

export const getNotes = () => dispatch => {
    return axios.get('/api/notes/')
        .then((response) => {
            dispatch({
                type: GET_NOTES,
                payload: response.data
            });
        })
        .catch(() => {
            dispatch(showFailModal({
                title: 'Error - could not retrieve notes',
                body: 'Note lookup failed, please try again later.'
            }))
        })
};

//Action creator to get a single note.
export const getNote = (id) => dispatch => {
    return axios.get(`/api/notes/${id}`)
        .then((response) => {
            dispatch({
                type: GET_NOTE,
                payload: response.data
            })
        })
        .catch(() => {
            dispatch(showFailModal({
                body: 'Failed to retrieve note details, please try again later.'
            }))
        })
};
//Action creator to post a new note
export const postNote = (data, callback) => dispatch => {
    return axios.post('/api/notes/', data)
        .then(() => {
            if (callback) {
                callback();
            }
            dispatch(showSuccessModal({
                title: 'Note saved',
                body: 'New note created, nice one!'
            }));
            history.push('/');
        })
        .catch(() => {
            dispatch(showFailModal({
                body: 'Failed to create a new note, please try again later.'
            }));
            history.push('/');
        });
    //Programmatic navigation of user back to AllNotes after form submission is completed.

};
export const patchNote = (data, callback) => dispatch => {
    return axios.patch('/api/notes/', data)
        .then(() => {
            if (callback) {
                callback();
            }
            dispatch(showSuccessModal({
                title: 'Note edited',
                body: 'Look who managed to edit a note all by themselves!'
            }));
            history.push('/');
        })
        .catch(() => {
            dispatch(showFailModal({
                title: 'Error - Unable to edit note',
                body: 'Sorry, could not edit note, please check connection to API.'
            }));
            history.push('/');
        })
    //See comment in previous action creator.

};

export const deleteNote = (id, callback) => dispatch => {
    return axios.delete(`/api/notes/${id}`, null)
        .then(() => {
            if (callback) {
                callback();
            }
        })
        .catch(() => {
            dispatch(showFailModal({
                title: 'Error - Note not deleted',
                body: 'Sorry, could not delete note, please check connection to API.'
            }))
        })
};
