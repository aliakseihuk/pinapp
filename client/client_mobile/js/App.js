import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import AppNavigator from './AppNavigator';

var Auth0Lock = require('react-native-lock');
var lock = new Auth0Lock(
  {
    clientId: 'W1GWVC1st7Uv4H59kXhyz0RfjbN4xlfp',
    domain: 'aliakseihuk.eu.auth0.com',
  });

lock.show({
  closable: false,
}, (err, profile, token) => {
  if (err) {
    console.log(err);
    return;
  }
  // Authentication worked!
  console.log('Logged in with Auth0!');
});

class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

export default App;