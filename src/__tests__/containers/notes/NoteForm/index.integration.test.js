import React from 'react';
import {mount} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import NoteFormContainer from '../../../../app/containers/notes/NoteForm';


jest.mock('redux-form', () => ({
    Field: () => <div/>,
    reduxForm: () => Component => (props) => <Component {...props} handleSubmit={jest.fn((submit) => submit)}/>
}));

describe('NoteFormContainer Integration Test', () => {
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
                        <NoteFormContainer {...props}/>
                    </Router>
                </Provider>
            )
        }
        return mountedComponent;
    };
    beforeEach(() => {
        props = {
            onSubmit: jest.fn()
        };
        store = mockStore({
            form: {
                noteForm: {
                    formValues: {}
                }
            }
        });
        mountedComponent = undefined;
        jest.clearAllMocks();
    });
    describe('render', () => {
        it('should render NoteFormContainer component', () => {
            expect(wrapper()).toMatchSnapshot();
        })
    });
    describe('functionality', () => {
        it('should call onSubmit method on call of onSubmit prop', () => {
            const formValues = {
                title: 'testTitle',
                body: 'testBody'
            };
            expect(props.onSubmit).toHaveBeenCalledTimes(0);
            wrapper().find('form').first().props().onSubmit(formValues);
            expect(props.onSubmit).toHaveBeenCalledTimes(1);
            expect(props.onSubmit).toHaveBeenCalledWith(formValues);
        })
    })
});
