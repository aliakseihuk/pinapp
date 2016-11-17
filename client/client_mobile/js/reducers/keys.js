'use strict';

import {
  ADD_KEY_SUCCESS,
  LOAD_KEYS_SUCCESS
} from '../actions';

const initialState = {
  editMode: false,
  elements: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_KEY_SUCCESS:
      return {
        ...state,
        elements: [
          ...state.elements,
          action.key
        ]
      };
    case LOAD_KEYS_SUCCESS:
      return {
        ...state,
        elements: action.keys,
      };
    default:
      return state;
  }
};