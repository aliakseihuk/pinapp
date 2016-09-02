'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import KeyIcon from './KeyIcon';

class KeyCard extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={styles.keyContainer}>
                    <KeyIcon iconId={this.props.userkey.icon} size={50}/>
                    <Text style={styles.keyName}>
                        {this.props.userkey.name}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    keyContainer: {
        flexDirection: 'row',
        borderColor: '#00B4CC',
        borderBottomWidth: 1,
        padding: 10,
    },
    keyName: {
        marginLeft: 15,
        fontSize: 37.93,
        color: '#005F6B'
    }
});

export default KeyCard;