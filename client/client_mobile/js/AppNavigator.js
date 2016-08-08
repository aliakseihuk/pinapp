'use strict';

import React, { Component } from 'react';
import {
    Text,
    Navigator,
    TouchableHighlight
} from 'react-native';

import UserkeysControl from './components/UserkeysControl';
import AddUserkeyControl from './components/AddUserkeyControl';
import CheckUserkeyControl from './components/CheckUserkeyControl';

export default class AppNavigator extends Component {
    render() {
        return (
            <Navigator
                ref="navigator"
                initialRoute={{ routeKey: 'userkeyscontrol' }}
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
        if (route.routeKey === 'checkuserkeycontrol') {
            return <CheckUserkeyControl navigator={navigator} />
        } else if (route.routeKey === 'adduserkeycontrol') {
            return <AddUserkeyControl navigator={navigator} />
        }
        return <UserkeysControl navigator={navigator} />;
    }
};

