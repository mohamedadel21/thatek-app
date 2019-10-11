import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { MaterialIcons, Ionicons, EvilIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import Colors from '../Constant/Colors';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Input from '../common/Input'
import TestCard from '../common/TestCard'
import Button from '../common/Button'
import { connect } from 'react-redux'
import { QuizResult } from '../actions'
const { width, height } = Dimensions.get('window')


class ShareNotes extends Component {

    constructor(props) {

        super(props);
        this.state = {

            message: '',



        };

    }

    componentWillMount() {
    }

    componentWillReceiveProps(props) {


    }





    render() {


        return (
            <View style={styles.mainView}>

                <Text style={styles.text1}>

                   اختباراتك

                </Text>

                <Text style={styles.text2}>

                   الاختبارات الي اديتها و نتائجها

                </Text>

                <TestCard type='العرض الشامل' date='3-2-2020 - استغرق ٣٤ دقيقة' weakness='2' power='4' improve='1' />



            </View>
        );
    }
}


const styles = StyleSheet.create({

    mainView: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: Colors.white
    },
    button: {
        backgroundColor: Colors.darkGreen
        , borderRadius: 40, width: 150, height: 50,
        alignSelf: 'center', marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },

  text1: {
    fontFamily: 'sans-bold',
    fontSize: 16,
    color: Colors.black
    , width: width - 80,
    alignSelf: 'flex-end',
    textAlign: 'right',
    marginRight: 20,
    marginTop: 20
  },
  text2: {
    fontFamily: 'sans-plain',
    fontSize: 12,
    color: Colors.darkGrey
    , width: width - 70,
    alignSelf: 'flex-end',
    textAlign: 'right',
    marginRight: 20,
    marginTop: 5,
    marginBottom: 30
  }

});

const mapStateToProps = ({ newUser, }) => {
    return {

        accessToken: newUser.accessToken,


    }
};

export default connect(mapStateToProps, {})(ShareNotes)

