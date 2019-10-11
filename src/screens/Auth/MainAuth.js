import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { MaterialIcons, Ionicons, EvilIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import Colors from '../../Constant/Colors';
import Header from '../../common/Header'
import CustomSegment from '../../common/CustomSegment'
import ResultCard from '../../common/ResultCard'
import Input from '../../common/Input'
import Button from '../../common/Button'
import Login from './Login'
import Signup from './Signup'
import { connect } from 'react-redux'
import { QuizResult } from '../../actions'
const { width, height } = Dimensions.get('window')

class Auth extends Component {

    constructor(props) {

        super(props);
        this.state = {

            userType: 'visitor',
            selectedSegment: 'result',
            backgroundColor1: Colors.none,
            backgroundColor2: Colors.darkGreen,
            color1: Colors.grey,
            color2: Colors.white,


        };

    }

    componentWillMount() {
    }

    componentWillReceiveProps(props) {


    }

    selectSegment = (value) => {
        if (value == 'signup') {
            this.setState({

                backgroundColor1: Colors.none,
                backgroundColor2: Colors.darkGreen,
                color1: Colors.grey,
                color2: Colors.white,
                selectedSegment: value


            })
        } else {
            this.setState({
                backgroundColor2: Colors.none,
                backgroundColor1: Colors.darkGreen,
                color2: Colors.grey,
                color1: Colors.white,
                selectedSegment: value
            })
        }
    }

    showSegmentScreens = () => {
        const { selectedSegment } = this.state;

        if (selectedSegment == 'login') {

            return (
                <Login navigation={this.props.navigation}/>
            )

        } else {
          
            return (
                <Signup navigation={this.props.navigation}/>
            )
        }
    }

    render() {

        const { backgroundColor1, backgroundColor2, color1, color2, selectedSegment } = this.state;

        return (
            <View style={styles.mainView}>

                <ScrollView

                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start', alignItems: 'center' }} >

                    <CustomSegment

                        segmentText1='تسجيل الدخول'
                        segmentText2='تسجيل الحساب'
                        backgroundColor1={backgroundColor1}
                        backgroundColor2={backgroundColor2}
                        color1={color1}
                        color2={color2}

                        onPressSegment1={() => {
                            this.selectSegment('login')
                        }}

                        onPressSegment2={() => {
                            this.selectSegment('signup')
                        }}

                    />

                    {this.showSegmentScreens()}



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
