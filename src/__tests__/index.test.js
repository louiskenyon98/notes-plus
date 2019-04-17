import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from '../app/App';
import '../app/index'

jest.mock('react-dom', () => ({
    ReactDOM: {
        render: jest.fn()
    }
}));

describe('index', () => {
    it('should call render function Provider & App', () => {
        expect(ReactDOM.render).toHaveBeenCalledWith(
            <Provider store={expect.anything()}>
                <App/>
            </Provider>,
            null
        )
    })
});
