'use strict';

import {
    ADD_KEY,
    REMOVE_KEY
} from '../actions';

import key from './key';

export default (state = [], action) => {
    switch (action.type) {
        case ADD_KEY:
            return [
                ...state,
                key(undefined, action)
            ];
        case REMOVE_KEY:
            return state.filter(k => k.id != action.id);
        default:
            return state;
    }
};