import React from 'react';
import {shallow} from 'enzyme';
import Modal from '../../../../app/components/common/Modal/Modal';

describe('Modal', () => {
    let props = {};
    let wrapper = () => shallow(<Modal {...props}/>);

    beforeEach(() => {
        props = {
            title: 'This is a modal title',
            close: jest.fn(),
            show: true,
            children: <div>Hello world</div>,
        }
    });

    describe('render', () => {
        it('should render a component with children', () => {
            expect(wrapper()).toMatchSnapshot();
        });

        it('should not render when show equals false', () => {
            props.show = false;
            expect(wrapper()).toMatchSnapshot();
        });

        it('should not render a title when one is not passed in', () => {
            props.title = '';
            expect(wrapper()).toMatchSnapshot();
        });
    });

    describe('functionality', () => {
        it('should call close onClick', () => {
            expect(props.close).not.toHaveBeenCalled();
            expect(props.close).toHaveBeenCalledTimes(0);
        })
    });
});
