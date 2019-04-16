import React from 'react';
import {mount} from 'enzyme';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store'
import SelectContainer from '../../../../../app/containers/common/formFields/SelectContainer/index';

describe('SelectContainer Integration Test', () => {
    let props = {};
    let store = {};
    let mountedComponent;
    const middleware = [thunk];
    const mockStore = configureMockStore(middleware);
    let wrapper = () => {
        if (!mountedComponent) {
            mountedComponent = mount(
                <Provider store={store}>
                    <SelectContainer {...props}/>
                </Provider>
            )
        }
        return mountedComponent;
    };
    beforeEach(() => {
        props = {};
        store = mockStore({
            notes: {
                filterOption: "createdAt"
            }
        });
        mountedComponent = undefined;
    });
    it('should render Select component with options, a value and an onChange function', () => {
        expect(wrapper()).toMatchSnapshot();
    });
    it('should change value from createdAt to updatedAt', () => {
        expect(wrapper().find('select').first().props().value).toBe("createdAt");
        store = mockStore({
            notes: {
                filterOption: "updatedAt"
            }
        });
        wrapper().setProps({store});
        wrapper().update();
        expect(wrapper().find('select').first().props().value).toBe("updatedAt");
    });
    it('should dispatch ONCHANGE_FILTER_VALUE with updatedAt', () => {
        expect(store.getActions().length).toBe(0);
        wrapper().find('select').first().props().onChange({
            target: {
                value: 'updatedAt'
            }
        });
        expect(store.getActions().length).toBe(1);
        expect(store.getActions()[0]).toEqual({
            payload: "updatedAt",
            type: "ONCHANGE_FILTER_VALUE"
        });
    });
});
