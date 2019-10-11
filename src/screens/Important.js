import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { MaterialIcons, Ionicons, EvilIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import Colors from '../Constant/Colors';
import Header from '../common/Header'
import { connect } from 'react-redux'
import { } from '../actions'
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
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }} >


                    <View style={styles.attention} >
                        <EvilIcons name='bell' color={Colors.orange} size={33} />
                    </View>

                    <Text style={styles.attentionText}>
                        الأسئلة التالية تتطلب منك الصراحة مع نفسك، لأن عدم الصراحة في الإحابة سيجعل نتيجتك غير دقيقة !
                        </Text>

                    <TouchableOpacity style={styles.next}

                        onPress={() => {
                            this.props.navigation.navigate('Questions');

                        }}
                    >

                        <Text style={styles.nextText}>افهم ذلك</Text>

                    </TouchableOpacity>






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
        backgroundColor: Colors.white
    },

    attention: {
        width: 75, height: 75
        , borderWidth: 1
        , borderColor: Colors.orange,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,

    },
    next: {
        backgroundColor: Colors.darkGreen
        , borderRadius: 40, width: 150, height: 45,
        alignSelf: 'center', marginTop: height / 3.5,
        justifyContent: 'center',
        alignItems: 'center'
    }
    , nextText: { color: Colors.white, fontSize: 14, fontFamily: 'sans-plain' }
    ,
    attentionText: {
        fontFamily: 'sans-plain',
        fontSize: 15,
        color: Colors.black,
        textAlign: 'center',
        width: width / 1.4,
        marginTop: 20
    },

    attentionView: {
        width: width - 40,
        height: 300,
        marginTop: 20,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Attention;
