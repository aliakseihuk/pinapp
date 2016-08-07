'use strict';

import React, { Component } from 'react';
import {
    Navigator
} from 'react-native';

import UserkeysControl from './components/UserkeysControl';
import AddUserkeyControl from './components/AddUserkeyControl';

export default class AppNavigator extends Component {
    render() {
        return (
            <Navigator
                ref="navigator"
                initialRoute={{routeKey: 'userkeyscontrol'}}
                renderScene={this._renderScene}
            />
        );
    }

    _renderScene(route, navigator)  {
        if(route.routeKey === 'adduserkeycontrol') {
            return <AddUserkeyControl navigator={navigator} />
        }
        return <UserkeysControl navigator={navigator} />;
    }
}

