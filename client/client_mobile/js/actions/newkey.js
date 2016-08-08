'use strict';

export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const SWITCH_SHOW_SYMBOLS = 'SWITCH_SHOW_SYMBOLS';
export const SWITCH_IS_NUMERICAL = 'SWITCH_IS_NUMERICAL';
export const CLEAR_FIELDS = 'CLEAR_FIELDS';

export const changeName = (value) => ({ type: CHANGE_NAME, name: value });
export const changePassword = (value) => ({ type: CHANGE_PASSWORD, password: value });
export const switchShowSymbols = () => ({ type: SWITCH_SHOW_SYMBOLS });
export const switchIsNumerical = () => ({ type: SWITCH_IS_NUMERICAL });
export const clearFields = () => ({ type: CLEAR_FIELDS });