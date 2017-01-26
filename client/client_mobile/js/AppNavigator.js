'use strict';

import React, { Component } from 'react';
import {
  Text,
  Navigator,
  TouchableHighlight,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import KeysListControl from './components/KeysListControl';
import EditKeyControl from './components/EditKeyControl';
import CheckKeyControl from './components/CheckKeyControl';
import colorscheme from '../data/colorscheme.json';

class AppNavigator extends Component {
  constructor(props) {
    super(props)
    this._renderScene = this._renderScene.bind(this);
  }

  render() {
    return (
      <Navigator
        style={styles.navigator}
        ref="navigator"
        initialRoute={{ routeKey: 'keyslistcontrol' }}
        renderScene={this._renderScene}
        navigationBar={
          <Navigator.NavigationBar
            style={styles.navigatorBar}
            routeMapper={{
              LeftButton: (route, navigator, index, navState) => {
                if (index != 0)
                  return (
                    <TouchableHighlight style={styles.navigatorButton} onPress={() => navigator.pop() }>
                      <Icon name="ios-arrow-back" size={30} color={colorscheme.font} />
                    </TouchableHighlight>

                  );
              },
              RightButton: (route, navigator, index, navState) => {
                return this._getRightButton(route);
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
    } else if (route.routeKey === 'addkeycontrol') {
      return <EditKeyControl navigator={navigator} />
    } else if (route.routeKey === 'editkeycontrol') {
      return <EditKeyControl navigator={navigator} keyObject={route.keyObject}/>
    }
    return <KeysListControl navigator={navigator} />;
  }

  _getRightButton(route) {
    let icon = undefined;
    switch (route.routeKey) {
      case 'keyslistcontrol':
        icon = 'ios-create-outline';
        break;
      case 'addkeycontrol':
      case 'editkeycontrol':
        icon = 'md-checkmark';
        break;
      default:
        break;
    }
    if (icon)
      return (
        <TouchableHighlight style={styles.navigatorButton} onPress={route.onPressRightButton}>
          <Icon name={icon} size={30} color={colorscheme.font} />
        </TouchableHighlight>
      );
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

