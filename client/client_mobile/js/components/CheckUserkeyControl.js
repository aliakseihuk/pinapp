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
import { bindActionCreators } from 'redux'

// import {
// } from '../actions';

class CheckUserkeyControl extends Component {
    render() {
        return (
            <View style={styles.container}>
                
                <TextInput
                    style={styles.input}
                    value={this.props.name}
                    onChangeText={(value) => this.props.changeName(value)}
                    placeholder='Userkey name'/>

                <TouchableHighlight onPress={this._onAddPress}>
                    <Text>
                        Check
                    </Text>
                </TouchableHighlight>       
            </View>
        );
    }

    _onCheckPress() {

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

// const stateToProps = (state) => {
//     return {
//     }
// };

// const dispatchToProps = (dispatch) => {
//     return bindActionCreators({
//     }, dispatch)
// };

//export default connect(stateToProps, dispatchToProps)(CheckUserkeyControl);
export default CheckUserkeyControl;