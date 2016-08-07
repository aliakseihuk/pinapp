'use strict';

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import rootReducer from './reducers'

const store = createStore(rootReducer);

const wrapper = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
};

export default wrapper;