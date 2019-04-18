import React from 'react';
import {shallow} from 'enzyme';
import Index from '../../../../app/components/common/Modal/ConfirmationMessage';

describe('Index', () => {
    let props = {};
    let wrapper = () => shallow(<Index {...props}/>);
    beforeEach(() => {
        props = {
            body: 'Confirmation message body',
            accept: {
                callback: jest.fn(),
                label: 'YES'
            },
            decline: {
                callback: jest.fn(),
                label: 'NO'
            }
        }
    });
    describe('render', () => {
        describe('body', () => {
            it('should render a component with body', () => {
                expect(wrapper()).toMatchSnapshot();
            });

            it('should render no body when no body is passed in', () => {
                props.body = '';
                expect(wrapper()).toMatchSnapshot();
            });
        });

    });
    describe('functionality', () => {
        it('should call accept callback when accept button is clicked', () => {
            expect(props.accept.callback).not.toHaveBeenCalled();
            expect(props.decline.callback).not.toHaveBeenCalled();
            expect(props.accept.callback).toHaveBeenCalledTimes(0);
            expect(props.decline.callback).toHaveBeenCalledTimes(0);
            wrapper().find('button').first().simulate('click');
            expect(props.accept.callback).toHaveBeenCalledTimes(1);
            expect(props.decline.callback).toHaveBeenCalledTimes(0);
        });
    });
});
