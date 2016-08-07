'use strict';

export const ADD_USERKEY = 'ADD_USERKEY';
export const REMOVE_USERKEY = 'REMOVE_USERKEY';

export const addUserkey = (id, name, key, isNumerical, iconType) => ({
    type: ADD_USERKEY,
    id: id,
    name: name,
    key: key,
    isNumerical: isNumerical,
    iconType: iconType
});

export const removeUserkey = (id) => ({
    type: REMOVE_USERKEY,
    id: id,
});