'use strict';

import KeysApi from '../api/mockKeysApi';

// export const ADD_KEY = 'ADD_KEY';
// export const REMOVE_KEY = 'REMOVE_KEY';
export const LOAD_KEYS_SUCCESS = 'LOAD_KEYS_SUCCESS';

// export const addKey = (id, name, password, isNumerical) => ({
//   type: ADD_KEY,
//   id: id,
//   name: name,
//   password: password,
//   isNumerical: isNumerical
// });

export const loadKeys = () => {
  return (dispatch) => {
    return KeysApi.getAllKeys()
      .then(keys => {
        dispatch(loadKeysSuccess(keys))
        console.log('get it');
      })
      .catch(error => {
        throw error;
      });
  }
};

const loadKeysSuccess = (keys) => { return { type: LOAD_KEYS_SUCCESS, keys }; }

// export const removeKey = (id) => ({
//   type: REMOVE_KEY,
//   id: id,
// });
