import React from 'react';
import {shallow} from 'enzyme';
import {ModalContainer} from '../../../../app/containers/common/Modal';

describe('ModalContainer', () => {
    let props = {};
    let wrapper = () => shallow(<ModalContainer {...props}/>);
    beforeEach(() => {
        props = {
            modal: {
                type: 'status',
                props: {
                    foo: 'bar',
                },
                show: true,
            },
            closeModal: jest.fn()
        }
    });
    describe('render', () => {
        it('should render the StatusMessage component when type = status', () => {
            expect(wrapper()).toMatchSnapshot();
        });
        it('should render the ConfirmationMessage component when type = confirmation', () => {
            props.modal.type = 'confirmation';
            expect(wrapper()).toMatchSnapshot();
        });
        it('should set show prop to false when show = false', () => {
            props.modal.show = false;
            expect(wrapper()).toMatchSnapshot();
        });
    });
    describe('functionality', () => {
        describe('Modal', () => {
            it('should call prop closeModal on call of close prop', () => {
                expect(props.closeModal).not.toHaveBeenCalled();
                wrapper().find('Modal').first().props().close();
                expect(props.closeModal).toHaveBeenCalled();
            });
        })
    })
});
