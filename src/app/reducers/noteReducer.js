import _ from 'lodash';
import {
    GET_NOTE,
    GET_NOTES,
    POST_NOTE,
    PATCH_NOTE,
    DELETE_NOTE
} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case GET_NOTE:
            return{...state, [action.payload.id]: action.payload};
        case GET_NOTES:
            //Use Lodash to map returned notes (respective) id's to newly created object.
            return {...state, ..._.mapKeys(action.payload, 'id')};
        case POST_NOTE:
            return{...state, [action.payload.id]: action.payload};
        case PATCH_NOTE:
            return{...state, [action.payload.id]: action.payload};
        case DELETE_NOTE:
            //Use Lodash to remove returned id from state.
            return _.omit(state, action.payload);
        default: return state;
    }
}