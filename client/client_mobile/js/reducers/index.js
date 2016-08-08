'use strict';

import { combineReducers } from 'redux';

import keys from './keys';
import newKey from './newkey';
import checkKey from './checkkey';

export default combineReducers({
    keys,
    newKey,
    checkKey
});