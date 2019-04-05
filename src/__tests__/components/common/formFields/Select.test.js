import React from 'react';
import {shallow} from 'enzyme';
import Select from '../../../../app/components/common/formFields/Select';

describe('Select', () => {
    let props = {};
    let wrapper = () => shallow(<Select {...props}/>);

    beforeEach(() => {
        props = {
            options: [{
                value: 'hello',
                label: 'Hello World'
            },{
                value: 'foo',
                label: 'Foo Bar'
            },{
                value: 'mike',
                label: 'Big Mike'
            }],
            value: 'foo',
            onChange: jest.fn()
        }
    });

    describe('render', () => {
        describe('options', () => {
            it('should render a select component with multiple options', () => {
                expect(wrapper()).toMatchSnapshot();
                // console.log(wrapper().debug());
            });

            it('should return no options when no options are passed in', () => {
                props.options = undefined;
                expect(wrapper()).toMatchSnapshot();
            });
        });
    });

    describe('functionality', () => {
        it('should call onChange prop onChange of select', () => {
            expect(props.onChange).not.toHaveBeenCalled();
            expect(props.onChange).toHaveBeenCalledTimes(0);
            wrapper().find('select').first().props().onChange({
                target: {
                    value: 'mike'
                }
            });
            expect(props.onChange).toHaveBeenCalledTimes(1);
            expect(props.onChange).toHaveBeenCalledWith('mike');
        });
    });
});
