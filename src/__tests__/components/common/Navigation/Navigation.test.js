import React from 'react';
import {shallow} from 'enzyme';
import Navigation from '../../../../app/components/common/Navigation/Navigation';

describe('Navigation', () => {
    let props = {};
    let wrapper = () => shallow(<Navigation {...props}/>);

    describe('render', () => {
        it('should render', () => {
            expect(wrapper()).toMatchSnapshot();
        });
    });
});
