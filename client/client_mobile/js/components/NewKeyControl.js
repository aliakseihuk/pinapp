'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Switch
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import NewKeyButton from './NewKeyButton';
import KeyTextInput from './KeyTextInput';
import KeyIcon from './KeyIcon';

import {
    changeNewName,
    changeNewPassword,
    switchShowSymbols,
    switchIsNumerical,
    clearNew,
    addKey
} from '../actions';

class NewKeyControl extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <KeyIcon iconId={this.props.icon} size={50}/>
                    <KeyTextInput
                        value={this.props.name}
                        onChangeText={(name) => this.props.changeNewName(name)}
                        placeholder='name'
                    />
                    <KeyTextInput
                        value={this.props.password}
                        onChangeText={(password) => this.props.changeNewPassword(password)}
                        isPassword={true}
                        isNumeric = {this.props.isNumerical}
                        showSymbols={this.props.showSymbols}
                    />
                    <Text>Show symbols</Text>
                    <Switch
                        onValueChange={() => this.props.switchShowSymbols()}
                        value={this.props.showSymbols} />
                    <Text>Is numerical</Text>
                    <Switch
                        onValueChange={() => this.props.switchIsNumerical()}
                        value={this.props.isNumerical} />       
                </View>
                <NewKeyButton onPress={this._onAddNewPress.bind(this)} /> 
            </View>
        );
    }

    _onAddNewPress() {
        this.props.addKey(Date.now(), this.props.name, this.props.password, this.props.isNumerical);
        this.props.clearNew();
        this.props.navigator.pop({});
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'stretch',
        marginTop: 65,
    },
    input: {
        height: 40, borderColor: 'gray', borderWidth: 1
    }
});

const stateToProps = (state) => {
    return {
        name: state.newKey.name,
        password: state.newKey.password,
        showSymbols: state.newKey.showSymbols,
        isNumerical: state.newKey.isNumerical,
    }
};

const dispatchToProps = (dispatch) => {
    return bindActionCreators({
        changeNewName,
        changeNewPassword,
        switchShowSymbols,
        switchIsNumerical,
        clearNew,
        addKey
    }, dispatch)
};

export default connect(stateToProps, dispatchToProps)(NewKeyControl);