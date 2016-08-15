'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';

class KeyCard extends Component {
    render() {
        return (
            <TouchableHighlight style={styles.keyContainer} onPress={this.props.onPress}>
                <Text style={styles.keyName}>
                    {this.props.userkey.name}
                </Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    keyContainer: {
        borderColor: '#00B4CC',
        borderBottomWidth: 1,
    },
    keyName: {
        fontSize: 37.93,
        margin: 10,
        color: '#005F6B'
    }
});

export default KeyCard;