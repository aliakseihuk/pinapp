'use strict';

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import rootReducer from './reducers';

import { addKey } from './actions';

const store = createStore(rootReducer);

const wrapper = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
};

store.dispatch(addKey(0, 'key 1', 'password 1', true, 0));
store.dispatch(addKey(1, 'key 2', 'password 2', true, 0));
store.dispatch(addKey(2, 'key 3', 'password 3', true, 0));
store.dispatch(addKey(3, 'key 4', 'password 4', true, 0));
store.dispatch(addKey(4, 'key 5', 'password 5', true, 0));

export default wrapper;