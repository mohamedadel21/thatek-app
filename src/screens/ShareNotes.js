import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { MaterialIcons, Ionicons, EvilIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import Colors from '../Constant/Colors';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Input from '../common/Input'
import InputArea from '../common/InputArea'
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


                <ScrollView
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start', alignItems: 'center' }} >




                    <InputArea
                        topText='نص الرسالة'
                        bottomText=''
                        marginTop={20}
                        error={this.state.messageTextError}
                        onChangeText={(messageText) => {
                            this.setState({ messageText })
                            if (this.state.messageText == null) {
                                this.setState({ messageTextError: null })
                            }
                        }}
                    />


                    <Button
                    text='ارسال'
                    style={styles.button}
                    backgroundColor={Colors.darkGreen}
                    borderRadius={40}
                    width={150}
                    height={50}
                    alignSelf='center'
                    color={Colors.white}
                    showIndicator={this.state.loading}
                    indicatorColor={Colors.white}
                    indicatorSize='small'
                    fontFamily='sans-bold'
                    marginTop={20}
                    marginBottom={25}
                    alignSelf='center'
                    onPress={() => {
                    }}
                    
                        onPress={() => {
                            const { messageText } = this.state;
                            if (!messageText) {
                                this.setState({ messageTextError: 'من فضلك ادخل نص الرسالة' })
                            } else {

                            }
                        }}
                    />
                    <View style={styles.callView}>

                        <View >
                            <Text style={styles.callText1}>للاستفسار و الطلبات تقدم بطلبها</Text>
                            <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                                <TouchableOpacity
                                    onPress={() => {
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
                <KeyboardSpacer />

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
  
    call: {
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
        height: 90,
        marginTop: 20,
        backgroundColor: Colors.lightBlack
        , flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    callText1: { fontFamily: 'sans-plain', fontSize: 13, color: Colors.white, textAlign: 'center' },
    callText2: { fontFamily: 'sans-plain', fontSize: 13, color: Colors.darkGreen, textAlign: 'center' },
    callText3: { fontFamily: 'sans-plain', marginLeft: 5, fontSize: 13, color: Colors.white, textAlign: 'center' }
   

   
});

const mapStateToProps = ({ newUser, }) => {
    return {

        accessToken: newUser.accessToken,


    }
};

export default connect(mapStateToProps, {})(ShareNotes)

