'use strict';

export const CHANGE_CHECK_PASSWORD = 'CHANGE_CHECK_PASSWORD';
export const CLEAR_CHECK = 'CLEAR_NEW';

export const changeCheckPassword = (value, key) => ({ type: CHANGE_CHECK_PASSWORD, password: value, key: key });
export const clearCheck = () => ({ type: CLEAR_CHECK });