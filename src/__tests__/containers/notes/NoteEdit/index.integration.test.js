import React from 'react';
import {mount} from 'enzyme';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store'
import NoteEditContainer from '../../../../app/containers/notes/NoteEdit/index';

describe('NoteEditContainer Integration Test', () => {
    let props = {};
    let store = {};
    let mountedComponent;
    const middleware = [thunk];
    const mockStore = configureMockStore(middleware);
    let wrapper = () => {
        if (!mountedComponent) {
            mountedComponent = mount(
                <Provider store={store}>
                        <NoteEditContainer {...props}/>
                </Provider>
            )
        }
        return mountedComponent;
    };
    beforeEach(() => {
        props = {};
        store = mockStore({
            notes: {
                edit: {
                    id: 1,
                    title: 'title1',
                    body: 'body1'
                },
                getNote: jest.fn(),
                patchNote: jest.fn()
            }
        });
        mountedComponent = undefined;
    });
    it('should render NoteEditContainer component', () => {
        expect(wrapper()).toMatchSnapshot();
    })
});
