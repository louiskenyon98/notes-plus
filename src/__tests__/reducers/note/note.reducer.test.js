import React from 'react';
import noteReducer from '../../../app/reducers/note/note.reducer';
import {
    GET_NOTE,
    GET_NOTES,
    ONCHANGE_FILTER_VALUE
} from '../../../app/actions/types';
import {LAST_CREATED} from "../../../app/config/filterOptions";

describe('noteReducer', () => {
    it('should return the initial state', () => {
        expect(noteReducer(undefined, {})).toEqual(
            {
                data: [],
                edit: {},
                filterOption: LAST_CREATED
            }
        )
    });
    it('should handle GET_NOTES', () => {
        expect(
            noteReducer([], {
                type: GET_NOTES,
                data: action.payload
            })
        ).toEqual()
    })
});
