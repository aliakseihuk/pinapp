'use strict';

import {
  SAVE_KEY_SUCCESS,
  LOAD_KEYS_SUCCESS,
  REMOVE_KEY_SUCCESS,
  TOOGLE_EDIT_MODE
} from '../actions';

const initialState = {
  editMode: false,
  elements: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_KEY_SUCCESS:
      const indexOfKeyToRemove = state.elements.findIndex(key => key._id === action.key._id);
      state.elements.splice(indexOfKeyToRemove, 1);
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
    case REMOVE_KEY_SUCCESS:
      console.log(action.keyId);
      indexOfKeyToRemove = state.elements.findIndex(key => key._id === action.keyId);
      state.elements.splice(indexOfKeyToRemove, 1);
      return {
        ...state,
        elements: [...state.elements]
      };
    case TOOGLE_EDIT_MODE:
      return {
        ...state,
        editMode: !state.editMode
      }
    default:
      return state;
  }
};