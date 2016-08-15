'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import KeyCard from './KeyCard';
import { clearCheck } from '../actions';

class KeysControl extends Component {
    render() {
        let keys = this.props.keys.map((key) => (
            <KeyCard key={key.id} userkey={key} onPress={(() => this._onKeyPress(key)).bind(this)}/>
        ));
        return (
            <View style={styles.container}>
                <View style={styles.keys}>
                    {keys}
                </View>
                <View style={styles.addNewContainer}>
                    <TouchableHighlight style={styles.addNew} onPress={this._onAddNewPress.bind(this)}>
                        <Text>Add new key</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }

    _onAddNewPress() {
        this.props.navigator.push({routeKey: 'newkeycontrol'});
    }

    _onKeyPress(keyObject) {
        this.props.clearCheck();
        this.props.navigator.push({routeKey: 'checkkeycontrol', keyObject: keyObject});
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'stretch',
        marginTop: 65,
    },
    keys: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    addNewContainer: {
        alignItems: 'flex-end',
        borderTopWidth: 1,
        borderColor: '#00B4CC',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    addNew: {
        
    }
});

const stateToProps = (state) => {
    return {
        keys: state.keys
    }
};

const dispatchToProps = (dispatch) => {
    return bindActionCreators({
        clearCheck
    }, dispatch)
};

export default connect(stateToProps, dispatchToProps)(KeysControl);