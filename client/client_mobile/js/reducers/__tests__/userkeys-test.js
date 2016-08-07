'use strict';

jest.unmock('../userkeys');
import userkeys from '../userkeys';

describe('userkeys reducer', () => {

    it('is empty by default', () => {
        expect(userkeys(undefined, {})).toEqual([]);
    });

    it('add new userkey', () => {
        let state = [];

        const action = {
            type:'ADD_USERKEY',
            id: 0,
            name: 'new userkey',
            key: 'some password',
            isNumerical: false,
            iconType: 0
        };
        
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

        const action = {
            type:'REMOVE_USERKEY',
            id: 1
        };
        
        expect(userkeys(state, action)).toEqual([{
            id:0,
            name: 'userkey 0'
        }, {
            id:2,
            name: 'userkey 2'
        }]);
    });
});