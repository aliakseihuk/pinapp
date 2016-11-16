'use strict';

import md5 from 'md5';

import {
    ADD_KEY
} from '../actions'

export default (state = [], action) => {
    switch (action.type) {
        case ADD_KEY:
            
            //md5 hashing is only for proof of concept
            //use scrypt instead
            const hash = md5(action.password);

            return {
                id: action.id,
                name: action.name,
                hash: hash,
                isNumerical: action.isNumerical,
            };
        default:
            return state;
    }
};