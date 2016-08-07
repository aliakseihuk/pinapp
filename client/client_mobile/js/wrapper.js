'use strict';

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

const store = createStore(() => { });

const wrapper = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
};

export default wrapper;