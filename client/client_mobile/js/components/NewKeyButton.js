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
                <TouchableHighlight style={styles.addNew} onPress={this.props.onPress}>
                    <Text>Add new key</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    addNewContainer: {
        alignItems: 'flex-end',
        borderTopWidth: 1,
        borderColor: colorscheme.borderColor,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    addNew: {
        
    }
});

export default NewKeyButton;