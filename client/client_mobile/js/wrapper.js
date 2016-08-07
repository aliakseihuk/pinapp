'use strict';

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import rootReducer from './reducers';

import { addUserkey } from './actions';

const store = createStore(rootReducer);

const wrapper = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
};

store.dispatch(addUserkey(0, 'userkey 1', 'password 1', true, 0));
store.dispatch(addUserkey(1, 'userkey 2', 'password 2', true, 0));
store.dispatch(addUserkey(2, 'userkey 3', 'password 3', true, 0));
store.dispatch(addUserkey(3, 'userkey 4', 'password 4', true, 0));
store.dispatch(addUserkey(4, 'userkey 5', 'password 5', true, 0));

export default wrapper;