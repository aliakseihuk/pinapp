'use strict';

import { combineReducers } from 'redux';

import userkeys from './userkeys';
import newUserkey from './newUserkey';

export default combineReducers({
    userkeys,
    newUserkey
});