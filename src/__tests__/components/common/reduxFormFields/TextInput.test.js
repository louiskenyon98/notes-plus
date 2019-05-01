import React from 'react';
import {shallow} from 'enzyme';
import {TextInput} from '../../../../app/components/common/reduxFormFields/TextInput';

describe('TextInput', () => {
    let props ={};
    let wrapper = () => shallow(<TextInput {...props}/>);
    beforeEach(()=> {
        props = {
            meta: {
                touched: true,
                error: 'Error string'
            },
            label: 'Placeholder string',
            input: {
                foo: 'bar'
            }
        }
    });
    describe('render', () => {
        it('should render input with placeholder and text in error state if touched and error = true', () => {
            expect(wrapper()).toMatchSnapshot();
        });
    });
    describe('functionality', () => {
        it('should have class of error when touched = true and error is truthy', () => {
            expect(wrapper().find('div').first().hasClass('error')).toBe(true);
        });
        it('should not have a class of error when touch = false or error is false', () => {
            props.meta = {
                touched: false,
                error: ''
            };
            expect(wrapper().find('div').first().hasClass('error')).toBe(false);
            props.meta = {
                touched: true,
                error: ''
            };
            expect(wrapper().find('div').first().hasClass('error')).toBe(false);
            props.meta = {
                touched: false,
                error: 'Error string'
            };
            expect(wrapper().find('div').first().hasClass('error')).toBe(false);
        })
    })
});
