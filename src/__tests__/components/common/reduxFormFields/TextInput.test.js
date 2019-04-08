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
});
