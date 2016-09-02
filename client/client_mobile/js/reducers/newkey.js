'use strict';

import {
    CHANGE_NEW_NAME,
    CHANGE_NEW_PASSWORD,
    CHANGE_NEW_ICON,
    SWITCH_SHOW_SYMBOLS,
    SWITCH_IS_NUMERICAL,
    CLEAR_NEW
} from '../actions';

const initialState = {
    name: '',
    password: '',
    showSymbols: false,
    isNumerical: false,
    icon: 0
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
        case CHANGE_NEW_ICON:
            return {
                ...state,
                icon: action.icon
            };
        case SWITCH_SHOW_SYMBOLS:
            return {
                ...state,
                showSymbols: !state.showSymbols
            };
        case SWITCH_IS_NUMERICAL:
            return {
                ...state,
                isNumerical: !state.isNumerical
            };
        case CLEAR_NEW:
            state = initialState;
            return state;
        default:
            return state;
    }
};