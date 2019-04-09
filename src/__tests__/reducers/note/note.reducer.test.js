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
    describe('GET_NOTES', () => {
        describe('has initial state', () => {
            it('should handle GET_NOTES', () => {
                const state = undefined;
                const action = {
                    type: GET_NOTES,
                    payload: []
                };
                const expected = {
                    data: [],
                    edit: {},
                    filterOption: LAST_CREATED
                };
                expect(noteReducer(state, action)).toEqual(expected);
            });
        });
        describe('has state', () => {
            it('should handle GET_NOTES', () => {
                const state = {
                    data: [1, 2, 3, 4],
                    edit: {
                        foo: 'bar',
                    },
                    filterOption: LAST_CREATED
                };
                const action = {
                    type: GET_NOTES,
                    payload: [5, 6]
                };
                const expected = {
                    data: [5, 6],
                    edit: {
                        foo: 'bar',
                    },
                    filterOption: LAST_CREATED
                };
                expect(noteReducer(state, action)).toEqual(expected);
            })
        })
    });
    describe('GET_NOTE', () => {
        describe('has initial state', () => {
            it('should handle GET_NOTE', () => {
                const state = undefined;
                const action = {
                    type: GET_NOTE,
                    payload: {}
                };
                const expected = {
                    data: [],
                    edit: {},
                    filterOption: LAST_CREATED
                };
                expect(noteReducer(state, action)).toEqual(expected)
            })
        });
        describe('has state', () => {
            const state = {
                data: [1, 2, 3, 4],
                edit: {
                    foo: 'bar'
                },
                filterOption: LAST_CREATED
            };
            const action = {
                type: GET_NOTE,
                payload: {
                    fizz: 'buzz'
                }
            };
            const expected = {
                data: [1, 2, 3, 4],
                edit: {
                    fizz: 'buzz'
                },
                filterOption: LAST_CREATED
            };
            expect(noteReducer(state, action)).toEqual(expected);
        })
    });
    describe('ONCHANGE_FILTER_VALUE', () => {
        describe('has initial state', () => {
            it('should handle ONCHANGE_FILTER_VALUE', () => {
                const state = undefined;
                const action = {
                    type: ONCHANGE_FILTER_VALUE,
                    payload: ''
                };
                const expected = {
                    data: [],
                    edit: {},
                    filterOption: ''
                };
                expect(noteReducer(state, action)).toEqual(expected)
            })
        });
        describe('has state', () => {
            it('should handle ONCHANGE_FILTER_VALUE', () => {
                const state = {
                    data: [1, 2, 3, 4],
                    edit: {
                        foo: 'bar'
                    },
                    filterOption: LAST_CREATED
                };
                const action = {
                    type: ONCHANGE_FILTER_VALUE,
                    payload: 'LAST_EDITED'
                };
                const expected = {
                    data: [1, 2, 3, 4],
                    edit: {
                        foo: 'bar'
                    },
                    filterOption: 'LAST_EDITED'
                };
                expect(noteReducer(state, action)).toEqual(expected)
            })
        })
    })
});
