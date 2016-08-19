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

store.dispatch(addKey(0, 'key 1', 'password 1', false, 0));
store.dispatch(addKey(1, 'key 2', 'password 2', false, 0));
store.dispatch(addKey(2, 'key 3', 'password 3', false, 0));
store.dispatch(addKey(3, 'key 4', 'password 4', false, 0));
store.dispatch(addKey(4, 'key 5', 'password 5', false, 0));

export default wrapper;