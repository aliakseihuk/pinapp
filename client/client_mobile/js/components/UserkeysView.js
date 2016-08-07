'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { connect } from 'react-redux'

import Userkey from './Userkey';

class UserkeysView extends Component {
    render() {
        let keys = this.props.userkeys.map((userkey) => (
            <Userkey key={userkey.id} userkey={userkey}/>
        ));
        return (
            <View style={styles.container}>
                {keys}
            </View>
        );
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

export default connect(stateToProps)(UserkeysView);