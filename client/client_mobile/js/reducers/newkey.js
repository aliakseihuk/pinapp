'use strict';

import {
    CHANGE_NEW_NAME,
    CHANGE_NEW_PASSWORD,
    TOGGLE_SHOW_PASSWORD,
    CLEAR_NEW
} from '../actions';

const initialState = {
    name: '',
    password: '',
    showPassword: false,
    isNumerical: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NEW_NAME:
            return {
                ...state,
                name: action.name
            };
        case CHANGE_NEW_PASSWORD:
            return {
                ...state,
                password: action.password
            };
        case TOGGLE_SHOW_PASSWORD:
            return {
                ...state,
                showPassword: !state.showPassword
            };
        case CLEAR_NEW:
            state = initialState;
            return state;
        default:
            return state;
    }
};