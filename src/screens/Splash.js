import React, { Component } from 'react';
import { Text, StyleSheet, Image, View, ImageBackground, Animated } from 'react-native';
import { LinearGradient, Svg } from 'expo';
import { connect } from 'react-redux'
import { Button } from 'react-native-elements';
import Colors from '../Constant/Colors';
import { LoadFonts } from '../Constant/Fonts';
import * as Font from 'expo-font';
const splash={ splash: true };
class Splash extends Component {

    constructor(props) {
        super(props);

        this.state = {
            defualt: 1,
            animated: new Animated.Value(0),
            animated2: new Animated.Value(0),
            fontLoaded: false
        }

        LoadFonts();

    }

    async componentWillMount() {
        await LoadFonts()
        this.setState({ fontLoaded: true })
    }

   
    openNextScreen =()=>{
        
        try {
            if (this.props.signup) {
                this.props.navigation.navigate('MainTabs', splash)
            }
            else if (this.props.login) {
                this.props.navigation.navigate('MainTabs', splash)
            }
            else if (this.props.answer) {
                this.props.navigation.navigate('StartTest', splash)
            } else if (this.props.questions) {
                this.props.navigation.navigate('Questions', splash)
            } else {
                this.props.navigation.navigate('StartTest', splash);
            } 
        }catch(err){

        }
    }

    render() {
        const OpacityStyle = {
            opacity: this.state.animated
        }
        const OpacityStyle2 = {
            opacity: this.state.animated2
        }

        return (
            <View style={styles.mainView}>


                {this.state.fontLoaded ? (
                    <View style={{ flexDirection: 'row' }}>

                        <Animated.View style={[styles.logoView, OpacityStyle2]}>


                        </Animated.View>

                        <Animated.View style={[OpacityStyle, styles.logoView]}>

                            <Image style={{ width: 185, height: 185 }} source={require("../../assets/logo.png")}></Image>
                        </Animated.View>


                    </View>
                ) : null

                }
            </View>
        );
    }


    componentDidMount() {

        Animated.timing(new Animated.Value(1), {
            toValue: 1,
            duration: 500
        }).start(() => {
            Animated.timing(this.state.animated, {
                toValue: 1,
                duration: 700
            }).start(() => {
                Animated.timing(this.state.animated2, {
                    toValue: 1,
                    duration: 1000
                }).start(() => {
                    Animated.timing(new Animated.Value(1), {
                        toValue: 1,
                        duration: 2000
                    }).start(() => {
                       this.openNextScreen()
                    })
                });
            });
        });

    }
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white
        , flexDirection: 'row'
    },
    logoView: {

        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: Colors.black,
        fontSize: 35,
        fontWeight: 'bold',
        alignSelf: 'center',
        fontFamily: 'sans-extrBold'
    },
    slogan: {
        color: Colors.black,
        fontSize: 11
        , alignContent: 'center',
        alignSelf: 'center',
        fontFamily: 'sans-semiLight',
        marginTop: -17

    },

});


const mapStateToProps = ({ newUser, question, quizAnswer, quizResult,auth }) => {
    return {

        accessToken: newUser.accessToken,
        questions: question.questions,
        answer: quizAnswer.data,
        result: quizResult.result,
        signup: auth.signup,
        login: auth.login

    }
};

export default connect(mapStateToProps, {})(Splash)
