'use strict';

export const ADD_KEY = 'ADD_KEY';
export const REMOVE_KEY = 'REMOVE_KEY';

export const addKey = (id, name, password, isNumerical, icon) => ({
    type: ADD_KEY,
    id: id,
    name: name,
    password: password,
    isNumerical: isNumerical,
    icon: icon
});

export const removeKey = (id) => ({
    type: REMOVE_KEY,
    id: id,
});