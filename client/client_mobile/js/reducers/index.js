'use strict';

import { combineReducers } from 'redux';

import keys from './keys';
import editKey from './editkey';
import checkKey from './checkkey';
import user from './user';

export default combineReducers({
    keys,
    editKey,
    checkKey,
    user
});