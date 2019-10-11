import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { MaterialIcons, Ionicons, EvilIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import Colors from '../Constant/Colors';
import Header from '../common/Header'
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Input from '../common/Input'
import Button from '../common/Button'
import { connect } from 'react-redux'
import { QuizResult } from '../actions'
import {validateEmail,validatePassword} from '../Constant/Validation'
const { width, height } = Dimensions.get('window')

class Auth extends Component {

    constructor(props) {

        super(props);
        this.state = {

            message:''
           ,
           email: null,
           oldPassword: null,
           newPassword: null,
           confirmNewPassword: null,
           
           emailError: null,
           oldPasswordError: null,
           newPasswordError: null,
           confirmNewPasswordError: null,


        };

    }

    componentWillMount() {
    }

    componentWillReceiveProps(props) {


    }

    
    validateEmail = (email) => {

        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    render() {


        return (
            <View style={styles.mainView}>

                <ScrollView
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start', alignItems: 'center' }} >

                    <Input
                        topText='البريد الالكتروني'
                        marginTop={15}
                        keyboardType='email-address'
                        error={this.state.emailError}
                        width= {width - 40}
                        onChangeText={email=>{
                            
                            this.setState({email})
                            if(this.state.email==null){
                                this.setState({emailError:null})
                            }
                        }}
                    />

                    <Input
                        topText='كلمة المرور الحالية'
                        marginTop={15}
                        secureTextEntry={true}
                        error={this.state.oldPasswordError}
                        width= {width - 40}
                        onChangeText={oldPassword=>{
                            
                            this.setState({oldPassword})
                            if(this.state.oldPassword==null){
                                this.setState({oldPasswordError:null})
                            }
                        }}

                    />

                    <Input
                        topText='كلمة المرور الجديدة'
                        bottomText=''
                        marginTop={15}
                        secureTextEntry={true}
                        error={this.state.oldPasswordError}
                        width= {width - 40}
                        onChangeText={newPassword=>{
                            
                            this.setState({newPassword})
                            if(this.state.newPassword==null){
                                this.setState({newPasswordError:null})
                            }
                        }}
                    />
                    <Input
                        topText='تاكيد كلمة المرور الجديدة'
                        bottomText=''
                        marginTop={15}
                        secureTextEntry={true}
                        error={this.state.confirmNewPasswordError}
                        width= {width - 40}
                        onChangeText={confirmNewPassword=>{
                            
                            this.setState({confirmNewPassword})
                            if(this.state.confirmNewPassword==null){
                                this.setState({confirmNewPasswordError:null})
                            }
                        }}
                    />

                   

                    <TouchableOpacity style={styles.button}

                        onPress={() => {

                            const {email,oldPassword,newPassword,confirmNewPassword,}=this.state;

                            console.log(this.validateEmail(email));
    
                           
    
                            if(!email){
                                this.setState({emailError:'من فضلك ادخل بريدك الالكتروني'})
                            } 
                            else if(this.validateEmail(email) ==false){
                                this.setState({emailError:'البريد الإلكتروني غير صحيح'})
                            } 
                            else if(!oldPassword){
                                this.setState({oldPasswordError:'من فضلك ادخل كلمة المرور الحالية'})
                            }
                            else if(!newPassword){
                                this.setState({newPasswordError:'من فضلك ادخل كلمة المرور الجديدة'})
                            }
                            else if(String(newPassword).length <=7){
                                this.setState({newPasswordError:'كلمة المرور الجديدة يجب ألا تقل عن 8 أحرف'})
                            }
                            else if(!confirmNewPassword){
                                this.setState({confirmNewPasswordError:'يجب أن يتوافق مع كلمة المرور الجديدة'})
                            }
                            else if(confirmPassword !=password){
                                this.setState({confirmNewPasswordError:'يجب أن يتوافق مع كلمة المرور الجديدة'})
                            } else{

                                this.setState({message:'تم حفظ العدادات بنجاح'})

                            }
    
                            if(this.validateEmail(email) ==true){
                                this.setState({emailError:null})
                            } 
                          
                        }}
                    >

                        <Text style={{ color: Colors.white, fontSize: 13, fontFamily: 'sans-bold' }}>حفظ الاعدادات</Text>

                    </TouchableOpacity>

                    <Text style={{ color: Colors.darkGreen, fontSize: 13,marginTop:15, fontFamily: 'sans-plain' }}>{this.state.message}</Text>
                    <KeyboardSpacer/>


                </ScrollView>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    button:{
        backgroundColor: Colors.darkGreen
        , borderRadius: 40, width: 200, height: 50,
        alignSelf: 'center', marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainView: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: Colors.white
    },
    callText1: { fontFamily: 'sans-plain', fontSize: 13, color: Colors.black, textAlign: 'center' },
    callText2: { fontFamily: 'sans-plain', fontSize: 13, color: Colors.darkGreen, textAlign: 'center' },
    callText3: { fontFamily: 'sans-plain', marginLeft: 5, fontSize: 13, color: Colors.black, textAlign: 'center' }
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
    }
});

const mapStateToProps = ({ newUser, }) => {
    return {

        accessToken: newUser.accessToken,


    }
};

export default connect(mapStateToProps, {})(Auth)
