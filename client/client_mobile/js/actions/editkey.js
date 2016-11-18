'use strict';

export const CHANGE_EDIT_NAME = 'CHANGE_EDIT_NAME';
export const CHANGE_EDIT_PASSWORD = 'CHANGE_EDIT_PASSWORD';
export const TOGGLE_SHOW_PASSWORD = 'TOGGLE_SHOW_PASSWORD';
export const CLEAR_EDIT= 'CLEAR_EDIT';

export const changeEditName = (name) => ({ type: CHANGE_EDIT_NAME, name });
export const changeEditPassword = (password) => ({ type: CHANGE_EDIT_PASSWORD, password });
export const toggleShowPassword = () => ({ type: TOGGLE_SHOW_PASSWORD });
export const clearEdit = () => ({ type: CLEAR_EDIT });