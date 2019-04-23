import React from 'react';
import {shallow} from 'enzyme';
import {DeleteNoteContainer} from '../../../../../app/containers/common/Modal/ConfirmationMessage/DeleteNoteContainer';

describe('DeleteNoteContainer', () => {
    let props = {};
    let wrapper = () => shallow(<DeleteNoteContainer {...props}/>);
    beforeEach(() => {
        props = {
            id: 91,
            closeModal: jest.fn(),
            getNotes: jest.fn(),
            deleteNote: jest.fn((id, callback) => callback())
        }
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
                        expect(props.closeModal).not.toHaveBeenCalled();
                        wrapper().find('DeleteNote').first().props().cancel();
                        expect(props.closeModal).toHaveBeenCalledTimes(1);
                    });
                });
                describe('delete', () => {
                    it('should call deleteNote (along with closeModal and getNotes)', () => {
                        expect(props.deleteNote).not.toHaveBeenCalled();
                        expect(props.closeModal).not.toHaveBeenCalled();
                        expect(props.getNotes).not.toHaveBeenCalled();
                        wrapper().find('DeleteNote').first().props().delete();
                        expect(props.deleteNote).toHaveBeenCalledTimes(1);
                        expect(props.closeModal).toHaveBeenCalledTimes(1);
                        expect(props.getNotes).toHaveBeenCalledTimes(1);
                    });
                });
            });
        })
    })
});
