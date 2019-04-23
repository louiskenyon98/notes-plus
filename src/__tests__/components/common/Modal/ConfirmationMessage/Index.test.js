import React from 'react';
import {shallow} from 'enzyme';
import Index from '../../../../../app/components/common/Modal/ConfirmationMessage';

describe('Index', () => {
    let props = {};
    let wrapper = () => shallow(<Index {...props}/>);
    beforeEach(() => {
        props = {
            title: 'Confirmation message title',
            body: 'Confirmation message body',
            accept: {
                label: 'DELETE',
                onClick: jest.fn()
            },
            decline: {
                label: 'CANCEL',
                onClick: jest.fn()
            }
        }
    });
    describe('render', () => {
        it('should render a component with body', () => {
            expect(wrapper()).toMatchSnapshot();
        });

        it('should render no body when no body is passed in', () => {
            props.body = '';
            expect(wrapper()).toMatchSnapshot();
        });

    });
    describe('functionality', () => {
        it('should call accept callback when accept button is clicked', () => {
            expect(props.accept.onClick).not.toHaveBeenCalled();
            expect(props.decline.onClick).not.toHaveBeenCalled();
            expect(props.accept.onClick).toHaveBeenCalledTimes(0);
            expect(props.decline.onClick).toHaveBeenCalledTimes(0);
            wrapper().find('button').first().simulate('click');
            expect(props.accept.onClick).toHaveBeenCalledTimes(1);
            expect(props.decline.onClick).toHaveBeenCalledTimes(0);
        });
    });
});
