'use strict';

import {
    LOAD_KEYS_SUCCESS
} from '../actions';

export default (state = [], action) => {
    switch (action.type) {
        // case ADD_KEY:
        //     return [
        //         ...state,
        //         key(undefined, action)
        //     ];
        case LOAD_KEYS_SUCCESS:
            return action.keys;
        default:
            return state;
    }
};