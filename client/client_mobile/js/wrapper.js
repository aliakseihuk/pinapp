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

store.dispatch(addKey(0,  'key 1', 'password 1', false, 0));
store.dispatch(addKey(1,  'key 2', 'password 2', false, 1));
store.dispatch(addKey(2,  'key 3', 'password 3', false, 2));
store.dispatch(addKey(3,  'key 4', 'password 4', false, 3));
store.dispatch(addKey(4,  'key 5', 'password 5', false, 4));
store.dispatch(addKey(5,  'key 6', 'password 5', false, 5));
store.dispatch(addKey(6,  'key 7', 'password 5', false, 6));
store.dispatch(addKey(7,  'key 8', 'password 5', false, 7));
store.dispatch(addKey(8,  'key 9', 'password 5', false, 8));
store.dispatch(addKey(9,  'key 10', 'password 5', false, 9));
store.dispatch(addKey(10, 'key 11', 'password 5', false, 10));


export default wrapper;