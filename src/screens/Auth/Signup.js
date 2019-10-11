import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { MaterialIcons, Ionicons, EvilIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import Toast, {DURATION} from 'react-native-easy-toast'
import Colors from '../../Constant/Colors';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Input from '../../common/Input'
import Button from '../../common/Button'
import {validateEmail,validatePassword} from '../../Constant/Validation'
import { connect } from 'react-redux'
import { createNewAccount } from '../../actions'
const { width, height } = Dimensions.get('window')

class Auth extends Component {

    constructor(props) {

        super(props);
        this.state = {
            loading:false ,

            email: null,
            password: null,
            confirmPassword: null,

            emailError: null,
            passwordError: null,
            confirmPasswordError: null,

        };

    }

    componentWillMount() {
    }

    componentWillReceiveProps(props) {

        if (props.signup) {
            console.log(props.signup);
            this.setState({loading:false})
            this.props.navigation.navigate('MainTabs')

        }
        else if (props.error) {
            this.setState({loading:false})
            console.log(props.error);
            this.refs.toast.show(props.error);

        }

    }


    render() {

        return (
            <View style={styles.mainView}>
                 <Toast ref="toast"/>


                <Input
                    topText='بريدك الالكتروني'
                    bottomText='ستسجل به لاحقا, سيرسل اليه الاشعارات و التنبيهات الهامة'
                    marginTop={15}
                    keyboardType='email-address'
                    error={this.state.emailError}
                    width= {width - 40}
                    onChangeText={email => {

                        this.setState({ email })
                        if (this.state.email == null) {
                            this.setState({ emailError: null })
                        }
                    }}
                />

                <Input
                    topText='كلمة المرور'
                    bottomText='يجب أن تكون كلمة المرور قوية ولا تقل عن 8 خانات'
                    marginTop={20}
                    secureTextEntry={true}
                    error={this.state.passwordError}
                    width= {width - 40}
                    onChangeText={(password) => {
                        this.setState({ password })
                        if (this.state.password == null) {
                            this.setState({ passwordError: null })
                        }
                    }}
                />


                <Input
                    topText='تأكيد كلمة المرور'
                    bottomText=''
                    marginTop={20}
                    secureTextEntry={true}
                    error={this.state.confirmPasswordError}
                    onChangeText={(confirmPassword) => {
                        this.setState({ confirmPassword })
                        if (this.state.confirmPassword == null) {
                            this.setState({ confirmPasswordError: null })
                        }
                    }}
                />

                <View style={styles.viewTexts}>

                    <Text style={styles.callText1}>بالضغط على "تسجيل حساب جديد" فأنت توافق على</Text>

                    <View style={{ flexDirection: 'row', }}>
                        <TouchableOpacity>
                            <Text style={styles.callText2}>الشروط و الأحكام </Text>
                        </TouchableOpacity>
                        <Text style={styles.callText3}> سياسة الخصوصية و</Text>

                    </View>

                </View>

               <Button
                    text='تسجيل حساب جديد'
                    style={styles.button}
                    backgroundColor={Colors.darkGreen}
                    borderRadius={40}
                    width={200}
                    height={50}
                    alignSelf='center'
                    color={Colors.white}
                    showIndicator={this.state.loading}
                    indicatorColor={Colors.white}
                    indicatorSize='small'
                    fontFamily='sans-bold'
                    marginTop={25}
                    alignSelf='center'
                    onPress={() => {

                        const { email, password, confirmPassword } = this.state;


                        if (!email) {
                            this.setState({ emailError: 'من فضلك ادخل بريدك الالكتروني' })
                        }
                        else if (validateEmail(email) == false) {
                            this.setState({ emailError: 'البريد الإلكتروني غير صحيح' })
                        }

                        else if (!password) {
                            this.setState({ passwordError: 'من فضلك ادخل كلمة المرور' })
                        }
                        else if (String(password).length <= 7) {
                            this.setState({ passwordError: 'كلمة المرور يجب ألا تقل عن 8 خانات' })
                        }
                        else if (validatePassword(password) == false) {
                            this.setState({ passwordError: 'كلمة المرور غير صحيحة' })
                        }
                        else if (!confirmPassword) {
                            this.setState({ confirmPasswordError: 'يجب أن يتوافق مع كلمة المرور' })
                        }
                        else if (confirmPassword != password) {
                            this.setState({ confirmPasswordError: 'يجب أن يتوافق مع كلمة المرور' })
                        } else {
                            this.setState({loading:true})
                            this.props.createNewAccount(email, password)
                        }

                        if (validateEmail(email) == true) {
                            this.setState({ emailError: null })
                        }

                    }}
                />


                <KeyboardSpacer />


            </View>
        )


    }


}



const styles = StyleSheet.create({
    buttonText: { color: Colors.white, fontSize: 13, fontFamily: 'sans-bold' },
    button: {
        backgroundColor: Colors.darkGreen
        , borderRadius: 40, width: 200, height: 50,
        alignSelf: 'center', marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    callText1: { fontFamily: 'sans-plain', fontSize: 13, color: Colors.black, textAlign: 'center' },
    callText2: { fontFamily: 'sans-plain', fontSize: 13, color: Colors.darkGreen, textAlign: 'center' },
    callText3: { fontFamily: 'sans-plain', fontSize: 13, color: Colors.black, textAlign: 'center' }
    , notClear: {
        alignSelf: 'flex-end',
        textAlign: 'right',
        marginRight: 20,
    },
    notClearText: {
        fontFamily: 'sans-plain',
        fontSize: 11,
        color: Colors.google
        , width: width - 80,
        textAlign: 'right',
    },
    viewTexts: { marginTop: 20, justifyContent: 'flex-start', alignItems: 'flex-end', alignSelf: 'center' }

});

const mapStateToProps = ({ newUser, auth }) => {
    return {

        accessToken: newUser.accessToken,
        signup: auth.signup,
        error: auth.error,


    }
};

export default connect(mapStateToProps, { createNewAccount })(Auth)
