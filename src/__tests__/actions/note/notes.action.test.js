import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import {
    getNotes,
    getNote,
    postNote,
    patchNote,
    deleteNote
} from '../../../app/actions/note/notes.action';
import {showFailModal, showSuccessModal} from '../../../app/actions/common/modal.action';
import {GET_NOTE, GET_NOTES} from '../../../app/actions/types';


const mock = new MockAdapter(axios);

jest.mock('../../../app/actions/common/modal.action', () => ({
    showFailModal: jest.fn(() => 'showFailModal called'),
    showSuccessModal: jest.fn(() => 'showSuccessModal called')
}));

let dispatch = jest.fn((objOrFunc) => {
    return typeof objOrFunc === 'function' ? objOrFunc(dispatch) : objOrFunc
});

let mockCallBack = jest.fn();

beforeEach(() => {
    jest.clearAllMocks();
});

describe('notes actions', () => {
    describe('getNotes', () => {
        describe('promise resolved', () => {
            it('should dispatch GET_NOTES', async () => {
                mock.onGet(`/api/notes/`).reply(200, [
                    {
                        "id": 91,
                        "title": "noteTitle1",
                        "body": "noteBody1",
                        "createdAt": "2019-04-04T10:21:10.289Z",
                        "updatedAt": "2019-04-04T10:21:10.289Z"
                    },
                    {
                        "id": 89,
                        "title": "noteTitle2",
                        "body": "noteBody2",
                        "createdAt": "2019-04-03T12:00:42.118Z",
                        "updatedAt": "2019-04-04T12:59:06.070Z"
                    },
                    {
                        "id": 88,
                        "title": "noteTitle3",
                        "body": "noteBody3",
                        "createdAt": "2019-04-03T12:00:33.574Z",
                        "updatedAt": "2019-04-04T10:21:23.950Z"
                    }
                ]);
                const expected = {
                    "type": "GET_NOTES",
                    "payload": [
                        {
                            "id": 91,
                            "title": "noteTitle1",
                            "body": "noteBody1",
                            "createdAt": "2019-04-04T10:21:10.289Z",
                            "updatedAt": "2019-04-04T10:21:10.289Z"
                        },
                        {
                            "id": 89,
                            "title": "noteTitle2",
                            "body": "noteBody2",
                            "createdAt": "2019-04-03T12:00:42.118Z",
                            "updatedAt": "2019-04-04T12:59:06.070Z"
                        },
                        {
                            "id": 88,
                            "title": "noteTitle3",
                            "body": "noteBody3",
                            "createdAt": "2019-04-03T12:00:33.574Z",
                            "updatedAt": "2019-04-04T10:21:23.950Z"
                        }
                    ]
                };
                await dispatch(getNotes());
                expect(dispatch).toHaveBeenCalledTimes(2);
                expect(dispatch).toHaveBeenNthCalledWith(1, expect.anything());
                expect(dispatch).toHaveBeenNthCalledWith(2, expected);
            })
        });
        describe('promise rejected', () => {
            it('should dispatch showFailModal', async () => {
                mock.onGet('/api/notes/').reply(404, 'there was an error');
                await dispatch(getNotes());
                expect(dispatch).toHaveBeenCalledTimes(2);
                expect(dispatch).toHaveBeenNthCalledWith(2, 'showFailModal called');
                expect(showFailModal).toHaveBeenCalledTimes(1);
                expect(showFailModal).toHaveBeenCalledWith({
                    title: 'Error - could not retrieve notes',
                    body: 'Note lookup failed, please try again later.'
                });
            })
        })
    });
    describe('getNote', () => {
        describe('promise resolved', () => {
            it('should dispatch GET_NOTE', async () => {
                mock.onGet(`/api/notes/91`).reply(200, {
                    "id": 91,
                    "title": "noteTitle1",
                    "body": "noteBody1",
                    "createdAt": "2019-04-04T10:21:10.289Z",
                    "updatedAt": "2019-04-04T10:21:10.289Z"
                });
                const expected = {
                    "type": "GET_NOTE",
                    "payload": {
                        "id": 91,
                        "title": "noteTitle1",
                        "body": "noteBody1",
                        "createdAt": "2019-04-04T10:21:10.289Z",
                        "updatedAt": "2019-04-04T10:21:10.289Z"
                    }
                };
                await dispatch(getNote(91));
                expect(dispatch).toHaveBeenCalledTimes(2);
                expect(dispatch).toHaveBeenNthCalledWith(1, expect.anything());
                expect(dispatch).toHaveBeenNthCalledWith(2, expected);
            })
        });
        describe('promise rejected', () => {
            it('should dispatch showFailModal', async () => {
                mock.onGet(`/api/notes/91`).reply(404, 'there was an error');
                await dispatch(getNote(91));
                expect(dispatch).toHaveBeenCalledTimes(2);
                expect(dispatch).toHaveBeenNthCalledWith(2, 'showFailModal called');
                expect(showFailModal).toHaveBeenCalledTimes(1);
                expect(showFailModal).toHaveBeenCalledWith({
                    body: 'Failed to retrieve note details, please try again later.'
                });
            })
        })
    });
    describe('postNote', () => {
        describe('promise resolved', () => {
            it('should dispatch showSuccessModal', async () => {
                mock.onPost('api/notes/', {
                    "title": "noteTitle1",
                    "body": "noteBody1"
                }).reply(200, {
                    statusText: "OK"
                });
                await dispatch(postNote({
                    "title": "noteTitle1",
                    "body": "noteBody1"
                }, mockCallBack));
                expect(mockCallBack).toHaveBeenCalled();
                expect(dispatch).toHaveBeenCalledTimes(2);
                expect(dispatch).toHaveBeenCalledTimes(2);
                expect(dispatch).toHaveBeenNthCalledWith(2, 'showSuccessModal called');
                expect(showSuccessModal).toHaveBeenCalledTimes(1);
                expect(showSuccessModal).toHaveBeenCalledWith({
                    title: 'Note saved',
                    body: 'New note created, nice one!'
                });
            })
        });
        describe('promise resolved without callback', () => {
            it('should dispatch showSuccessModal', async () => {
                mock.onPost('api/notes/', {
                    "title": "noteTitle1",
                    "body": "noteBody1"
                }).reply(200, {
                    statusText: "OK"
                });
                await dispatch(postNote({
                    "title": "noteTitle1",
                    "body": "noteBody1"
                }, undefined));
                expect(mockCallBack).not.toHaveBeenCalled();
                expect(dispatch).toHaveBeenCalledTimes(2);
                expect(dispatch).toHaveBeenCalledTimes(2);
                expect(dispatch).toHaveBeenNthCalledWith(2, 'showSuccessModal called');
                expect(showSuccessModal).toHaveBeenCalledTimes(1);
                expect(showSuccessModal).toHaveBeenCalledWith({
                    title: 'Note saved',
                    body: 'New note created, nice one!'
                });
            })
        });
        describe('promise rejected', () => {
            it('should dispatch showFailModal', async () => {
                mock.onPost('api/notes/', {
                    "title": "noteTitle1",
                    "body": "noteBody1"
                }).reply(404, {
                    statusText: "FAIL"
                });
                await dispatch(postNote({
                    "title": "noteTitle1",
                    "body": "noteBody1"
                }, mockCallBack));
                expect(mockCallBack).not.toHaveBeenCalled();
                expect(dispatch).toHaveBeenCalledTimes(2);
                expect(dispatch).toHaveBeenNthCalledWith(2, 'showFailModal called');
                expect(showFailModal).toHaveBeenCalledTimes(1);
                expect(showFailModal).toHaveBeenCalledWith({
                    body: 'Failed to create a new note, please try again later.'
                });
            })
        })
    });
    describe('patchNote', () => {
        describe('promise resolved', () => {
            it('should dispatch showSuccessModal', async () => {
                mock.onPatch('/api/notes/', {
                    "title": "noteTitle1",
                    "body": "noteBody1"
                }).reply(200, {
                    statusText: "OK"
                });
                await dispatch(patchNote({
                    "title": "noteTitle1",
                    "body": "noteBody1"
                }, mockCallBack));
                expect(mockCallBack).toHaveBeenCalled();
                expect(dispatch).toHaveBeenCalledTimes(2);
                expect(dispatch).toHaveBeenNthCalledWith(2, 'showSuccessModal called');
                expect(showSuccessModal).toHaveBeenCalledTimes(1);
                expect(showSuccessModal).toHaveBeenCalledWith({
                    title: 'Note edited',
                    body: 'Look who managed to edit a note all by themselves!'
                });
            })
        });
        describe('promise resolved without callback', () => {
            it('should dispatch showSuccessModal', async () => {
                mock.onPatch('/api/notes/', {
                    "title": "noteTitle1",
                    "body": "noteBody1"
                }).reply(200, {
                    statusText: "OK"
                });
                await dispatch(patchNote({
                    "title": "noteTitle1",
                    "body": "noteBody1"
                }, undefined));
                expect(mockCallBack).not.toHaveBeenCalled();
                expect(dispatch).toHaveBeenCalledTimes(2);
                expect(dispatch).toHaveBeenNthCalledWith(2, 'showSuccessModal called');
                expect(showSuccessModal).toHaveBeenCalledTimes(1);
                expect(showSuccessModal).toHaveBeenCalledWith({
                    title: 'Note edited',
                    body: 'Look who managed to edit a note all by themselves!'
                });
            })
        });
        describe('promise rejected', () => {
            it('should dispatch showFail', async () => {
                mock.onPatch('/api/notes/', {
                    "title": "noteTitle1",
                    "body": "noteBody1"
                }).reply(404, {
                    statusText: "Fail"
                });
                await dispatch(patchNote({
                    "title": "noteTitle1",
                    "body": "noteBody1"
                }, mockCallBack));
                expect(mockCallBack).not.toHaveBeenCalled();
                expect(dispatch).toHaveBeenCalledTimes(2);
                expect(dispatch).toHaveBeenNthCalledWith(2, 'showFailModal called');
                expect(showFailModal).toHaveBeenCalledTimes(1);
                expect(showFailModal).toHaveBeenCalledWith({
                    title: 'Error - Unable to edit note',
                    body: 'Sorry, could not edit note, please check connection to API.'
                });
            })
        })
    });
    describe('deleteNote', () => {
        describe('promise resolved', () => {
            it('should call callback', async () => {
                mock.onDelete('/api/notes/91').reply(200, {
                    statusText: "OK"
                });
                await dispatch(deleteNote(91, mockCallBack));
                expect(mockCallBack).toHaveBeenCalled();
            })
        });
        describe('promise resolved without callback', () => {
            it('should call callback', async () => {
                mock.onDelete('/api/notes/91').reply(200, {
                    statusText: "OK"
                });
                await dispatch(deleteNote(91, undefined));
                expect(mockCallBack).not.toHaveBeenCalled();
            })
        });
        describe('promise rejected', () => {
            it('should dispatch showFailModal', async () => {
                mock.onDelete('/api/notes/91').reply(404, {
                    statusText: "Fail"
                });
                await dispatch(deleteNote(91, mockCallBack));
                expect(mockCallBack).not.toHaveBeenCalled();
                expect(dispatch).toHaveBeenCalledTimes(2);
                expect(dispatch).toHaveBeenNthCalledWith(2, 'showFailModal called');
                expect(showFailModal).toHaveBeenCalledTimes(1);
                expect(showFailModal).toHaveBeenCalledWith({
                    title: 'Error - Note not deleted',
                    body: 'Sorry, could not delete note, please check connection to API.'
                })
            })
        })
    });
});
