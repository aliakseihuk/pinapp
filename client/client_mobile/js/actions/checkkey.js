'use strict';

export const CHECK_PASSWORD = 'CHECK_PASSWORD';
export const CHANGE_CHECK_PASSWORD = 'CHANGE_CHECK_PASSWORD';
export const CLEAR_CHECK = 'CLEAR_NEW';

export const checkPassword = (password, key) => ({ type: CHECK_PASSWORD, password: password, key: key });
export const changeCheckPassword = (value) => ({ type: CHANGE_CHECK_PASSWORD, password: value });
export const clearCheck = () => ({ type: CLEAR_CHECK });