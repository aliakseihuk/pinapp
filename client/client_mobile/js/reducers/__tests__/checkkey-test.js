// 'use strict';

// jest.disableAutomock();

// import checkKey from '../checkkey.js';
// import {
//     checkPassword,
//     changeCheckPassword,
//     clearCheck
// } from '../../actions'

// describe('checkkey reducer', () => {

//     it('change check password', () => {
//         let state = { password: 'password'};
//         const action = changeCheckPassword('very secure password');
        
//         expect(checkKey(state, action)).toEqual({
//             password: 'very secure password'
//         });
//     });

//     it('clear check fields', () => {
//         let state = {
//             password: 'password',
//             isVerified: true,
//         };
//         const action = clearCheck();
        
//         expect(checkKey(state, action)).toEqual({
//             password: '',
//             isVerified: false,
//         });
//     });

//     it('check invalid password', () => {
//         let state = {
//             password: 'password',
//             isVerified: false
//         };
//         const action = checkPassword(state.password, {hash: 'some password'});
        
//         expect(checkKey(state, action)).toEqual({
//             password: 'password',
//             isVerified: false
//         });
//     });

//     it('check correct password', () => {
//         let state = {
//             password: 'some password',
//             isVerified: false
//         };
//         const action = checkPassword(state.password, {hash: 'some password'});
        
//         expect(checkKey(state, action)).toEqual({
//             password: 'some password',
//             isVerified: true
//         });
//     });
// });