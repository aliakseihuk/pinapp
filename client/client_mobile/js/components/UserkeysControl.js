'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux'

import UserkeyCard from './UserkeyCard';

class UserkeysControl extends Component {
    render() {
        let keys = this.props.userkeys.map((userkey) => (
            <UserkeyCard key={userkey.id} userkey={userkey}/>
        ));
        return (
            <View style={styles.container}>
                {keys}
                <TouchableHighlight onPress={this._onAddNewPress.bind(this)}>
                    <Text>Add new userkey</Text>
                </TouchableHighlight>
            </View>
        );
    }

    _onAddNewPress() {
        this.props.navigator.push({routeKey: 'adduserkeycontrol'});
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

const stateToProps = (state) => {
    return {
        userkeys: state.userkeys
    }
};

export default connect(stateToProps)(UserkeysControl);