'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import KeyTextInput from './KeyTextInput';
import ShowButton from './ShowButton';

import {
  changeCheckPassword,
  toogleCheckShowPassword
} from '../actions';

class CheckKeyControl extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <KeyTextInput
            style={styles.input}
            value={this.props.password}
            onChangeText={(password) => this.props.changeCheckPassword(password, this.props.keyObject)}
            isPassword={true}
            isNumeric={this.props.keyObject.isNumerical}
            autoFocus={true}
            isValid={this.props.isVerified}
            showPassword={this.props.showPassword}
            />
          <ShowButton
            style={styles.button}
            shown={this.props.showPassword}
            onPress={() => this.props.toogleCheckShowPassword()}
            />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 90,
    padding: 20
  },
  input: {
    marginBottom: 10,
  },
  button: {
    margin: 20,
  }
});

const stateToProps = (state) => {
  return {
    password: state.checkKey.password,
    showPassword: state.checkKey.showPassword,
    isVerified: state.checkKey.isVerified
  }
};

const dispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeCheckPassword,
    toogleCheckShowPassword
  }, dispatch)
};

export default connect(stateToProps, dispatchToProps)(CheckKeyControl);