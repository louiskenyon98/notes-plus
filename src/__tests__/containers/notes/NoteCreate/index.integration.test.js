import React from 'react';
import {mount} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import NoteCreateContainer from '../../../../app/containers/notes/NoteCreate/index';
import {postNote, getNotes} from '../../../../app/actions/note/notes.action';

jest.mock('redux-form', () => ({
    Field: () => <div/>,
    reduxForm: () => Component => (props) => <Component {...props} handleSubmit={jest.fn((submit) => submit)}/>
}));

jest.mock('../../../../app/actions/note/notes.action', () => ({
    postNote: jest.fn((formValues, callback) => () => callback()),
    getNotes: jest.fn(() => () => {
    }),
}));

describe('NoteCreateContainer Integration Test', () => {
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
                        <NoteCreateContainer {...props}/>
                    </Router>
                </Provider>
            )
        }
        return mountedComponent;
    };
    beforeEach(() => {
        props = {};
        store = mockStore({
            notes: {
                edit: {}
            },
        });
        mountedComponent = undefined;
        jest.clearAllMocks();
    });
    describe('render', () => {
        it('should render NoteCreateContainer component', () => {
            expect(wrapper()).toMatchSnapshot();
        });
    });
    describe('functionality', () => {
        const formValues = {
            title: 'testTitle',
            body: 'testBody'
        };
        it('should submit with formValues onSubmit', () => {
            expect(getNotes).toHaveBeenCalledTimes(0);
            expect(postNote).toHaveBeenCalledTimes(0);
            wrapper().find('NoteFormContainer').first().props().onSubmit(formValues);
            expect(postNote).toHaveBeenCalledTimes(1);
            expect(getNotes).toHaveBeenCalledTimes(1);
            expect(postNote).toHaveBeenCalledWith(formValues, expect.anything())
        })
    })
});
