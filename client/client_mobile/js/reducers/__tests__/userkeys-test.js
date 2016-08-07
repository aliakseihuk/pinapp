'use strict';

jest.disableAutomock();

// jest.unmock('../userkeys');
// jest.unmock('../../actions/userkeys');

import userkeys from '../userkeys';
import {
    addUserkey,
    removeUserkey
} from '../../actions'

describe('userkeys reducer', () => {

    it('is empty by default', () => {
        expect(userkeys(undefined, {})).toEqual([]);
    });

    it('add new userkey', () => {
        let state = [];
        console.log(addUserkey);
        var action = addUserkey(0, 'new userkey', 'some password', false, 0);
        
        expect(userkeys(state, action)).toEqual([{
            id: 0,
            name: 'new userkey',
            hash: 'some password',
            isNumerical: false,
            iconType: 0
        }]);
    });

    it('remove userkey', () => {
        let state = [{
            id:0,
            name: 'userkey 0'
        }, {
            id:1,
            name: 'userkey 1'
        }, {
            id:2,
            name: 'userkey 2'
        }];

        const action = removeUserkey(1);
        
        expect(userkeys(state, action)).toEqual([{
            id:0,
            name: 'userkey 0'
        }, {
            id:2,
            name: 'userkey 2'
        }]);
    });
});