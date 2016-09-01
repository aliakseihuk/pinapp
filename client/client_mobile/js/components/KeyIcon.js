'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

class KeyIcon extends Component {
    render() {
        let sizeStyle = {
            height: this.props.size,
            width: this.props.size,
            borderRadius: this.props.size / 2,
            paddingTop: this.props.size / 20,
        }

        console.log(styles);
        return (
            <View style={[styles.container, sizeStyle]}>
                <Icon name={this.props.name} size={this.props.size / 1.5} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default KeyIcon;