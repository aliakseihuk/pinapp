'use strict';

export const CHANGE_NEW_NAME = 'CHANGE_NAME';
export const CHANGE_NEW_PASSWORD = 'CHANGE_PASSWORD';
export const CHANGE_NEW_ICON = 'CHANGE_NEW_ICON';
export const SWITCH_SHOW_SYMBOLS = 'SWITCH_SHOW_SYMBOLS';
export const SWITCH_IS_NUMERICAL = 'SWITCH_IS_NUMERICAL';
export const CLEAR_NEW = 'CLEAR_NEW';

export const changeNewName = (value) => ({ type: CHANGE_NEW_NAME, name: value });
export const changeNewPassword = (value) => ({ type: CHANGE_NEW_PASSWORD, password: value });
export const changeNewIcon = (value) => ({ type: CHANGE_NEW_ICON, icon: value});
export const switchShowSymbols = () => ({ type: SWITCH_SHOW_SYMBOLS });
export const switchIsNumerical = () => ({ type: SWITCH_IS_NUMERICAL });
export const clearNew = () => ({ type: CLEAR_NEW });