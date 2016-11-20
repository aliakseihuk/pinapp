'use strict';

import {
  SIGNIN
}
from '../actions/user.js';

const initialState = {
  isSignin: false,
};

export default (state = initialState,  action) => {
  switch(action.type) {
    case SIGNIN:
      return {
        ...state,
        isSignin: true,
        profile: action.profile,
        token: action.token
      };
    default:
      return state;
  }
}