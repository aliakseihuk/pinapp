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
    console.log(action.type);
    switch (action.type) {
        case CHECK_PASSWORD:
            const hash = action.key.hash
            console.log('hash ' + hash);
            console.log('password ' + action.password);
            return {
                ...state,
                isVerified: action.password === hash
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