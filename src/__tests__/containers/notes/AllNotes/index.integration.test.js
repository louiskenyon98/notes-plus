import React from 'react';
import {mount} from 'enzyme';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import AllNotesContainer from '../../../../app/containers/notes/AllNotes/index';

describe('AllNotesContainer Integration Test', () => {
    let props = {};
    let store = {};
    let mountedComponent;
    const middleware = [thunk];
    const mockStore = configureMockStore(middleware);
    let wrapper = () => {
        if (!mountedComponent) {
            mountedComponent = mount(
                <Provider store={store}>
                    <AllNotesContainer {...props}/>
                </Provider>
            )
        }
        return mountedComponent
    };
    beforeEach(() => {
        props = {};
        store = mockStore({
            notes: [
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
            ],
            showDeleteNoteConfirmationModal: jest.fn()
        })
    });
    it('should render AllNotes component with children', () => {
        expect(wrapper()).toMatchSnapshot();
    });
});
