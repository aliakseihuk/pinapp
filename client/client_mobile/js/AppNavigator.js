'use strict';

import React, { Component } from 'react';
import {
  Text,
  Navigator,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import KeysControl from './components/KeysControl';
import NewKeyControl from './components/NewKeyControl';
import CheckKeyControl from './components/CheckKeyControl';
import colorscheme from '../data/colorscheme.json';

class AppNavigator extends Component {
  render() {
    return (
      <Navigator
        style={styles.navigator}
        ref="navigator"
        initialRoute={{ routeKey: 'keyscontrol' }}
        renderScene={this._renderScene}
        navigationBar={
          <Navigator.NavigationBar
            style={styles.navigatorBar}
            routeMapper={{
              LeftButton: (route, navigator, index, navState) => {
                if (index != 0)
                  return (
                    <TouchableHighlight style={styles.navigatorButton} onPress={() => navigator.pop()}>
                      <Icon name="ios-arrow-back" size={30} color={colorscheme.font} />
                    </TouchableHighlight>
                  );
              },
              RightButton: (route, navigator, index, navState) => {
                return null;
              },
              Title: (route, navigator, index, navState) => {
                let text = route.routeKey === 'checkkeycontrol' ? route.keyObject.name : 'PINAPP';
                return (<Text style={styles.navigatorTitle}>{text}</Text>);
              }
            }}
            />
        }
        />
    );
  }

  _renderScene(route, navigator) {
    if (route.routeKey === 'checkkeycontrol') {
      return <CheckKeyControl navigator={navigator} keyObject={route.keyObject} />
    } else if (route.routeKey === 'newkeycontrol') {
      return <NewKeyControl navigator={navigator} />
    }
    return <KeysControl navigator={navigator} />;
  }
};

const styles = StyleSheet.create({
  navigator: {
    backgroundColor: colorscheme.contentBackground,
  },
  navigatorBar: {
    backgroundColor: colorscheme.controlBackground,
  },
  navigatorButton: {
    margin: 15,
    marginTop: 7
  },
  navigatorTitle: {
    color: colorscheme.font,
    fontSize: 21,
    margin: 10,
  }
});

export default AppNavigator;

