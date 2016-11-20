'use strict'

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Auth0Lock from 'react-native-lock';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { signin } from '../actions/user';
import credentials from '../../data/auth0-credentials';

const lock = new Auth0Lock(credentials);

class LoginControl extends Component {
  componentDidMount() {
    lock.show({
      closable: false,
    }, (err, profile, token) => {
      if (err) {
        console.log(err);
        return;
      }
      this.props.signin(profile, token);
    });
  }

  render() {
    return (<View/>);
  }
};

const stateToProps = (state) => {
  return {};
};

const dispatchToProps = (dispatch) => {
  return bindActionCreators({ signin }, dispatch)
};

export default connect(stateToProps, dispatchToProps)(LoginControl);