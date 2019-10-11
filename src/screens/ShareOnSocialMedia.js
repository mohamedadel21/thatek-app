import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { MaterialIcons, Ionicons, EvilIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import Colors from '../Constant/Colors';
import SocialCard from '../common/SocialCard'
import Button from '../common/Button'
import CloseButton from '../common/CloseButton'
import { connect } from 'react-redux'
import { } from '../actions'
const { width, height } = Dimensions.get('window')

class ShareOnSocialMedia extends Component {

    constructor(props) {

        super(props);
        this.state = {


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

                    <TouchableOpacity style={styles.close} onPress={this.props.onPressClose}>
                        <AntDesign name='close' color={Colors.darkGrey} size={18} />
                    </TouchableOpacity>
                    <View style={styles.shareView}>
                        <Text style={styles.shareTextHeader} >شارك نتيجة الاختبار على الشبكات الاجتماعية</Text>

                        <View style={styles.dateView}>
                            <Text style={styles.dateValue} >{this.props.date}</Text>
                            <Text style={styles.dateText} >اختبار انت و ذاتك بتاريخ</Text>
                        </View>
                    </View>
                    <Text style={styles.signupText1} >سجل حسابك لتتمكن من اضافة اسمك</Text>
                    <Text style={styles.signupText2} >أو لقبك الي كارت نقاط قوتك</Text>


                    <Button
                        text='تسجيل حساب'
                        width={width / 2}
                        height={40}
                        backgroundColor={Colors.white}
                        borderRadius={50}
                        fontFamily='sans-bold'
                        fontSize={12}
                        color={Colors.darkGreen}
                        borderColor={Colors.darkGreen}
                        borderWidth={1}
                        marginTop={15}

                    />

                    <View style={styles.borderedView}>

                        <Text style={styles.url} >www.thatek.com</Text>
                        <Image style={styles.logo} source={require('../../assets/logo2.png')} />

                        <View style={styles.greyCircle}>
                        </View>

                        <Text style={styles.name} >محمد عادل</Text>
                        <Text style={styles.objective} >{this.props.objective}</Text>
                        <Text style={styles.result} >{this.props.result}</Text>

                        <Button
                            text='المزيد'
                            width={100}
                            height={35}
                            backgroundColor={Colors.white}
                            borderRadius={50}
                            fontFamily='sans-plain'
                            fontSize={12}
                            color={Colors.darkGreen}
                            borderColor={Colors.darkGreen}
                            borderWidth={1}
                            marginTop={15}
                            marginBottom={20}

                        />

                    </View>
                    
                    <Text style={styles.shareText} >شارك النتيجة على</Text>


                    <View style={styles.socialView}>

                        <SocialCard
                            text='المزيد'
                            fontSize={10}
                            fontFamily='sans-plain'
                            color={Colors.darkGreen}
                            borderColor={Colors.darkGreen}
                            onPress={() => {
                            }}
                        />

                        <SocialCard
                            iconName3='whatsapp'
                            iconColor3={Colors.black}
                            iconSize3={20}
                            borderColor={Colors.black}
                            marginLeft={15}
                            onPress={() => {
                            }}
                        />
                        <SocialCard
                            iconName='twitter'
                            iconColor={Colors.black}
                            iconSize={20}
                            marginLeft={15}
                            borderColor={Colors.black}
                            onPress={() => {
                            }}
                        />

                        <SocialCard
                            iconName2='sc-facebook'
                            iconColor2={Colors.black}
                            iconSize2={25}
                            marginLeft={15}
                            borderColor={Colors.black}
                            onPress={() => {
                            }}
                        />
                    </View>

                    <Button
                        text='تحميل النتيجة'
                        width={width / 2}
                        height={40}
                        backgroundColor={Colors.darkGreen}
                        borderRadius={50}
                        fontFamily='sans-bold'
                        fontSize={12}
                        color={Colors.white}
                        borderColor={Colors.darkGreen}
                        borderWidth={1}
                        marginTop={15}
                        marginBottom={20}
                        

                    />


                </ScrollView>

            </View>
        );
    }
}


const styles = StyleSheet.create({

    mainView: {
        width: width - 30,
        height: height - 50,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: Colors.white,
        alignSelf:'center'
    },


    close: {
        width: 35, height: 35
        , borderWidth: 1
        , borderColor: Colors.darkGrey,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 50,

    },
    borderedView:{
        borderWidth: 1
        , borderColor: Colors.grey4,
        width: width - 60,
        alignItems: 'center',
        justifyContent: 'flex-start'
        , marginTop: 20,
        alignSelf:'center'
    }
,
    shareView:{ justifyContent: 'flex-start', alignItems: 'flex-end', alignSelf: 'center' },
    dateView:{ flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end', alignSelf: 'flex-end', marginTop: 5 },
    objective:{ fontFamily: 'sans-plain', fontSize: 13, color: Colors.black, marginTop: 5 },
    name:{ fontFamily: 'sans-bold', fontSize: 17, color: Colors.darkGreen, marginTop: 5 },
    url:{ fontFamily: 'sans-plain', fontSize: 10, position: 'absolute', top: 30, left: 13, color: Colors.darkGreen },
    shareText:{ fontFamily: 'sans-plain', fontSize: 13, color: Colors.black, marginTop: 10 },
    socialView:{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 10,alignSelf:'center',marginTop:10 },
    logo:{ height: 60, width: 70, position: 'absolute', top: 10, right: 10 },
    greyCircle:{ borderRadius: 50, width: 50, height: 50, backgroundColor: Colors.grey3, marginTop: 15 },
    result:{ fontFamily: 'sans-plain', fontSize: 13, color: Colors.darkGrey, marginTop: 5, textAlign: 'center', marginHorizontal: 10 },
    dateText:{ fontFamily: 'sans-plain', fontSize: 12, color: Colors.darkGrey },
    dateValue:{ fontFamily: 'sans-plain', fontSize: 12, color: Colors.darkGrey, marginRight:3},
    shareTextHeader:{ fontFamily: 'sans-plain', fontSize: 15, color: Colors.black, marginTop: 10 },
    signupText1:{ fontFamily: 'sans-bold', fontSize: 14, color: Colors.black, marginTop: 15 },
    signupText2:{ fontFamily: 'sans-bold', fontSize: 14, color: Colors.black },
   

});


export default (ShareOnSocialMedia)
