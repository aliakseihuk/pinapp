'use strict';

jest.disableAutomock();

import newKey from '../newKey.js';
import {
    switchShowSymbols,
    switchIsNumerical,
    changeName,
    changePassword,
    clearNew
} from '../../actions'

describe('newKey reducer', () => {

    it('switch show symbols', () => {
        var action = switchShowSymbols();
        
        expect(newKey(undefined, action)).toEqual({
            name: '',
            password: '',
            showSymbols: true,
            isNumerical: false,
            iconType: 0,
        });
    });

    it('switch show symbols', () => {
        const action = switchIsNumerical();
        
        expect(newKey(undefined, action)).toEqual({
            name: '',
            password: '',
            showSymbols: false,
            isNumerical: true,
            iconType: 0,
        });
    });

    it('change new key name', () => {
        let state = { name: 'from the first name'};
        const action = changeName('to the second name');
        
        expect(newKey(state, action)).toEqual({
            name: 'to the second name'
        });
    });

    it('change new key password', () => {
        let state = { password: 'password'};
        const action = changePassword('very secure password');
        
        expect(newKey(state, action)).toEqual({
            password: 'very secure password'
        });
    });

    it('clear new key fields', () => {
        let state = {
            name: 'some name',
            password: 'some password',
            showSymbols: true,
            isNumerical: true,
            iconType: 0,
        };
        const action = clearNew();
        
        expect(newKey(state, action)).toEqual({
            name: '',
            password: '',
            showSymbols: false,
            isNumerical: false,
            iconType: 0,
        });
    });
});