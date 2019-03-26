//import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';

import reducers from './reducers';

//Enables Redux dev tools.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Create Redux store and apply Thunk middleware.
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
