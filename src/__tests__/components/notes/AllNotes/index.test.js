import React from 'react';
import {shallow} from 'enzyme';
import AllNotes from '../../../../app/components/notes/AllNotes/index';

describe('AllNotes', () => {
    let props = {};
    let wrapper = () => shallow(<AllNotes {...props}/>);
    beforeEach(() => {
        props = {
            data: [
                {
                    id: 1,
                    title: 'noteTitle',
                    body: 'noteBody',
                },
                {
                    id: 2,
                    title: 'noteTitle2',
                    body: 'noteBody2',
                },
                {
                    id: 3,
                    title: 'noteTitle3',
                    body: 'noteBody3',
                }],
            confirmDelete: jest.fn()
        }
    });
    describe('render', () => {
        it('should render a card component with props', () => {
            expect(wrapper()).toMatchSnapshot();
        });
    });
    describe('functionality', () => {
        it('should not call confirmDelete', () => {
            expect(props.confirmDelete).not.toHaveBeenCalled();
            wrapper().find('Card').first().props().delete();
            expect(props.confirmDelete).toHaveBeenCalled();
        })
    })
});
//:todo tests
