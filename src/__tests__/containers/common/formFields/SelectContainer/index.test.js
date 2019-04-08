import React from 'react';
import {shallow} from 'enzyme';
import {LAST_CREATED} from '../../../../../app/config/filterOptions';
import {SelectContainer} from '../../../../../app/containers/common/formFields/SelectContainer/index';

//:todo Get Mike to check this one.

describe('SelectContainer', () => {
    let props = {};
    let wrapper = () => shallow(<SelectContainer {...props}/>);
    beforeEach(() => {
        props = {
            filterOption: LAST_CREATED,
            onChangeFilterValue: jest.fn()
        }
    });
    describe('render', () => {
        it('should render a select component with options', () => {
            expect(wrapper()).toMatchSnapshot();
        });
    });
    describe('functionality', () => {
        it('should call onChangeFilterValue onChange', () => {
            expect(props.onChangeFilterValue).not.toHaveBeenCalled();
            wrapper().find('Select').first().props().onChange('value');
            expect(props.onChangeFilterValue).toHaveBeenCalledTimes(1);
            expect(props.onChangeFilterValue).toHaveBeenCalledWith('value');

        })
    })
});
