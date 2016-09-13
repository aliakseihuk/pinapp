'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import icons from '../../data/icons.json';
import colorscheme from '../../data/colorscheme.json';

class KeyIcon extends Component {
    render() {
        let sizeStyle = {
            height: this.props.size,
            width: this.props.size,
            borderRadius: this.props.size / 2,
            paddingTop: this.props.size / 20,
        }

        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={[styles.container, sizeStyle]}>
                    <Icon name={icons[this.props.iconId].name} size={this.props.size / 1.5} color={colorscheme.color}/>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colorscheme.borderColor,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default KeyIcon;