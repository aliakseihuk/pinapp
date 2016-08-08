'use strict';

import {
    ADD_KEY,
    CHECK_PASSWORD
} from '../actions'

export default (state = [], action) => {
    switch (action.type) {
        case ADD_KEY:
            //calculating hash
            const hash = action.password;
            return {
                id: action.id,
                name: action.name,
                hash: hash,
                isNumerical: action.isNumerical,
                iconType: action.iconType
            };
        default:
            return state;
    }
};