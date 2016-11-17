'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import KeyCard from './KeyCard';
import NewKeyButton from './NewKeyButton';

import {
  removeKey,
  toggleEditMode,
  clearCheck
} from '../actions';

class KeysControl extends Component {

  componentWillMount() {
    let routes = this.props.navigator.getCurrentRoutes();
    routes[routes.length - 1].onPressRightButton = (() => this.props.toggleEditMode()).bind(this);
  }

  render() {
    let keys = this.props.keys.map((key) => (
      <KeyCard 
        key={key._id}
        userkey={key}
        editMode={this.props.editMode}
        onPress={(() => this._onKeyPress(key)).bind(this)}
        onRemovePress={(() => this._onRemovePress(key)).bind(this)}
      />
    ));
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.keys}>
          {keys}
        </ScrollView>
        <NewKeyButton onPress={this._onAddNewPress.bind(this)} />
      </View>
    );
  }

  _onAddNewPress() {
    this.props.navigator.push({ routeKey: 'newkeycontrol' });
  }

  _onKeyPress(keyObject) {
    if (this.props.editMode) {
      this.props.navigator.push({ routeKey: 'editkeycontrol', keyObject: keyObject });
    } else {
      this.props.clearCheck();
      this.props.navigator.push({ routeKey: 'checkkeycontrol', keyObject: keyObject });
    }
  }

  _onRemovePress(keyObject) {
    this.props.removeKey(keyObject);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    marginTop: 75,
  },
  keys: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 20
  }
});

const stateToProps = (state) => {
  return {
    editMode: state.keys.editMode,
    keys: state.keys.elements
  }
};

const dispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeKey,
    toggleEditMode,
    clearCheck
  }, dispatch)
};

export default connect(stateToProps, dispatchToProps)(KeysControl);