import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import allReducers from './reducers';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    trace: true,
}) : compose;

export const store = createStore(allReducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
