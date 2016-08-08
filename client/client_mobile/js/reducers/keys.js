'use strict';

import {
    ADD_KEY,
    REMOVE_KEY
} from '../actions'

export default (state = [], action) => {
    switch (action.type) {
        case ADD_KEY:
            const hash = action.key
            return [...state, {
                id: action.id,
                name: action.name,
                hash: hash,
                isNumerical: action.isNumerical,
                iconType: action.iconType
            }];
        case REMOVE_KEY:
            return state.filter(uk => uk.id != action.id);
        default:
            return state;
    }
};