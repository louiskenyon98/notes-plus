import React from 'react';
import {shallow} from 'enzyme';
import {AllNotesContainer} from '../../../../app/containers/notes/AllNotes/index';

describe('AllNotesContainer', () => {
    let props = {};
    let wrapper = () => shallow(<AllNotesContainer {...props} />);
    beforeEach(() => {
        props = {
            getNotes: jest.fn(),
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
        }
    });
    describe('render', () => {
        it('should render AllNotes component with props', () => {
            expect(wrapper()).toMatchSnapshot();
        });
    });
    describe('functionality', () => {
        it('should run getNotes on mount', () => {
            wrapper();
            expect(props.getNotes).toHaveBeenCalled();
        });
        it('should not have run showDeleteConfirmationModal', () => {
            wrapper();
            expect(props.showDeleteNoteConfirmationModal).not.toHaveBeenCalled();
        })
    });
});
