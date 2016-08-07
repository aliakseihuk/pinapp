'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

class UserkeyCard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    {this.props.userkey.name}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        
    },
    text: {

    }
});

export default UserkeyCard;