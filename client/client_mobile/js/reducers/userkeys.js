'use strict';

export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_USERKEY':
            const hash = action.key
            return [...state, {
                id: action.id,
                name: action.name,
                hash: hash,
                isNumerical: action.isNumerical,
                iconType: action.iconType
            }];
        case 'REMOVE_USERKEY':
            return state.filter(uk => uk.id != action.id);
        default:
            return state;
    }
};