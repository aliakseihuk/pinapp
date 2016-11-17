'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import KeyIcon from './KeyIcon';
import colorscheme from '../../data/colorscheme.json';

class KeyCard extends Component {
  render() {
    let removeButton = undefined;
    if (this.props.editMode) {
      removeButton =  (
        <TouchableOpacity onPress={this.props.onRemovePress}>
          <Icon name="md-close" size={20} color={colorscheme.font}/>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.keyContainer}>
          <KeyIcon name={this.props.userkey.name} onPress={this.props.onPress}/>
          <View style={styles.nameContainer}>
            <Text style={styles.keyName}>
              {this.props.userkey.name}
            </Text>
            { removeButton }
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  keyContainer: {
    flexDirection: 'row',
    padding: 5,
    paddingRight: 0,
  },
  nameContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 15,
    paddingLeft: 15,
    paddingRight: 10,
    borderBottomWidth: 1,
    borderColor: colorscheme.border,
  },
  keyName: {
    fontSize: 20,
    color: colorscheme.font
  }
});

export default KeyCard;