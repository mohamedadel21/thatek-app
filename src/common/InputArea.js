import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, TextInput, FlatList } from 'react-native';
import { MaterialIcons, Ionicons, EvilIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import Colors from '../Constant/Colors';
import { Input } from 'react-native-elements'
import { connect } from 'react-redux'
import { } from '../actions'
const { width, height } = Dimensions.get('window')
import KeyboardSpacer from 'react-native-keyboard-spacer';


class InputC extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    showError =()=>{

        if (this.props.error) {
            return(
                <View style={styles.errorBack}> 
                    <Text style={styles.errorText}>{this.props.error}</Text>
                </View>
            )
        }

    }

    render() {

        return (

            <View style={[styles.view,{ marginTop: this.props.marginTop,}]}>

                <Text style={styles.topText}>{this.props.topText}</Text>

                <View style={styles.mainView} >

                    <Input

                        value={this.props.value}
                        style={styles.pickerResultText}
                        autoCapitalize='none'
                        secureTextEntry={this.props.secureTextEntry}
                        onChangeText={this.props.onChangeText}
                        keyboardType={this.props.keyboardType}
                        multiline={true}
                        inputStyle={styles.inputStyle}
                        inputContainerStyle={styles.inputContainerStyle}

                    />

                </View>

                <Text style={styles.bottomText}>{this.props.bottomText}</Text>
                        {this.showError()}

            </View>
        );
    }
}


const styles = StyleSheet.create({
    view: {width: width - 40, },
    mainView: {
        width: width - 40,
        borderRadius: 30,
        height: 150,
        borderColor: Colors.lightGrey,
        borderWidth: 1,
        justifyContent: 'flex-start',
        alignItems: "center",

    },
    inputStyle:{
        borderColor:Colors.none,
        borderWidth:0,
        fontFamily:'sans-plain',
        fontSize:14,
        textAlign:'right',

    },
    inputContainerStyle:{
        borderColor: Colors.none,
        borderWidth: 0,
        marginRight:10
    },
    topText: {
        color: Colors.black,
        fontFamily: 'sans-plain',
        fontSize: 13,
        marginRight: 20,alignSelf:'flex-end'
    },
    bottomText: {
        color: Colors.grey,
        fontFamily: 'sans-plain',
        fontSize: 11,
        marginRight: 20,
        marginTop: 2
    },
    
    errorBack:{backgroundColor:Colors.white
        ,borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'flex-end',
        marginRight:20,
    },
    errorText:{
        color:'red'
        ,fontSize:11
        ,fontFamily:'sans-plain'}
});

export default InputC;
