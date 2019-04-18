import React from 'react';
import {shallow} from 'enzyme';
import {DeleteNoteContainer} from '../../../../../app/containers/common/Modal/ConfirmationMessage/DeleteNoteContainer';

describe('DeleteNoteContainer', () => {
    let props = {};
    let wrapper = () => shallow(<DeleteNoteContainer {...props}/>);
    beforeEach(() => {
        props = {
            closeModal: jest.fn(),
            getNotes: jest.fn(),
            deleteNote: jest.fn()
        }
    });
    describe('render', () => {
        it('should render DeleteNote component', () => {
            expect(wrapper()).toMatchSnapshot();
        })
    });
    describe('functionality', () => {
        it('should call deleteNote with ', () => {
        })
    })
});
//:todo test me, bitch
