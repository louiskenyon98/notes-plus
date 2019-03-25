import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

//Enable Redux dev tools.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//Create Redux store and apply Thunk middleware.
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
document.body.style.backgroundColor = "#ecedee";
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);

registerServiceWorker();
