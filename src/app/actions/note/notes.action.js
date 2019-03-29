import axios from 'axios';
import history from '../../history';
import {showMessageModal} from "../common/modal.action";
import {GET_NOTE, GET_NOTES, POST_NOTE, PATCH_NOTE, DELETE_NOTE} from "../types";


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

export const getNotes = (othercrap) => dispatch => {
    axios.get('/api/notes/')
        .then(function (response) {
            dispatch({
                type: GET_NOTES,
                payload: response.data
            });
            dispatch(showMessageModal("success"));
        })
        .catch(() => {
            dispatch(showMessageModal("failed"))
        })
};

//Action creator to get a single note.
export const getNote = (id) => dispatch => {
    axios.get(`/api/notes/${id}`)
        .then(function (response) {
            dispatch({
                type: GET_NOTE,
                payload: response.data
            })
        })
};
//Action creator to post a new note
export const postNote = (data) => dispatch => {
    axios.post('/api/notes/', data)
        .then(function (response) {
            dispatch({
                type: POST_NOTE,
                payload: response.data
            })
        });
    //Programmatic navigation of user back to AllNotes after form submission is completed.
    history.push('/');
};
export const patchNote = (data) => dispatch => {
    axios.patch('/api/notes/', data)
        .then(function (response) {
            dispatch({
                type: PATCH_NOTE,
                payload: response.data
            })
        });
    //See comment in previous action creator.
    history.push('/');
};

export const deleteNote = (id) => dispatch => {
    axios.delete(`/api/notes/${id}`, null)
        .then(function (response) {
            dispatch({
                type: DELETE_NOTE,
                payload: response.data.id
            })
        })
};
