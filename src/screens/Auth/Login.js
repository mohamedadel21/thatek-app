import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { MaterialIcons, Ionicons, EvilIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import Toast, {DURATION} from 'react-native-easy-toast'
import { connect } from 'react-redux'
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Colors from '../../Constant/Colors';
import Input from '../../common/Input'
import Button from '../../common/Button'
import { validateEmail, validatePassword } from '../../Constant/Validation'
import { loginWithEmailAndPassword } from '../../actions'
const { width, height } = Dimensions.get('window')

class Login extends Component {

    constructor(props) {

        super(props);
        this.state = {

            email: null,
            password: null,

            emailError: null,
            passwordError: null,

            loading:false
        };

    }

    componentWillMount() {
    }

    componentWillReceiveProps(props) {

        if (props.login) {
            this.setState({ loading: false })
            this.props.navigation.navigate('MainTabs')
            console.log(props.login);

        }

        else if (props.error) {
            this.setState({ loading: false })
            console.log(props.error);
            this.refs.toast.show(props.error);

        }

    }



    render() {


        return (

            <View
                style={styles.view} >
                    
                 <Toast ref="toast"/>

                <Button
                    text='تسجيل الدخول عبر الفيسبوك             '
                    width={width - 40}
                    height={44}
                    backgroundColor={Colors.faceBook}
                    borderRadius={50}
                    fontFamily='sans-plain'
                    fontSize={12}
                    color={Colors.white}
                    marginTop={25}
                    margin={5}

                    rightIconName='sc-facebook'
                    rightIconColor={Colors.white}
                    rightIconSize={20}


                />



                <Button
                    text='تسجيل الدخول عبر جوجل             '
                    width={width - 40}
                    height={44}
                    backgroundColor={Colors.google}
                    borderRadius={50}
                    fontFamily='sans-plain'
                    fontSize={12}
                    color={Colors.white}
                    marginTop={10}
                    margin={5}

                    rightIconName='sc-google-plus'
                    rightIconColor={Colors.white}
                    rightIconSize={20}

                />

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>

                    <View style={styles.or}>

                    </View>
                    <Text style={styles.orText}>أو</Text>
                </View>

                <Input
                    topText='بريدك الالكتروني'
                    marginTop={25}
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
                    marginTop={15}
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
                <KeyboardSpacer />

                <TouchableOpacity
                    style={styles.notClear}
                    onPress={() => {
                        this.props.navigation.navigate('ForgotPassword')
                    }}
                >

                    <Text style={styles.notClearText}>هل نسيت كلمة المرور؟</Text>

                </TouchableOpacity>

                <Button
                    text='تسجيل الدخول'
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
                    onPress={() => {
                        const { email, password } = this.state;

                        if (!email) {
                            this.setState({ emailError: 'من فضلك ادخل بريدك الالكتروني' })
                        }
                        else if (validateEmail(email) == false) {
                            this.setState({ emailError: 'البريد الإلكتروني غير صحيح' })
                        }

                        else if (!password) {
                            this.setState({ passwordError: 'من فضلك ادخل كلمة المرور' })
                        }

                        else {
                            this.setState({ loading: true })
                            this.props.loginWithEmailAndPassword(email, password)
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
    view: { flex: 1, justifyContent: 'flex-start', alignItems: 'center' },
    mainView: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: Colors.white
    },
    button: {
        backgroundColor: Colors.darkGreen
        , borderRadius: 40, width: 200, height: 50,
        alignSelf: 'center', marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: { color: Colors.white, fontSize: 13, fontFamily: 'sans-bold' },
    notClear: {
        alignSelf: 'flex-end',
        textAlign: 'right',
        marginRight: 20,
    },
    notClearText: {
        fontFamily: 'sans-plain',
        fontSize: 11,
        color: Colors.darkGreen
        , width: width - 80,
        textAlign: 'right',
    },
    or: { borderBottomColor: Colors.lightGrey, borderBottomWidth: 1, position: 'absolute', top: 20, width: width - 40 }
    , orText: {
        borderRadius: 50,
        borderWidth: 1,
        borderColor: Colors.lightGrey,
        backgroundColor: Colors.white,
        fontFamily: 'sans-plain',
        fontSize: 13,
        color: Colors.lightGrey,
        width: 40,
        height: 40,
        textAlign: 'center',
        alignSelf: 'center',
        paddingTop: 9
    }
});

const mapStateToProps = ({ newUser, auth }) => {
    return {

        accessToken: newUser.accessToken,
        login: auth.login,
        error: auth.errorLogin

    }
};

export default connect(mapStateToProps, { loginWithEmailAndPassword })(Login)
