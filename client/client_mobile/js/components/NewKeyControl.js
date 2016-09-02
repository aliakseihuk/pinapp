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
import Icons from '../../data/icons.json'

import {
    changeNewName,
    changeNewPassword,
    changeNewIcon,
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
                    <KeyIcon name={Icons[this.props.icon].name} size={50} onPress={this._openIconsControl.bind(this)} />
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
        this.props.addKey(Date.now(), this.props.name, this.props.password, this.props.isNumerical, 0);
        this.props.clearNew();
        this.props.navigator.pop({});
    }

    _openIconsControl() {
        this.props.navigator.push({routeKey: 'iconscontrol', onIconSelect: this._onIconSelect.bind(this), selectedIcon: this.props.icon});
    }

    _onIconSelect(icon) {
        this.props.changeNewIcon(icon);
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
        icon: state.newKey.icon
    }
};

const dispatchToProps = (dispatch) => {
    return bindActionCreators({
        changeNewName,
        changeNewPassword,
        changeNewIcon,
        switchShowSymbols,
        switchIsNumerical,
        clearNew,
        addKey
    }, dispatch)
};

export default connect(stateToProps, dispatchToProps)(NewKeyControl);