'use strict';

import md5 from 'md5';

import {
  CHANGE_CHECK_PASSWORD,
  TOGGLE_CHECK_SHOW_PASSWORD,
  CLEAR_CHECK,
} from '../actions';

const initialState = {
  password: '',
  showPassword: false,
  isVerified: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CHECK_PASSWORD:
      return {
        ...state,
        password: action.password,
        isVerified: md5(action.password) === action.key.hash
      };
    case TOGGLE_CHECK_SHOW_PASSWORD:
      return {
        ...state,
        showPassword: !state.showPassword
      };
    case CLEAR_CHECK:
      return initialState;
    default:
      return state;
  }
};