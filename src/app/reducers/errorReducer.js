import {API_ERROR} from '../actions/types';
//Reducer to deal with errors from API.
export default (state = false, action) => {
    switch(action.type) {
        case API_ERROR:
            return true;
        default: return state;
    }
}