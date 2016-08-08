'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TextInput,
    Switch
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import {
    changeName,
    changePassword,
    switchShowSymbols,
    switchIsNumerical,
    clearFields,
    addUserkey
} from '../actions';

class AddUserkeyControl extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight>
                    <Text>
                        Icon
                    </Text>
                </TouchableHighlight>
                <TextInput
                    style={styles.input}
                    value={this.props.name}
                    onChangeText={(value) => this.props.changeName(value)}
                    placeholder='Userkey name'/>
                <TextInput
                    style={styles.input}
                    placeholder='Userkey password'
                    onChangeText={(value) => this.props.changePassword(value)}
                    secureTextEntry={!this.props.showSymbols}/>
                <Text>Show symbols</Text>
                <Switch
                    onValueChange={() => this.props.switchShowSymbols()}
                    value={this.props.showSymbols} />
                <Text>Is numerical</Text>
                <Switch
                    onValueChange={() => this.props.switchIsNumerical()}
                    value={this.props.isNumerical} />

                <TouchableHighlight onPress={this._onAddPress.bind(this)}>
                    <Text>
                        Add new userkey
                    </Text>
                </TouchableHighlight>       
            </View>
        );
    }

    _onAddPress() {
        this.props.addUserkey(Math.random()*10000, this.props.name, this.props.password, this.props.isNumerical, 0);
        this.props.clearFields();
        this.props.navigator.pop({});
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    input: {
        height: 40, borderColor: 'gray', borderWidth: 1
    }
});

const stateToProps = (state) => {
    return {
        name: state.newUserkey.name,
        password: state.newUserkey.password,
        showSymbols: state.newUserkey.showSymbols,
        isNumerical: state.newUserkey.isNumerical,
    }
};

const dispatchToProps = (dispatch) => {
    return bindActionCreators({
        changeName,
        changePassword,
        switchShowSymbols,
        switchIsNumerical,
        clearFields,
        addUserkey
    }, dispatch)
};

export default connect(stateToProps, dispatchToProps)(AddUserkeyControl);