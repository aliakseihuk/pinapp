'use strict';

import {
    CHECK_PASSWORD,
    CHANGE_CHECK_PASSWORD,
    CLEAR_CHECK,
} from '../actions';

const initialState = {
    password: '',
    isVerified: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHECK_PASSWORD:
            return {
                ...state,
                isVerified: action.password === action.key.hash
            };
        case CHANGE_CHECK_PASSWORD:
            return {
                ...state,
                password: action.password
            };
        case CLEAR_CHECK:
            return initialState;
        default:
            return state;
    }
};