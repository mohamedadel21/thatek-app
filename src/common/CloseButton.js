import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../Constant/Colors';
const { width, height } = Dimensions.get('window')

class CloseButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <TouchableOpacity style={[styles.close,{ marginTop: this.props.marginTop}]} onPress={this.props.onPress} >
                <AntDesign name='close' color={Colors.white} size={18} />
            </TouchableOpacity>

        );
    }
}


const styles = StyleSheet.create({



    close: {
        width: 35, height: 35
        , borderWidth: 1
        , borderColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,

    },


});

export default CloseButton;
