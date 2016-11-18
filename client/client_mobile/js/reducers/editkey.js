'use strict';

import {
  CHANGE_EDIT_NAME,
  CHANGE_EDIT_PASSWORD,
  TOGGLE_SHOW_PASSWORD,
  CLEAR_EDIT
} from '../actions';

const initialState = {
  name: '',
  password: '',
  showPassword: false,
  isNumerical: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_EDIT_NAME:
      return {
                ...state,
        name: action.name
      };
    case CHANGE_EDIT_PASSWORD:
      return {
                ...state,
        password: action.password
      };
    case TOGGLE_SHOW_PASSWORD:
      return {
                ...state,
        showPassword: !state.showPassword
      };
    case CLEAR_EDIT:
      return initialState;
    default:
      return state;
  }
};