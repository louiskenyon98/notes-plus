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
        }
    });
    describe('render', () => {
        it('should render textarea with placeholder and text in error state if touched and error = true', () => {
            expect(wrapper()).toMatchSnapshot();
        })
    })
});
