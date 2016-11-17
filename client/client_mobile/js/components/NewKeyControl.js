'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Switch
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import KeyTextInput from './KeyTextInput';
import KeyIcon from './KeyIcon';
import ShowButton from './ShowButton';

import {
  changeNewName,
  changeNewPassword,
  toggleShowPassword,
  clearNew,
  addKey
} from '../actions';

class NewKeyControl extends Component {

  componentWillMount() {
    let routes = this.props.navigator.getCurrentRoutes();
    routes[routes.length - 1].onPressRightButton = this.onAddPress.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <KeyTextInput
            style={styles.input}
            value={this.props.name}
            onChangeText={(name) => this.props.changeNewName(name) }
            placeholder='name'
          />
          <KeyTextInput
            style={styles.input}
            value={this.props.password}
            onChangeText={(password) => this.props.changeNewPassword(password) }
            isPassword={true}
            isNumeric = {this.props.isNumerical}
            showPassword={this.props.showPassword}
          />
          <ShowButton
            style={styles.button}
            shown={this.props.showPassword}
            onPress={() => this.props.toggleShowPassword()}
          />
        </View>
      </View>
    );
  }

  onAddPress() {
    this.props.addKey(this.props.name, this.props.password);
    this.props.clearNew();
    this.props.navigator.pop({});
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
    name: state.newKey.name,
    password: state.newKey.password,
    showPassword: state.newKey.showPassword
  }
};

const dispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeNewName,
    changeNewPassword,
    toggleShowPassword,
    clearNew,
    addKey
  }, dispatch)
};

export default connect(stateToProps, dispatchToProps)(NewKeyControl);