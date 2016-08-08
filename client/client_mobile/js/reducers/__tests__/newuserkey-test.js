'use strict';

jest.disableAutomock();

import newUserkey from '../newUserkey.js';
import {
    switchShowSymbols,
    switchIsNumerical,
    changeName,
    changePassword,
    clearFields
} from '../../actions'

describe('newUserkey reducer', () => {

    it('switch show symbols', () => {
        var action = switchShowSymbols();
        
        expect(newUserkey(undefined, action)).toEqual({
            name: '',
            password: '',
            showSymbols: true,
            isNumerical: false,
            iconType: 0,
        });
    });

    it('switch show symbols', () => {
        const action = switchIsNumerical();
        
        expect(newUserkey(undefined, action)).toEqual({
            name: '',
            password: '',
            showSymbols: false,
            isNumerical: true,
            iconType: 0,
        });
    });

    it('change new userkey name', () => {
        let state = { name: 'from the first name'};
        const action = changeName('to the second name');
        
        expect(newUserkey(state, action)).toEqual({
            name: 'to the second name'
        });
    });

    it('change new userkey password', () => {
        let state = { password: 'password'};
        const action = changePassword('very secure password');
        
        expect(newUserkey(state, action)).toEqual({
            password: 'very secure password'
        });
    });

    it('clear new userkey fields', () => {
        let state = {
            name: 'some name',
            password: 'some password',
            showSymbols: true,
            isNumerical: true,
            iconType: 0,
        };
        const action = clearFields();
        
        expect(newUserkey(state, action)).toEqual({
            name: '',
            password: '',
            showSymbols: false,
            isNumerical: false,
            iconType: 0,
        });
    });
});