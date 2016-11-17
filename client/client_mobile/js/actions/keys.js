'use strict';

import md5 from 'md5';

import KeysApi from '../api/mockKeysApi';

export const ADD_KEY_SUCCESS = 'ADD_KEY_SUCCESS';
export const LOAD_KEYS_SUCCESS = 'LOAD_KEYS_SUCCESS';
export const REMOVE_KEY_SUCCESS = 'REMOVE_KEY_SUCCESS';
export const TOOGLE_EDIT_MODE = 'TOGGLE_EDIT_MODE';

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

const addKeySuccess = (key) => ({ type: ADD_KEY_SUCCESS, key });

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

export const removeKey = (key) => {
  return (dispatch) => {
    return KeysApi.removeKey(key._id)
      .then(keys => {
        dispatch(removeKeySuccess(key._id))
      })
      .catch(error => {
        throw error;
      });
  }
};

const removeKeySuccess = (keyId) => ({ type: REMOVE_KEY_SUCCESS, keyId });

export const toggleEditMode = () => ({ type: TOOGLE_EDIT_MODE });
