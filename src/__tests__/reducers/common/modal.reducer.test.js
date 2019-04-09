import React from 'react';
import modalReducer from '../../../app/reducers/common/modal.reducer';
import {
    SHOW_STATUS_MODAL,
    CLOSE_MODAL,
    SHOW_CONFIRMATION_MODAL
} from '../../../app/actions/types';

describe('modalReducer', () => {
    it('should return the initial state', () => {
        expect(modalReducer(undefined, {})).toEqual(
            {
                show: false,
                type: '',
                props: {}
            }
        )
    });
    describe('SHOW_STATUS_MODAL', () => {
        describe('has initial state', () => {
            it('should handle SHOW_STATUS_MODAL', () => {
                const state = undefined;
                const action = {
                    type: SHOW_STATUS_MODAL,
                    payload: {}
                };
                const expected = {
                    show: true,
                    type: 'status',
                    props: {}
                };
                expect(modalReducer(state, action)).toEqual(expected);
            })
        });
        describe('has state', () => {
            it('should handle SHOW_STATUS_MODAL', () => {
                const state = {
                    show: false,
                    type: '',
                    props: {
                        foo: 'bar'
                    }
                };
                const action = {
                    type: SHOW_STATUS_MODAL,
                    payload: {
                        fizz: 'buzz'
                    }
                };
                const expected = {
                    show: true,
                    type: 'status',
                    props: {
                        fizz: 'buzz'
                    }
                };
                expect(modalReducer(state, action)).toEqual(expected);
            })
        })
    });
    describe('SHOW_CONFIRMATION_MODAL', () => {
        describe('has initial state', () => {
            it('should handle SHOW_CONFIRMATION_MODAL', () => {
                const state = undefined;
                const action = {
                    type: SHOW_CONFIRMATION_MODAL,
                    payload: {}
                };
                const expected = {
                    show: true,
                    type: 'confirmation',
                    props: {}
                };
                expect(modalReducer(state, action)).toEqual(expected);
            })
        });
        describe('has state', () => {
            const state = {
                show: false,
                type: '',
                props: {
                    foo: 'bar'
                }
            };
            const action = {
                type: SHOW_CONFIRMATION_MODAL,
                payload: {
                    fizz: 'buzz'
                }
            };
            const expected = {
                show: true,
                type: 'confirmation',
                props: {
                    fizz: 'buzz'
                }
            };
            expect(modalReducer(state, action)).toEqual(expected);
        })
    });
    describe('CLOSE_MODAL', () => {
        describe('has initial state', () => {
            it('should handle CLOSE_MODAL', () => {
                const state = undefined;
                const action = {
                    type: CLOSE_MODAL,
                    payload: {}
                };
                const expected = {
                    show: false,
                    type: '',
                    props: {}
                };
                expect(modalReducer(state, action)).toEqual(expected);
            })
        });
        describe('has state', () => {
            it('should handle CLOSE_MODAL', () => {
                const state = {
                    show: false,
                    type: '',
                    props: {
                        foo: 'bar'
                    }
                };
                const action = {
                    type: CLOSE_MODAL,
                    payload: {
                        fizz: 'buzz'
                    }
                };
                const expected = {
                    show: false,
                    type: '',
                    props: {}
                };
                expect(modalReducer(state, action)).toEqual(expected);
            })
        })
    })
});
