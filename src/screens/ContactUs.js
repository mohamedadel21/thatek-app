import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { MaterialIcons, Ionicons, EvilIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import Colors from '../Constant/Colors';
import Header from '../common/Header'
import KeyboardSpacer from 'react-native-keyboard-spacer';
import ResultCard from '../common/ResultCard'
import Input from '../common/Input'
import InputArea from '../common/InputArea'
import PickerItem from '../common/PickerItem'
import Button from '../common/Button'
import { connect } from 'react-redux'
import { QuizResult } from '../actions'
const { width, height } = Dimensions.get('window')

const data = ['أستفسار', 'أقتراح', 'شكر', 'ملاحظات', 'طلب', 'شكوى']

class ContactUs extends Component {

    constructor(props) {

        super(props);
        this.state = {

            message: '',

            search: '',
            messageType: '',
            messageTypeError: null,

            selectedPickerIndex: 0,
            selectedPickerText: '',

            name:null,
            nameError:null,

            email:null,
            emailError:null,

            messageText:null,
            messageTextError:null,

            phone:null,
            address:null
            ,pickerList: [],

        };

    }

    componentWillMount() {
    }

    componentWillReceiveProps(props) {


    }


    selectPicker = (value, text) => {
        console.log(value + text);

        if (value == 1) {
            this.setState({ selectedPickerIndex: value, pickerList: data, selectedPickerText: text, messageTypeError: null })

        }
        else if (value == 0) {
            this.setState({ selectedPickerIndex: value })

        }
    }



    Picker = (value, list) => {

        if (this.state.selectedPickerIndex == 0) {
            return;
        } else if (this.state.selectedPickerIndex != 0) {

            return (
                <View style={styles.picker}>

                    <TextInput
                        // placeholder='enter text'
                        style={styles.searchInput}
                        onChangeText={(search) => {
                            this.setState({ search })
                        }}
                    />


                    <ScrollView
                        contentContainerStyle={styles.pickerScroll}

                    >
                        {

                            list.map((item, i) => {

                                if (item.includes(this.state.search)) {

                                    return (
                                        <TouchableOpacity
                                            key={i}
                                            style={{ height: 35 }}
                                            onPress={() => {

                                                if (value == 1) {
                                                    this.setState({ messageType: item, enableScrollViewScroll: true, selectedPickerIndex: 0, search: '' })

                                                }

                                            }}>
                                            <Text style={styles.pickerItem}>{item}</Text>
                                        </TouchableOpacity>
                                    )
                                }



                            })
                        }

                    </ScrollView>

                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.none, width, height: 50, position: 'absolute', bottom: 0 }}>
                        <TouchableOpacity style={{ position: 'absolute', marginLeft: 25, height: 30, width: 30 }}
                            onPress={() => {
                                this.selectPicker(0)
                            }}
                        >
                            <EvilIcons name='chevron-up' size={30} color={Colors.black} />

                        </TouchableOpacity>

                        <Text style={styles.selectedPickerText}>{this.state.selectedPickerText}</Text>

                    </View>

                </View>
            )
        }


    }




    render() {


        return (
            <View style={styles.mainView}>


                <ScrollView
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start', alignItems: 'center' }} >

                    <Input
                        topText='الاسم'
                        marginTop={15}
                        width= {width - 40}
                        keyboardType='email-address'
                        error={this.state.nameError}
                        onChangeText={(name)=>{
                        this.setState({name})
                        if(this.state.name==null){
                            this.setState({nameError:null})
                        }
                    }}
                    />

                    <Input
                        topText='البريد الالكتروني'
                        marginTop={7}
                        keyboardType='email-address'
                        width= {width - 40}
                        error={this.state.emailError}
                        onChangeText={(email)=>{
                        this.setState({email})
                        if(this.state.email==null){
                            this.setState({emailError:null})
                        }
                    }}
                    />

                    <Input
                        topText='رقم التواصل (اختياري)'
                        marginTop={7}
                        width= {width - 40}
                        secureTextEntry={true}
                        keyboardType='numeric'
                        onChangeText={(phone)=>{
                        this.setState({phone})
                        
                    }}
                    />
                    <Input
                        topText='العنوان (اختياري)'
                        marginTop={7}
                        width= {width - 40}
                        secureTextEntry={true}
                        onChangeText={(address)=>{
                            this.setState({address})
                            
                        }}
                    />
                    <PickerItem
                        value={this.state.messageType}
                        error={this.state.messageTypeError}
                        tooltip='نوع الرسالة'
                        marginTop={5}
                        tooltipColor={Colors.black}
                        textColor={Colors.black}

                        onPress={() => {
                            this.selectPicker(1, 'نوع الرسالة')
                        }}
                    />

                    <InputArea
                        topText='نص الرسالة'
                        bottomText=''
                        marginTop={10}
                        error={this.state.messageTextError}
                        onChangeText={(messageText)=>{
                        this.setState({messageText})
                        if(this.state.messageText==null){
                            this.setState({messageTextError:null})
                        }
                    }}
                    />



                    <TouchableOpacity style={styles.button}

                        onPress={() => {
                            const {name,email,messageType,messageText,phone,address}=this.state;
                            if(!name){
                                this.setState({nameError:'من فضلك ادخل الاسم'})
                            }
                            else if(!email){
                                this.setState({emailError:'من فضلك ادخل بريدك الالكتروني'})
                            }
                            else if(messageType==''){
                                this.setState({messageTypeError:'من فضلك ادخل نوع الرسالة'})
                            }
                            else if(!messageText){
                                this.setState({messageTextError:'من فضلك ادخل نص الرسالة'})
                            }else {

                            }
                            // this.setState({message:'تم حفظ العدادات بنجاح'})
                        }}
                    >

                        <Text style={{ color: Colors.white, fontSize: 13, fontFamily: 'sans-bold' }}>ارسال</Text>

                    </TouchableOpacity>

                    <Text style={{ color: Colors.darkGreen, fontSize: 13, marginTop: 15, fontFamily: 'sans-plain' }}>{this.state.message}</Text>


                </ScrollView>
                {this.Picker(this.state.selectedPickerIndex, this.state.pickerList)}
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
    button:{
        backgroundColor: Colors.darkGreen
        , borderRadius: 40, width: 150, height: 50,
        alignSelf: 'center', marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    picker: {
        height: height / 3,
        width: width
        , backgroundColor: Colors.white,
        position: 'relative',
        bottom: 0,
        shadowColor: Colors.black,
        shadowOpacity: .2,
        shadowOffset: { width: 0, height: 2 },
        elevation: 6,
    },

    pickerheader: {
        color: Colors.darkGrey,
        fontFamily: 'sans-plain',
        fontSize: 13,
        marginLeft: 5
    },
    pickerResultText: {
        color: Colors.darkGrey,
        fontFamily: 'sans-plain'
        , fontSize: 13
        , position: 'absolute',
        right: 30
    }, picherView: {
        marginTop: 5,
        width: width - 40,
        borderRadius: 30,
        borderColor: Colors.lightGrey,
        borderWidth: 1,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    pickerItem: {
        color: Colors.darkGrey
        , fontFamily: 'sans-plain'
        , fontSize: 13
        , alignSelf: 'center',
        height: 20
    },
    pickerButton: {
        flexDirection: 'row',
        paddingLeft: 20,
        width: width - 40
        , margin: 10
    },
    searchInput: {
        textAlign: 'center', fontFamily: 'sans-plain', fontSize: 13, width: width - 90,
        height: 30, alignSelf: 'center', borderColor: Colors.lightGrey, borderRadius: 50, borderWidth: 1,
        marginTop: 20
    },
    pickerScroll: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 40

    },
    selectedPickerText: { position: 'absolute', bottom: 20, right: 20, height: 30, fontFamily: 'sans-plain', color: Colors.black, fontSize: 13 },
    tooltip: {
        fontFamily: 'sans-plain', color: Colors.white, fontSize: 8
    },
    pickerheaderStyle: { alignSelf: 'flex-end', flexDirection: 'row', marginRight: 20 }

});

const mapStateToProps = ({ newUser, }) => {
    return {

        accessToken: newUser.accessToken,


    }
};

export default connect(mapStateToProps, {})(ContactUs)
