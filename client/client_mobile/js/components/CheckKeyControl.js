'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
    checkPassword,
    changeCheckPassword
} from '../actions';

class CheckKeyControl extends Component {
    render() {
        return (
            <View style={styles.container}>
                
                <TextInput
                    style={styles.input}
                    value={this.props.password}
                    onChangeText={(password) => this.props.changeCheckPassword(password)}
                    placeholder='Password'
                    secureTextEntry={true}/>

                <Text>Is verified: {this.props.isVerified.toString()}</Text>

                <TouchableHighlight onPress={this._onCheckPress.bind(this)}>
                    <Text>
                        Check
                    </Text>
                </TouchableHighlight>       
            </View>
        );
    }

    _onCheckPress() {
        this.props.checkPassword(this.props.password, this.props.keyObject);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40, borderColor: 'gray', borderWidth: 1
    }
});

const stateToProps = (state) => {
    return {
        password: state.checkKey.password,
        isVerified: state.checkKey.isVerified
    }
};

const dispatchToProps = (dispatch) => {
    return bindActionCreators({
        checkPassword,
        changeCheckPassword,
    }, dispatch)
};

export default connect(stateToProps, dispatchToProps)(CheckKeyControl);