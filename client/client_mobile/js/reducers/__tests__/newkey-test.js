'use strict';

jest.disableAutomock();

import newKey from '../newkey.js';
import {
    toggleShowPassword,
    switchIsNumerical,
    changeNewName,
    changeNewPassword,
    clearNew
} from '../../actions'

describe('newkey reducer', () => {

    it('toggle show password', () => {
        var action = toggleShowPassword();
        
        expect(newKey(undefined, action)).toEqual({
            name: '',
            password: '',
            showPassword: true,
            isNumerical: false,
        });
    });

    it('switch show symbols', () => {
        const action = switchIsNumerical();
        
        expect(newKey(undefined, action)).toEqual({
            name: '',
            password: '',
            showPassword: false,
            isNumerical: true,
        });
    });

    it('change new key name', () => {
        let state = { name: 'from the first name'};
        const action = changeNewName('to the second name');
        
        expect(newKey(state, action)).toEqual({
            name: 'to the second name'
        });
    });

    it('change new key password', () => {
        let state = { password: 'password'};
        const action = changeNewPassword('very secure password');
        
        expect(newKey(state, action)).toEqual({
            password: 'very secure password'
        });
    });

    it('clear new key fields', () => {
        let state = {
            name: 'some name',
            password: 'some password',
            showPassword: true,
            isNumerical: true
        };
        const action = clearNew();
        
        expect(newKey(state, action)).toEqual({
            name: '',
            password: '',
            showPassword: false,
            isNumerical: false
        });
    });
});