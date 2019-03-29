import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import noteReducer from './note/note.reducer';
import commonReducer from './common/'

export default combineReducers({
    form: formReducer,
    notes: noteReducer,
    common: commonReducer
});

