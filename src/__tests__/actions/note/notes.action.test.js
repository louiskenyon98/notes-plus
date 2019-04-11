import React from 'react';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import thunk from 'redux-thunk';
import {getNotes, getNote, postNote, patchNote, deleteNote} from '../../../app/actions/note/notes.action';
import {showFailModal, showSuccessModal} from '../../../app/actions/common/modal.action';
import {GET_NOTE, GET_NOTES} from '../../../app/actions/types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);

jest.mock('../../../app/actions/common/modal.action', () => ({
    showFailModal: jest.fn(),
    showSuccessModal: jest.fn()
}));
beforeEach(() => {
    // store.clearActions();
    jest.clearAllMocks();
});

describe('notes actions', () => {

    describe('getNotes', () => {
        describe('promise resolved', () => {
            it('should dispatch GET_NOTES',async () => {
                mock.onGet('/api/notes/').reply(200, [
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
                const store = mockStore();
                await store.dispatch(getNotes());
                console.log('anything');
                expect(store.getActions()).toHaveLength(1);
                expect(store.getActions()[0]).toEqual({
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
                })
            })
        });
        describe('promise rejected', () => {
            it('should dispatch showFailModal', async () => {
                mock.onGet('/api/notes/')
            })
        })
    })
});
