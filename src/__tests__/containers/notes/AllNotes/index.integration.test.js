import React from 'react';
import {mount} from 'enzyme';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import {Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AllNotesContainer from '../../../../app/containers/notes/AllNotes/index';
import {getNotes} from '../../../../app/actions/note/notes.action.js'
import {SHOW_DELETE_CONFIRMATION_MODAL} from "../../../../app/actions/types";
// import {showDeleteNoteConfirmationModal} from '../../../../app/actions/common/modal.action';

jest.mock('../../../../app/actions/note/notes.action', () => ({
    getNotes: jest.fn(() => () => {
    })
}));

describe('AllNotesContainer Integration Test', () => {
    let props = {};
    let store = {};
    let mountedComponent;
    let history = createHistory();
    const middleware = [thunk];
    const mockStore = configureMockStore(middleware);
    let wrapper = () => {
        if (!mountedComponent) {
            mountedComponent = mount(
                <Provider store={store}>
                    <Router history={history}>
                        <AllNotesContainer {...props}/>
                    </Router>
                </Provider>
            )
        }
        return mountedComponent
    };
    beforeEach(() => {
        props = {};
        store = mockStore({
            notes: {
                data: [
                    {
                        id: 90,
                        title: "title number 1",
                        body: "the first body"
                    },
                    {
                        id: 91,
                        title: "title number 2",
                        body: "the second body"
                    }
                ]
            }
        });
        mountedComponent = undefined;
        jest.clearAllMocks();
    });
    describe('render', () => {
        it('should render AllNotesContainer', () => {
            expect(wrapper()).toMatchSnapshot();
        });
    });
    describe('functionality', () => {
        it('should call getNotes on mount', () => {
            expect(getNotes).toHaveBeenCalledTimes(0);
            wrapper();
            expect(getNotes).toHaveBeenCalledTimes(1);
        });
        it('should call showDeleteConfirmationModal on confirmDelete click', () => {
            expect(store.getActions().length).toBe(0);
            wrapper().find('AllNotes').find('Card').find('.content').find('i').first().simulate('click');
            expect(store.getActions().length).toBe(1);
            expect(store.getActions()[0]).toEqual({
                type: 'SHOW_DELETE_CONFIRMATION_MODAL',
                payload: {
                    id: 90
                }
            })
        })
    })
});
