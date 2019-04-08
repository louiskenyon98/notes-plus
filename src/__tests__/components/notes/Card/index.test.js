import React from 'react';
import {shallow} from 'enzyme';
import Card from '../../../../app/components/notes/Card/index';

describe('Card', () => {
    let props = {};
    let wrapper = () => shallow(<Card {...props}/>);
    beforeEach(() => {
        props ={
            id: 1,
            title: 'noteCard Title',
            body: 'noteCard Body',
            delete: jest.fn()
        }
    });

    describe('render', () => {
        it('should render a card with a title, body, and icons', () => {
            expect(wrapper()).toMatchSnapshot();
        });
    });
    describe('functionality', () => {
        it('should call delete onClick', () => {
            expect(props.delete).not.toHaveBeenCalled();
            wrapper().find('i').first().simulate('click');
            expect(props.delete).toHaveBeenCalledTimes(1);
        })
    })

});
