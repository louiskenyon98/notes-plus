import {
    GET_NOTE,
    GET_NOTES
} from '../../actions/types';

const initialState = {
    data: [],
    edit: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_NOTES:
            //Use Lodash to map returned notes (respective) id's to newly created object.
            return {...state, data: action.payload};
        case GET_NOTE:
            return {...state, edit: action.payload};
        default:
            return state;
    }
}
