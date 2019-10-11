import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { MaterialIcons, Ionicons, EvilIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import Colors from '../Constant/Colors';
import CloseButton from '../common/CloseButton'
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
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start', alignItems: 'center' }} >

                    <CloseButton onPress={() => { this.props.navigation.goBack() }}marginTop={70} />


                    <View style={styles.attentionView}>

                        <View style={styles.attention} >
                            <EvilIcons name='bell' color={Colors.orange} size={26} />
                        </View>

                        <Text style={styles.attentionText}>
                            نأسف لا يتوفر لدينا محتوي يتناسب مع معتقداتك الدينية حاليا، في حالة اخترت افهم ذلك و ارغب في الاستمرار فانك توافق علي محتوى لا بتناسب مع معتقداتك الدينية
                        </Text>

                        <TouchableOpacity style={styles.next}

                            onPress={() => {
                                this.props.navigation.navigate('Important');

                            }}
                        >

                            <Text style={styles.nextText}>ارغب بالمتابعة</Text>

                        </TouchableOpacity>

                    </View>


                    <View style={styles.callView}>

                        <View >
                            <Text style={styles.callText1}>للاستفسار و الطلبات تقدم بطلبها</Text>
                            <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                                <TouchableOpacity 
                                onPress={()=>{
                                    this.props.navigation.navigate('ContactUs');
                                }}>
                                    <Text style={styles.callText2}>الاتصال بنا</Text>
                                </TouchableOpacity>
                                <Text style={styles.callText3}>من خلال</Text>

                            </View>
                        </View>
                        <View style={styles.call} >
                            <EvilIcons name='envelope' color={Colors.white} size={26} />
                        </View>
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

    attention: {
        width: 55, height: 55
        , borderWidth: 1
        , borderColor: Colors.orange,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,

    },
    next: {
        backgroundColor: Colors.orange
        , borderRadius: 40, width: 140, height: 45,
        alignSelf: 'center', marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
    , nextText: { color: Colors.white, fontSize: 13, fontFamily: 'sans-plain' }
    , call: {
        width: 47, height: 47
        , borderWidth: 1
        , borderColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        marginLeft: 20
    },
    callView: {
        width: width - 40,
        height: 80,
        marginTop: 20,
        backgroundColor: Colors.lightBlack
        , flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    callText1: { fontFamily: 'sans-plain', fontSize: 13, color: Colors.white, textAlign: 'center' },
    callText2: { fontFamily: 'sans-plain', fontSize: 13, color: Colors.darkGreen, textAlign: 'center' },
    callText3: { fontFamily: 'sans-plain', marginLeft: 5, fontSize: 13, color: Colors.white, textAlign: 'center' }
    ,
    attentionText: {
        fontFamily: 'sans-plain',
        fontSize: 13,
        color: Colors.grey,
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
