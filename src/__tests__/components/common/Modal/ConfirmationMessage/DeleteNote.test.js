import React from 'react';
import {shallow} from 'enzyme';
import DeleteNote from '../../../../../app/components/common/Modal/ConfirmationMessage/DeleteNote';

describe('DeleteNote', () => {
    let props = {};
    let wrapper = () => shallow(<DeleteNote {...props}/>);
    beforeEach(() => {
        props = {
            cancel: jest.fn(),
            delete: jest.fn()
        }
    });
    describe('render', () => {
        it('should render ConfirmationMessage with title, body, and should have accept/decline objects', () => {
            expect(wrapper()).toMatchSnapshot();
        })
    })
});
