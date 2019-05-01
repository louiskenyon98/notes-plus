import React from 'react';
import {shallow} from 'enzyme';
import {TextArea} from '../../../../app/components/common/reduxFormFields/TextArea';

describe('TextArea', () => {
    let props = {};
    let wrapper = () => shallow(<TextArea {...props}/>);
    beforeEach(() => {
        props = {
            meta: {
                touched: true,
                error: 'Error string'
            },
            label: 'Placeholder string',
            input: {
                foo: 'bar'
            }
        };
        jest.clearAllMocks()
    });
    describe('render', () => {
        it('should render textarea with placeholder and text in error state if touched and error = true', () => {
            expect(wrapper()).toMatchSnapshot();
        })
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
