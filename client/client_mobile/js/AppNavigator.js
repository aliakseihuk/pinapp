'use strict';

import React, { Component } from 'react';
import {
  Text,
  Navigator,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

import KeysControl from './components/KeysControl';
import NewKeyControl from './components/NewKeyControl';
import CheckKeyControl from './components/CheckKeyControl';
import IconsControl from './components/IconsControl';
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
                    <TouchableHighlight onPress={() => navigator.pop() }>
                      <Text>Back</Text>
                    </TouchableHighlight>
                  );
              },
              RightButton: (route, navigator, index, navState) => {
                return null;
              },
              Title: (route, navigator, index, navState) => {
                return (<Text style={styles.navigatorTitle}>PINAPP</Text>);
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
    } else if (route.routeKey === 'iconscontrol') {
      return <IconsControl navigator={navigator} onIconSelect={route.onIconSelect} selectedIcon={route.selectedIcon} />
    }
    return <KeysControl navigator={navigator} />;
  }
};

const styles = StyleSheet.create({
  navigator: {
    backgroundColor: colorscheme.contentBackground,
  },
  navigatorBar: {
    backgroundColor: colorscheme.controlBackground
  },
  navigatorTitle: {
    color: colorscheme.font,
    fontSize: 21,
    paddingTop: 5
  }
});

export default AppNavigator;

