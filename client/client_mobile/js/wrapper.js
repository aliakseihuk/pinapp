'use strict';

import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';
import rootReducer from './reducers';
import { loadKeys } from './actions';

const store = createStore(rootReducer, {}, applyMiddleware(thunk));
store.dispatch(loadKeys());

const wrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
};

export default wrapper;
