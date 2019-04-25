import React from 'react';
import {shallow} from 'enzyme';
import {NoteEditContainer} from '../../../../app/containers/notes/NoteEdit';
import NoteFormContainer from '../../../../app/containers/notes/NoteForm/index';

describe('NoteEditContainer', () => {
    let props = {};
    let wrapper = () => shallow(<NoteEditContainer {...props}/>);
    beforeEach(() => {
        props = {
            getNote: jest.fn(),
            match: {
                isExact: true,
                params: {
                    id: 89
                },
                path: "/edit/:id",
                url: "/edit/89"
            },
            patchNote: jest.fn(),
            getNotes: jest.fn(),
            note: {
                id: 89,
                title: "noteTitle",
                body: "noteBody",
                createdAt: "2019-04-04T10:21:10.289Z",
                updatedAt: "2019-04-04T10:21:10.289Z"
            }
        }
    });
    describe('render', () => {
        it('should render NoteEditContainer with Redux Form as child', () => {
            expect(wrapper()).toMatchSnapshot();
        });
    });
    describe('functionality', () => {
        it('should call getNote on mount', () => {
            expect(props.getNote).not.toHaveBeenCalledWith();
            wrapper();
            expect(props.getNote).toHaveBeenCalled();
            expect(props.getNote).toHaveBeenCalledTimes(1);
        });
        it('should call patchNote onSubmit', () => {
            const formValues = {
                hello: 123
            };
            wrapper().find(NoteFormContainer).first().props().onSubmit(formValues);
            expect(props.patchNote).toHaveBeenCalledTimes(1);
            expect(props.patchNote).toHaveBeenCalledWith(formValues, expect.anything());
        })
    })
});
