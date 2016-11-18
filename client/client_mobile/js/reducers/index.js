'use strict';

import { combineReducers } from 'redux';

import keys from './keys';
import editKey from './editkey';
import checkKey from './checkkey';

export default combineReducers({
    keys,
    editKey,
    checkKey
});