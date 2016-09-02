'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput
} from 'react-native';

import KeyIcon from './KeyIcon';
import Icons from '../../data/icons.json';

class IconsControl extends Component {
    constructor(props) {
        super(props);
        this.columnCount = 4;
    }

    render() {
        let uirows = [];
        let uirow = [];
        let column = 0;
        let count = 0;
        for(let icon of Icons) {
            uirow.push(
                <KeyIcon iconId={icon.id} size={65} onPress={() => { this.props.onIconSelect(icon.id)}}/>
            );
            ++column;
            ++count;
            if(column === this.columnCount || count === Icons.length) {
                uirows.push(
                <View style={styles.rowContainer}>
                    {uirow}
                </View>);
                uirow = [];
                column = 0;
            }
        }

        return (
            <View style={styles.container}>
                {uirows}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-around',
    },
    rowContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
    }
});

export default IconsControl;