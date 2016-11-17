'use strict';

import md5 from 'md5';

import KeysApi from '../api/mockKeysApi';

// export const ADD_KEY = 'ADD_KEY';
export const ADD_KEY_SUCCESS = 'ADD_KEY_SUCCESS';
export const REMOVE_KEY = 'REMOVE_KEY';
export const LOAD_KEYS_SUCCESS = 'LOAD_KEYS_SUCCESS';

export const addKey = (name, password) => {
  return (dispatch) => {
    // move md5 to reducer or backend
    let key = {name, hash: md5(password), isNumerical: false};
    return KeysApi.addKey(key)
      .then(key => {
        dispatch(addKeySuccess(key))
      })
      .catch(error => {
        throw error;
      });
  }
};

const addKeySuccess = (key) => { return { type: ADD_KEY_SUCCESS, key }; }

export const loadKeys = () => {
  return (dispatch) => {
    return KeysApi.getAllKeys()
      .then(keys => {
        dispatch(loadKeysSuccess(keys))
      })
      .catch(error => {
        throw error;
      });
  }
};

const loadKeysSuccess = (keys) => { return { type: LOAD_KEYS_SUCCESS, keys }; }
const addKeysSuccess = (keys) => { return { type: ADD_KEYS_SUCCESS, keys }; }

export const removeKey = (id) => ({
  type: REMOVE_KEY,
  id: id,
});
