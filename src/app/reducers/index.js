import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import noteReducer from './noteReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    form: formReducer,
    notes: noteReducer,
    error: errorReducer
});

