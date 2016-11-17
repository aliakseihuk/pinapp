'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput
} from 'react-native';

import colorscheme from '../../data/colorscheme.json';

class KeyTextInput extends Component {
  render() {
    let keyboardType = 'default';
    let placeholder = this.props.placeholder;
    let autoFocus = this.props.autoFocus || false;
    let isPassword = this.props.isPassword || false;

    if (isPassword) {
      if (this.props.isNumeric) {
        keyboardType = 'numeric';
        if (!placeholder)
          placeholder = 'pin';
      }
      if (!placeholder)
        placeholder = 'password';
    }

    let color = colorscheme.font;
    let borderColor = colorscheme.border;
    if (this.props.isValid !== undefined) {
      color = borderColor = this.props.isValid ? colorscheme.valid : colorscheme.invalid;
    }

    return (
      <View style={[styles.inputContainer, { borderColor }, this.props.style]}>
        <TextInput
          style={[styles.input, { color }]}
          value={this.props.value}
          onChangeText={this.props.onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colorscheme.border}
          autoFocus={autoFocus}
          secureTextEntry={isPassword && !this.props.showPassword}
          keyboardType={keyboardType}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomWidth: 2
  },
  input: {
    textAlign: 'center',
    fontSize: 20,
    height: 30,
  }
});

export default KeyTextInput;