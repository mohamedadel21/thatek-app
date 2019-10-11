import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, TextInput, Platform, Alert,BackHandler } from 'react-native';
import { MaterialIcons, Ionicons, EvilIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import Colors from '../Constant/Colors';
import Header from '../common/Header';
import QuestionCard from './QuestionCard';
import { connect } from 'react-redux';
import { getQuestions } from '../actions';
const { width, height } = Dimensions.get('window');


class Questions extends Component {

    constructor(props) {
        super(props);

        this.state = {
            questions: [],
            selectedHeader: 1,
            selectedQuestion: null,
            selectedIndex: 0
        };

    }

    handleBackButton = () => {
        BackHandler.exitApp()
         return true;
       } 
       
    

    componentDidMount(){
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);

    }

    componentWillMount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
        this.props.getQuestions()

    }

    componentWillReceiveProps(props) {

        if (props.questions) {
            this.setState({ questions: props.questions, selectedQuestion: props.questions[0] })

        }

    }



    showQuestion = () => {

        if (this.props.questions) {
            return (
                <QuestionCard navigation={this.props.navigation} />
            )
        } else return;
    }

    render() {


        return (


            <View style={styles.mainView}>


                <ScrollView
                    contentContainerStyle={styles.ScrollView} >


                    <View style={{ height: 20 }}></View>

                    {this.showQuestion()}


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

    item: {
        width: width,
        //height: screenWidth - 60,
    },
    imageContainer: {

        marginHorizontal: 0
    },
    image: {
        marginHorizontal: 0
    },
    ScrollView:{ flexGrow: 1, justifyContent: 'flex-start', alignItems: 'center' }
});


const mapStateToProps = ({ newUser, question }) => {
    return {

        accessToken: newUser.accessToken,
        questions: question.questions,

    }
};

export default connect(mapStateToProps, { getQuestions })(Questions)
