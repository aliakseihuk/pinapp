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
            return <CheckKeyControl navigator={navigator} keyObject={route.keyObject}/>
        } else if (route.routeKey === 'newkeycontrol') {
            return <NewKeyControl navigator={navigator} />
        }
        return <KeysControl navigator={navigator} />;
    }
};

const styles = StyleSheet.create({
    navigator: {
        backgroundColor: '#00DFFC',
    },
    navigatorBar: {
        borderBottomWidth: 1,
        borderColor: '#00B4CC'
    }
});

export default AppNavigator;

