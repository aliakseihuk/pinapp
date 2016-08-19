'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput
} from 'react-native';

class KeyTextInput extends Component {
    render() {

        let keyboardType = 'default';
        let placeholder = this.props.placeholder;
        let autoFocus = this.props.autoFocus || false;
        let isPassword = this.props.isPassword || false;

        if(isPassword)
        {   
            if(this.props.isNumeric)
            {
                keyboardType = 'numeric';
                if(!placeholder)
                    placeholder = 'pin';
            }
            if(!placeholder)
                placeholder = 'password';
        }
        
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={this.props.value}
                    onChangeText={this.props.onChangeText}
                    placeholder={placeholder}
                    autoFocus={autoFocus}
                    secureTextEntry={isPassword && !this.props.showSymbols}
                    keyboardType={keyboardType}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        borderColor: '#00B4CC',
        borderBottomWidth: 1
    },
    input: {
        height: 30, 
    }
});

export default KeyTextInput;