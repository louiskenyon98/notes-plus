import React from 'react';
import {shallow} from 'enzyme';
import Error from '../../../../app/components/common/reduxFormFields/Error';

describe('Error', () => {
    let props = {};
    let wrapper = () => shallow(<Error {...props}/>);
    beforeEach(() => {
        props = {
            message: 'error message'
        }
    });
    describe('render', () => {
        it('should render an error message when one is supplied', () => {
            expect(wrapper()).toMatchSnapshot();
        });
        it('should not render an error message when one is not supplied', () => {
            props.message = '';
            expect(wrapper()).toMatchSnapshot();
        })
    })
});
