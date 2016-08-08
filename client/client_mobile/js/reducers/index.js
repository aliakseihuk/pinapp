'use strict';

import { combineReducers } from 'redux';

import keys from './keys';
import newKey from './newkey';

export default combineReducers({
    keys,
    newKey
});