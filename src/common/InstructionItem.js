import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../Constant/Colors';
const { width, height } = Dimensions.get('window')

class InstructionItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.item}>

                <Text style={styles.attentionText}>{this.props.text}</Text>
                <View style={styles.attention} >
                    <MaterialIcons name={this.props.icon} color={Colors.darkGreen} size={20} />
                </View>


            </View>
        );
    }
}



const styles = StyleSheet.create({




    attention: {
        width: 40, height: 40
        , borderWidth: 1
        , borderColor: Colors.darkGreen,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,

    },


    attentionText: {
        fontFamily: 'sans-plain',
        fontSize: 13,
        color: Colors.grey,
        textAlign: 'right',
        width: width - 180,
        marginTop: 20,
        marginRight: 15

    },

    item: {

        marginTop: 10,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'

    }
});


export default InstructionItem;
