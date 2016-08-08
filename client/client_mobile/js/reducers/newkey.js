'use strict';

import {
    CHANGE_NAME,
    CHANGE_PASSWORD,
    SWITCH_SHOW_SYMBOLS,
    SWITCH_IS_NUMERICAL,
    CLEAR_NEW
} from '../actions'

const initialState = {
    name: '',
    password: '',
    showSymbols: false,
    isNumerical: false,
    iconType: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NAME:
            return {
                ...state,
                name: action.name
            };
        case CHANGE_PASSWORD:
            return {
                ...state,
                password: action.password
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