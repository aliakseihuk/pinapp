'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import KeyTextInput from './KeyTextInput';

import {
    changeCheckPassword
} from '../actions';

class CheckKeyControl extends Component {
    render() {
        return (
            <View style={styles.container}>
                <KeyTextInput
                    value={this.props.password}
                    onChangeText={(password) => this.props.changeCheckPassword(password, this.props.keyObject)}
                    isPassword={true}
                    isNumeric = {this.props.keyObject.isNumerical}
                    autoFocus={true}
                    isValid={this.props.isVerified}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 90,
        padding: 20
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
        changeCheckPassword
    }, dispatch)
};

export default connect(stateToProps, dispatchToProps)(CheckKeyControl);