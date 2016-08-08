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
            <TouchableHighlight onPress={this.props.onPress}>
                <Text style={styles.text}>
                    {this.props.userkey.name}
                </Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        
    },
    text: {

    }
});

export default KeyCard;