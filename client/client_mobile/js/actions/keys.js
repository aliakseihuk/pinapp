'use strict';

export const ADD_KEY = 'ADD_KEY';
export const REMOVE_KEY = 'REMOVE_KEY';

export const addKey = (id, name, password, isNumerical, iconType) => ({
    type: ADD_KEY,
    id: id,
    name: name,
    password: password,
    isNumerical: isNumerical,
    iconType: iconType
});

export const removeKey = (id) => ({
    type: REMOVE_KEY,
    id: id,
});