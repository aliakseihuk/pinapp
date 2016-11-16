'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import colorscheme from '../../data/colorscheme.json';

class KeyIcon extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.container}>
          <Text style={styles.letter}>{this.props.name.charAt(0).toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const size = 45;

const styles = StyleSheet.create({
  container: {
    height: size,
    width: size,
    borderRadius: size / 2,
    backgroundColor: colorscheme.controlBackground,
    justifyContent: 'center',
    alignItems: 'center'
  },
  letter: {
    color: colorscheme.font,
    fontSize: 28
  }
});

export default KeyIcon;