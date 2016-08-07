'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux'

class AddUserkeyControl extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    Add new userkey control
                </Text>
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

export default connect(stateToProps)(AddUserkeyControl);