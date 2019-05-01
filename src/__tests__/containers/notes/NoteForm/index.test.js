import React from 'react';
import {shallow} from 'enzyme';
import {NoteFormContainer, validate} from '../../../../app/containers/notes/NoteForm';

describe('NoteFormContainer', () => {
    let props = {};
    let wrapper = () => shallow(<NoteFormContainer {...props}/>);
    beforeEach(() => {
        props = {
            onSubmit: jest.fn(),
            handleSubmit: jest.fn(callback => callback),
        }
    });
    describe('render', () => {
        it('should render a form with fields', () => {
            expect(wrapper()).toMatchSnapshot();
        });
    });
    describe('functionality', () => {
        it('should call onSubmit onSubmit', () => {
            expect(props.onSubmit).not.toHaveBeenCalled();
            wrapper().find('form').simulate('submit');
            expect(props.onSubmit).toHaveBeenCalled();
        });
        describe('validate function', () => {
            it('should return title or body error when title or body are blank', () => {
                const formValues = {
                    title: '',
                    body: ''
                };
                expect(validate(formValues)).toEqual({
                    title: 'You must enter a title for your note',
                    body: 'You must enter a body for your note'
                })
            });
            it('should return empty object if fields are not blank', () => {
                const formValues = {
                    title: 'title',
                    body: 'body'
                };
                expect(validate(formValues)).toEqual({})
            })
        })
    })
});
