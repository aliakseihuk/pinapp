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
  changeEditName,
  changeEditPassword,
  toggleShowPassword,
  clearEdit,
  saveKey
} from '../actions';

class EditKeyControl extends Component {

  componentWillMount() {
    let routes = this.props.navigator.getCurrentRoutes();
    routes[routes.length - 1].onPressRightButton = this.onSavePress.bind(this);
    if (this.props.keyObject) {
      this.props.changeEditName(this.props.keyObject.name);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <KeyTextInput
            style={styles.input}
            value={this.props.name}
            onChangeText={(name) => this.props.changeEditName(name) }
            placeholder='name'
          />
          <KeyTextInput
            style={styles.input}
            value={this.props.password}
            onChangeText={(password) => this.props.changeEditPassword(password) }
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

  onSavePress() {
    let _id = this.props.keyObject ? this.props.keyObject._id : undefined;
    this.props.saveKey(_id, this.props.name, this.props.password);
    this.props.clearEdit();
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
    name: state.editKey.name,
    password: state.editKey.password,
    showPassword: state.editKey.showPassword
  }
};

const dispatchToProps = (dispatch) => {
  return bindActionCreators({
    changeEditName,
    changeEditPassword,
    toggleShowPassword,
    clearEdit,
    saveKey
  }, dispatch)
};

export default connect(stateToProps, dispatchToProps)(EditKeyControl);