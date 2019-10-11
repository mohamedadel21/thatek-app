import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { MaterialIcons, Ionicons, EvilIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import Colors from '../Constant/Colors';
import Header from '../common/Header'
import { connect } from 'react-redux'
import { } from '../actions'
import InstructionItem from '../common/InstructionItem'
import CloseButton from '../common/CloseButton'
const { width, height } = Dimensions.get('window')
class Attention extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {

        return (
            <View style={styles.mainView}>

                <ScrollView
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start', alignItems: 'center' }} >

                    <CloseButton onPress={() => { this.props.navigation.goBack() }} marginTop={70}/>

                    <View style={styles.attentionView}>

                        <Text style={{ color: Colors.darkGreen, fontSize: 16, fontFamily: 'sans-bold' }}>هام</Text>

                        <InstructionItem text='اختر الإجابة الصحيحة التي تعبٌَر عنك، فإن لم تَجٍد، فاختر الأ قرب' icon='person' />
                        <InstructionItem text='دقة النتائج تعتمد علي دقة اخنيارك لإجاباتك التي تعبٌَر عنك' icon='gps-fixed' />
                        <InstructionItem text='حاول ان تُنهيَ الاختبار في جلسة واحدة' icon='access-alarms' />


                        <TouchableOpacity style={styles.next}

                            onPress={() => {
                                this.props.navigation.goBack();

                            }}
                        >

                            <Text style={styles.nextText}>استمرار</Text>

                        </TouchableOpacity>

                    </View>



                </ScrollView>

            </View>
        );
    }
}


const styles = StyleSheet.create({

    mainView: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: Colors.grey2
    },

    close: {
        width: 35, height: 35
        , borderWidth: 1
        , borderColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70,
        borderRadius: 50,

    },

    next: {
        backgroundColor: Colors.darkGreen
        , borderRadius: 40, width: 140, height: 45,
        alignSelf: 'center', marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
    , nextText: { color: Colors.white, fontSize: 13, fontFamily: 'sans-bold' }

    ,

    attentionView: {
        width: width - 40,
        height: 400,
        marginTop: 20,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15

    },

});

export default Attention;
