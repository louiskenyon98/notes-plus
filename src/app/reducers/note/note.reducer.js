import {
    GET_NOTE,
    GET_NOTES,
    ONCHANGE_FILTER_VALUE
} from '../../actions/types';
import {LAST_CREATED} from "../../config/filterOptions";

const initialState = {
    data: [],
    edit: {},
    filterOption: LAST_CREATED
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_NOTES:
            return {...state, data: action.payload};
        case GET_NOTE:
            return {...state, edit: action.payload};
        case ONCHANGE_FILTER_VALUE:
            return {...state, filterOption: action.payload};
        default:
            return state;
    }
}
