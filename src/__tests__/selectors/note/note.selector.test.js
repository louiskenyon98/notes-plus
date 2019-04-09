import React from 'react';
import {getAllNotesSelector} from '../../../app/selectors/note/note.selector';

describe('getAllNotesSelector', () => {
    let state = {
        notes: {
            data: [
                {
                    id: 84,
                    createdAt: "2019-04-03T08:56:10.623Z",
                    body: "noteBody3",
                    title: "noteTitle3",
                    updatedAt: "2019-04-05T16:29:22.294Z"
                },
                {
                    id: 91,
                    createdAt: "2019-04-04T10:21:10.289Z",
                    body: "noteBody1",
                    title: "noteTitle1",
                    updatedAt: "2019-04-02T10:21:10.289Z"
                },
                {
                    id: 40,
                    createdAt: "2019-04-05T12:00:42.118Z",
                    body: "noteBody2",
                    title: "noteTitle2",
                    updatedAt: "2019-04-03T12:59:06.070Z"
                }
            ],
            filterOption: "createdAt"
        }
    };
    describe('filterOptionValue', () => {
        describe('createdAt', () => {
            it('should sort by createdAt date', () => {
                const expected = {
                    notes: [
                        {
                            id: 40,
                            createdAt: "2019-04-05T12:00:42.118Z",
                            body: "noteBody2",
                            title: "noteTitle2",
                            updatedAt: "2019-04-03T12:59:06.070Z"
                        },
                        {
                            id: 91,
                            createdAt: "2019-04-04T10:21:10.289Z",
                            body: "noteBody1",
                            title: "noteTitle1",
                            updatedAt: "2019-04-02T10:21:10.289Z"
                        },
                        {
                            id: 84,
                            createdAt: "2019-04-03T08:56:10.623Z",
                            body: "noteBody3",
                            title: "noteTitle3",
                            updatedAt: "2019-04-05T16:29:22.294Z"
                        }
                    ]
                };
                expect(getAllNotesSelector(state)).toEqual(expected)
            })
        });
        describe('updatedAt', () => {
            it('should sort by updatedAt date', () => {
                state.notes.filterOption = "updatedAt";
                const expected = {
                    notes: [
                        {
                            id: 84,
                            createdAt: "2019-04-03T08:56:10.623Z",
                            body: "noteBody3",
                            title: "noteTitle3",
                            updatedAt: "2019-04-05T16:29:22.294Z"
                        },
                        {
                            id: 40,
                            createdAt: "2019-04-05T12:00:42.118Z",
                            body: "noteBody2",
                            title: "noteTitle2",
                            updatedAt: "2019-04-03T12:59:06.070Z"
                        },
                        {
                            id: 91,
                            createdAt: "2019-04-04T10:21:10.289Z",
                            body: "noteBody1",
                            title: "noteTitle1",
                            updatedAt: "2019-04-02T10:21:10.289Z"
                        }
                    ]
                };
                expect(getAllNotesSelector(state)).toEqual(expected);
            })
        });
        describe('undefined', () => {
            it('should return WHATEVER', () => {
                state = undefined;
                const expected = {
                    notes: [
                        {
                            id: 84,
                            createdAt: "2019-04-03T08:56:10.623Z",
                            body: "noteBody3",
                            title: "noteTitle3",
                            updatedAt: "2019-04-05T16:29:22.294Z"
                        },
                        {
                            id: 40,
                            createdAt: "2019-04-05T12:00:42.118Z",
                            body: "noteBody2",
                            title: "noteTitle2",
                            updatedAt: "2019-04-03T12:59:06.070Z"
                        },
                        {
                            id: 91,
                            createdAt: "2019-04-04T10:21:10.289Z",
                            body: "noteBody1",
                            title: "noteTitle1",
                            updatedAt: "2019-04-02T10:21:10.289Z"
                        }
                    ]
                };
                expect(getAllNotesSelector(state)).toEqual(expected);
            })
        });
    });
});
