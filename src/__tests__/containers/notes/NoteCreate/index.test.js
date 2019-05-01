import React from 'react';
import {shallow} from 'enzyme';
import {NoteCreateContainer} from '../../../../app/containers/notes/NoteCreate/index';
import NoteFormContainer from '../../../../app/containers/notes/NoteForm/index';

describe('NoteCreateContainer', () => {
    let props = {};
    let wrapper = () => shallow(<NoteCreateContainer {...props}/>);
    beforeEach(() => {
        props = {
            postNote: jest.fn(),
            getNotes: jest.fn()
        }
    });
    describe('render', () => {
        it('should render NoteCreateContainer with Redux Form as child', () => {
            expect(wrapper()).toMatchSnapshot();
        })
    });
    describe('functionality', () => {
        it('should call postNote onSubmit', () => {
            const formValues = {
                hello: 123
            };
            wrapper().find(NoteFormContainer).first().props().onSubmit(formValues);
            expect(props.postNote).toHaveBeenCalledTimes(1);
            expect(props.postNote).toHaveBeenCalledWith(formValues, expect.anything());
        })
    })
});
