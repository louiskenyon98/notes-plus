import React from 'react';
import {shallow} from 'enzyme';
import StatusMessage from '../../../../../app/components/common/Modal/StatusMessage/StatusMessage';

describe('StatusMessage', () => {
    let props = {};
    let wrapper = () => shallow(<StatusMessage {...props}/>);

    beforeEach(() => {
        props = {
            title: 'Status message title',
            status: 'success',
            body: 'Status message body'
        }
    });

    describe('render', () => {
        it('should render a component with a title and body', () => {
            expect(wrapper()).toMatchSnapshot();
        });
        describe('title', () => {
            it('should render the title prop', () => {
                expect(wrapper().find('h1').first().text()).toBe('Status message title')
            });
            it('should render Successful when there is not title prop and the status is success', () => {
                props.title = '';
                props.status = 'success';
                expect(wrapper().find('h1').first().text()).toBe('Successful')
            });
            it('should render Sad times when there is not title prop and the status is fail', () => {
                props.title = '';
                props.status = 'fail';
                expect(wrapper().find('h1').first().text()).toBe('Sad times')
            });
            it('should render nothing when there is not title prop and the status is blank', () => {
                props.title = '';
                props.status = '';
                expect(wrapper().find('h1').first().text()).toBe('')
            });
        });
    });
});
