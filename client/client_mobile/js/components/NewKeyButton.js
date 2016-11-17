'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import colorscheme from '../../data/colorscheme.json';

class NewKeyButton extends Component {
  render() {
    return (
      <View style={styles.addNewContainer}>
        <TouchableHighlight onPress={this.props.onPress}>
          <Icon name="md-add" size={30} color={colorscheme.font}/>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addNewContainer: {
    alignItems: 'flex-end',
    backgroundColor: colorscheme.controlBackground,
    padding: 10,
    paddingRight: 15
  }
});

export default NewKeyButton;