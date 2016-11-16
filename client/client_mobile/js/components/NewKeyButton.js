'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import colorscheme from '../../data/colorscheme.json';

class NewKeyButton extends Component {
    render() {
        return (
            <View style={styles.addNewContainer}>
                <TouchableHighlight onPress={this.props.onPress}>
                    <Text>Add new key</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    addNewContainer: {
        alignItems: 'flex-end',
        backgroundColor: colorscheme.controlBackgroundColor,
        padding: 10
    }
});

export default NewKeyButton;