import React from 'react';
import App from '../app/App';
import {shallow} from 'enzyme';

describe('App', () => {
    let props;
    let wrapper = () => shallow(<App {...props}/>);
    beforeEach(() => {
        props = {};
    });
    it('should render the Routes and ModalContainer components', () => {
        expect(wrapper()).toMatchSnapshot();
    })
});
