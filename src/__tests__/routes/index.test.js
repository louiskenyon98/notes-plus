import React from 'react';
import {shallow} from 'enzyme'
import {Routes} from '../../app/routes/index';

describe('Routes', () => {
    let props = {};
    let wrapper = () => shallow(<Routes {...props}/>);

    describe('render', () => {
        it('should render Routes component', () => {
            expect(wrapper()).toMatchSnapshot();
        })
    })
});
