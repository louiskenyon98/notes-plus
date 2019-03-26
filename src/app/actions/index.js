import axios from 'axios';
import history from '../history';
import {GET_NOTE, GET_NOTES, POST_NOTE, PATCH_NOTE, DELETE_NOTE, API_ERROR} from "./types";

//I have only added error handling to this route, but I have added it to App.jsx.
//Thereby assuring that I can only use the application if the API is functioning.
//Action creator to get all notes.
export const getNotes = () => async dispatch => {
    try {
        const response = await axios.get('/api/notes/');
        dispatch({
            type: 'GET_NOTES',
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: 'API_ERROR'
        })
    }
};

//Couldn't figure out which way was the best way to write this, so I wrote it both ways for posterity.

// export const getNotes = () => async dispatch => {
//     const response = await axios.get('/api/notes/')
//         .then(function(response) {
//             dispatch({
//                 type: 'GET_NOTES',
//                 payload: response.data
//             });
//         })
//         .catch(function() {
//             dispatch({
//                 type: 'API_ERROR'
//             })
//         })
// };

//Action creator to get a single note.
export const getNote = (id) => async dispatch => {
    const response = await axios.get(`/api/notes/${id}`);
    dispatch({
        type: 'GET_NOTE',
        payload: response.data
    });
};
//Action creator to post a new note
export const postNote = (data) => async dispatch => {
    const response = await notesAPI.post('/api/notes/', data);
    dispatch({
        type: 'POST_NOTE',
        payload: response.data
    });
    //Programmatic navigation of user back to AllNotes after form submission is completed.
    history.push('/');
};
export const patchNote = (data) => async dispatch => {
    const response = await notesAPI.patch('/api/notes/', data);
    dispatch({
        type: 'PATCH_NOTE',
        payload: response.data
    });
    //See comment in previous action creator.
    history.push('/');
};

export const deleteNote = (id) => async dispatch => {
    const response = await notesAPI.delete(`/api/notes/${id}`, null);
    dispatch({
        type: 'DELETE_NOTE',
        payload: response.data.id
    });
};
