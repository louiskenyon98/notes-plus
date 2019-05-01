import React from 'react';
import {mount} from 'enzyme';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import DeleteNoteContainer from '../../../../../app/containers/common/Modal/ConfirmationMessage/DeleteNoteContainer';
import {deleteNote, getNotes} from '../../../../../app/actions/note/notes.action';
import {closeModal} from '../../../../../app/actions/common/modal.action';

jest.mock('../../../../../app/actions/note/notes.action', () => ({
    deleteNote: jest.fn((id, callback) => () => callback()),
    getNotes: jest.fn(() => () => {}),
}));

jest.mock('../../../../../app/actions/common/modal.action', () => ({
    closeModal: jest.fn(() => () => {}),
}));

describe('DeleteNoteContainer Integration Test', () => {
    let props = {};
    let store = {};
    let mountedComponent;
    const middleware = [thunk];
    const mockStore = configureMockStore(middleware);
    let wrapper = () => {
        if (!mountedComponent) {
            mountedComponent = mount(
                <Provider store={store}>
                    <DeleteNoteContainer {...props} />
                </Provider>
            )
        }
        return mountedComponent
    };
    beforeEach(() => {
        props = {
            id: 100
        };
        store = mockStore();
        mountedComponent = undefined;
        jest.clearAllMocks();
    });
    describe('render', () => {
        it('should render DeleteNote component', () => {
            expect(wrapper()).toMatchSnapshot();
        })
    });
    describe('functionality', () => {
        describe('DeleteNote', () => {
            describe('props', () => {
                describe('cancel', () => {
                    it('should call closeModal', () => {
                        expect(closeModal).not.toHaveBeenCalled();
                        wrapper().find('DeleteNote').first().props().cancel();
                        expect(closeModal).toHaveBeenCalledTimes(1);
                    });
                });
                describe('delete', () => {
                    it('should call deleteNote (along with closeModal and getNotes)', () => {
                        expect(deleteNote).not.toHaveBeenCalled();
                        expect(closeModal).not.toHaveBeenCalled();
                        expect(getNotes).not.toHaveBeenCalled();
                        wrapper().find('DeleteNote').first().props().delete();
                        expect(deleteNote).toHaveBeenCalledTimes(1);
                        expect(closeModal).toHaveBeenCalledTimes(1);
                        expect(getNotes).toHaveBeenCalledTimes(1);
                    });
                });
            });
        })
    })
});
