'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';

import KeyCard from './KeyCard';

class KeysControl extends Component {
    render() {
        let keys = this.props.keys.map((key) => (
            <KeyCard key={key.id} userkey={key} onPress={(() => this._onKeyPress(key)).bind(this)}/>
        ));
        return (
            <View style={styles.container}>
                {keys}
                <TouchableHighlight onPress={this._onAddNewPress.bind(this)}>
                    <Text>Add new key</Text>
                </TouchableHighlight>
            </View>
        );
    }

    _onAddNewPress() {
        this.props.navigator.push({routeKey: 'newkeycontrol'});
    }

    _onKeyPress(keyObject) {
        this.props.navigator.push({routeKey: 'checkkeycontrol', keyObject: keyObject});
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

const stateToProps = (state) => {
    return {
        keys: state.keys
    }
};

export default connect(stateToProps)(KeysControl);