'use strict';

import React, { Component } from 'react';
import {
    Text,
    Navigator,
    TouchableHighlight
} from 'react-native';

import KeysControl from './components/KeysControl';
import NewKeyControl from './components/NewKeyControl';
import CheckKeyControl from './components/CheckKeyControl';

export default class AppNavigator extends Component {
    render() {
        return (
            <Navigator
                ref="navigator"
                initialRoute={{ routeKey: 'keyscontrol' }}
                renderScene={this._renderScene}
                navigationBar={
                    <Navigator.NavigationBar
                        routeMapper={{
                            LeftButton: (route, navigator, index, navState) => {
                                if (index != 0)
                                    return (
                                        <TouchableHighlight onPress={() => navigator.pop()}>
                                            <Text>Back</Text>
                                        </TouchableHighlight>
                                    );
                            },
                            RightButton: (route, navigator, index, navState) => { 
                                return null;
                            },
                            Title: (route, navigator, index, navState) => { 
                                return (<Text>Pin App</Text>);
                            }
                        }}
                    />
                }
            />
        );
    }

    _renderScene(route, navigator) {
        if (route.routeKey === 'checkkeycontrol') {
            return <CheckKeyControl navigator={navigator} />
        } else if (route.routeKey === 'newkeycontrol') {
            return <NewKeyControl navigator={navigator} />
        }
        return <KeysControl navigator={navigator} />;
    }
};

