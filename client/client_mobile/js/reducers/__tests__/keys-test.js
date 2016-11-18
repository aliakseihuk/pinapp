'use strict';

jest.disableAutomock();

import keys from '../keys';
import {
    saveKey,
    removeKey
} from '../../actions'

describe('keys reducer', () => {

    it('is empty by default', () => {
        expect(keys(undefined, {})).toEqual([]);
    });

    it('add new key', () => {
        let state = [];
        
        var action = saveKey(0, 'new key', 'some password', false, 0);
        
        expect(keys(state, action)).toEqual([{
            id: 0,
            name: 'new key',
            hash: 'some password',
            isNumerical: false,
        }]);
    });

    it('remove key', () => {
        let state = [{
            id:0,
            name: 'key 0'
        }, {
            id:1,
            name: 'key 1'
        }, {
            id:2,
            name: 'key 2'
        }];

        const action = removeKey(1);
        
        expect(keys(state, action)).toEqual([{
            id:0,
            name: 'key 0'
        }, {
            id:2,
            name: 'key 2'
        }]);
    });
});