'use strict'

import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import colorscheme from '../../data/colorscheme';

const ShowButton = ({style, shown, onPress}) => {
  let text = (shown ? 'Hide' : 'Show') + ' password';
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 4,
    padding: 10,
    backgroundColor: colorscheme.controlBackground,
  },
  text: {
    fontSize: 20,
    color: colorscheme.font
  }
});

export default ShowButton;