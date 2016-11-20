'use strict';

export const SIGNIN = 'SIGNIN';

export const signin = (profile, token) => ({type: SIGNIN, profile, token});