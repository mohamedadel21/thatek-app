import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { MaterialIcons, Ionicons, EvilIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Colors from '../Constant/Colors';
import Certificate from '../common/Certificate'
import { connect } from 'react-redux'
import { } from '../actions'
import Input from '../common/Input'
import Button from '../common/Button'
import CloseButton from '../common/CloseButton'
const { width, height } = Dimensions.get('window')
class Attention extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName:'',
            lastName:''
        };
    }

    render() {

        return (
            <View style={styles.mainView}>

                <ScrollView
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start', alignItems: 'center' }} >

                    <CloseButton onPress={() => { this.props.navigation.goBack() }} marginTop={20} />

                    <View style={styles.attentionView}>

                    <Certificate width={width-100} height={220} marginTop={20} imageHeigh={35} topImageWidth={35} bottomImageWidth={50}  viewWidth={width-150} textMarginTop={9} viewMarginTop={30} ViewTop={17} name={this.state.firstName+" "+this.state.lastName} date ='12-3-2020' number ='243' powerPoints='الكرم ، الشجاعة ، علو الهمة، العزة ، الاقدام ، الصبر'/>

                    <Text style={{ 
                        fontFamily: 'sans-bold',
                         fontSize: 15,
                         color:Colors.black,
                         textAlign:'center',
                         width:width-40,
                         marginTop:20

                         }}>

                         أضف اسم لكي يظهر علي {'\n'}الشهادة التقديرية
                         
                         </Text>
                    <Input
                        topText='الاسم الاول'
                        marginTop={7}
                        width= {width - 100}
                        onChangeText={(firstName)=>{
                        this.setState({firstName})
                        
                    }}
                    />

                    <Input
                        topText='اسم العائلة'
                        marginTop={7}
                        width= {width - 100}
                        onChangeText={(lastName)=>{
                        this.setState({lastName})
                        
                    }}
                    />

                    <Button
                    text='اضافة'
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
                    marginTop={25}
                    marginBottom={25}
                    alignSelf='center'
                    onPress={() => {
                    }}
                    />

                    </View>



                </ScrollView>
                <KeyboardSpacer/>

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
        marginTop: 20,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15

    },

});

export default Attention;
