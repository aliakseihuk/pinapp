'use strict';

export const CHANGE_NEW_NAME = 'CHANGE_NAME';
export const CHANGE_NEW_PASSWORD = 'CHANGE_PASSWORD';
export const TOGGLE_SHOW_PASSWORD = 'TOGGLE_SHOW_PASSWORD';
export const CLEAR_NEW = 'CLEAR_NEW';

export const changeNewName = (value) => ({ type: CHANGE_NEW_NAME, name: value });
export const changeNewPassword = (value) => ({ type: CHANGE_NEW_PASSWORD, password: value });
export const toggleShowPassword = () => ({ type: TOGGLE_SHOW_PASSWORD });
export const clearNew = () => ({ type: CLEAR_NEW });