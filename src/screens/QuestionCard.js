import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, TextInput, FlatList } from 'react-native';
import { MaterialIcons, Ionicons, EvilIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import Colors from '../Constant/Colors';
import Header from '../common/Header'
import QuestionPointCard from '../common/QuestionPointCard'
import QuestionChoicesCard from '../common/QuestionChoicesCard'
import { connect } from 'react-redux'
import { quizAnwser } from '../actions'
import PickerItem from '../common/PickerItem'
const { width, height } = Dimensions.get('window')
import Toast, { DURATION } from 'react-native-easy-toast';

let questionNumber = 0;

class QuestionsCard extends Component {

    constructor(props) {
        super(props);

        this.state = {

            important: '../../assets/important.gif',

            headerColor: Colors.darkGrey,

            selectedHeader: 1,
            selected: -1,
            questions: [],
            selectedQuestion: null,
            selectedIndex: 0,
            answers: [],
            selectedAnswers: [],
            error: null,

            timer: 30000

        };

    }

    componentDidMount() {
        this.interval = setInterval(
            () => this.setState((prevState) => ({ timer: prevState.timer - 1 })),
            1000
        );
        
    }

    componentDidUpdate() {
        if (this.state.timer === 1) {
            clearInterval(this.interval);
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    componentWillMount() {

        this.setState({ questions: this.props.questions, selectedQuestion: this.props.questions[0] })
        questionNumber = this.props.questions.length;
        questionNumber = questionNumber - 1;

       for (let index = 0; index < this.props.questions.length; index++) {
           this.state.selectedAnswers.push({
            "answer_id": null,
            "question_index": index,
          })
           
       }
    }

    componentWillReceiveProps(props) {

        if (props.answer) {
            this.props.navigation.navigate('Result')
        }

    }

    renderItemQuestionPoint = ({ item, index }) => {

        return (
            <QuestionPointCard

                number={++index}
                point={item.point}
                header={item.q_select}

            />

        );

    }

    _keyExtractorQuestionPoint = (item, index) => item.id + '';

    showError = () => {

        if (this.state.error) {
            return (
                <View style={styles.errorBack}>
                    <Text style={styles.errorText}>{this.state.error}</Text>
                </View>
            )
        }

    }

    addAnswer = async (question_id, answer_id) => {


        if (this.state.answers.length > 0) {
            await this.state.answers.map((item, index) => {

                if (question_id == item.question_id) {

                    this.state.answers.splice(index, 1)

                }
            })

            this.state.answers.push({ question_id, answer_id })

        } else if (this.state.answers.length == 0) {
            this.state.answers.push({ question_id, answer_id })
        }
        


    }

    addSelectedAnswer = async (question_index, answer_id) => {

         this.state.selectedAnswers.map((item, index) => {

                if (question_index == item.question_index) {
                    
                    this.state.selectedAnswers.splice(index, 1)
                    ind=index;
                }
            })

            this.state.selectedAnswers.splice(this.state.selectedIndex,0,{ question_index, answer_id })
            console.log(this.state.selectedAnswers);

       


    }

    resultButtonText = () => {

        if (this.state.selectedHeader == this.state.questions.length) {
            return (
                <Text style={styles.nextText}>عرض النتيجة</Text>
            )
        } else {
            return (
                <View style={{ flexDirection: 'row' }}>
                    <EvilIcons name='chevron-left' color={Colors.white} size={30} />
                    <Text style={styles.nextText}>التالي</Text>

                </View>

            )
        }
    }

    showImportant = () => {
        if (this.state.timer % 10 == 0 || this.state.timer % 10 == 1 || this.state.timer % 10 == 2 || this.state.timer % 10 == 3 || this.state.timer % 10 == 4 || this.state.timer % 10 == 9) {
            return (
                <Image style={{ height: 40, width: 40 }} source={require('../../assets/important.gif')} />
            )
        } else {
            return (
                <Image style={{ height: 40, width: 40 }} source={require('../../assets/important.png')} />

            )
        }
    }

    showMargin =()=>{
        const { selectedQuestion } = this.state;

        if(selectedQuestion.questions_selections.length >0){
            return(
                <View style={{ height: 25 }}/>
            )
        }
    }

    render() {

        const { selectedQuestion } = this.state;

        return (
            <View style={styles.mainView} >

                <Toast ref="toast" />

                <View style={{
                    flexDirection: 'row',
                    width: width - 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>

                    <TouchableOpacity style={styles.important} onPress={() => {
                        this.props.navigation.navigate('QuestionsImportant')
                    }}
                    >

                        {this.showImportant()}
                    </TouchableOpacity>

                    <View style={styles.slider} >

                        <View style={[styles.sliderGreen, { width: ((width - 100) * (this.state.selectedHeader / this.state.questions.length)), }]}></View>

                        <Text style={[styles.sliderText, { color: this.state.headerColor }]}> سؤال {this.state.selectedHeader} من {this.state.questions.length} </Text>

                    </View>

                </View>

                <Text style={styles.questionText}>{selectedQuestion.question}</Text>
                {this.showMargin()}

                {
                    selectedQuestion.questions_selections.map((item, index) => {

                        return (

                            <QuestionPointCard
                                key={index}
                                number={++index}
                                point={item.q_select}
                                header='المجموعة'
                            />

                        )
                    })
                }
                <View style={{ height: 25 }}></View>


                {
                    selectedQuestion.answers.map((item, index) => {
                     
                        if (index == this.state.selected || (this.state.selectedAnswers[this.state.selectedIndex].answer_id==item.id)) {
                            
                            return (
                                <QuestionChoicesCard

                                    key={item.answer}
                                    borderColor={Colors.darkGreen}
                                    borderWidth={1}
                                    checkBorderColor={Colors.darkGreen}
                                    checkBorderWidth={1}
                                    checkColor={Colors.white}
                                    answer={item.answer}
                                    checkbackgroundColor={Colors.darkGreen}
                                    onPress={() => {

                                        this.setState({ selected: index, error: null })
                                    }}

                                />

                            )

                        } else {

                            return (
                                <QuestionChoicesCard

                                    key={item.answer}
                                    checkBorderColor={Colors.grey2}
                                    checkBorderWidth={1}
                                    checkColor={Colors.grey2}
                                    answer={item.answer}
                                    header={item.header}
                                    checkbackgroundColor={Colors.white}
                                    borderColor={Colors.white}
                                    borderWidth={1}
                                    onPress={() => {

                                        this.setState({ selected: index, error: null })
                                        this.addAnswer(selectedQuestion.id, item.id)
                                        this.addSelectedAnswer(this.state.selectedIndex, item.id)

                                    }}
                                />
                            )

                        }
                    
                        
                    })
                }

                {this.showError()}
                <TouchableOpacity
                    style={styles.notClear}
                >

                    <Text style={styles.notClearText}>سؤال محير؟</Text>

                </TouchableOpacity>



                <View style={{ width, justifyContent: "center", alignItems: 'center', flexDirection: 'row', marginVertical: 20 }}>

                    <TouchableOpacity style={styles.next}
                        onPress={() => {


                            if(this.state.selectedHeader>questionNumber/3){
                                this.setState({headerColor:Colors.white})
                            }else {
                                this.setState({headerColor:Colors.darkGrey})

                            }
                            if (this.state.selectedIndex < questionNumber) {
                                if (this.state.selected > -1 || (this.state.selectedAnswers[this.state.selectedIndex].answer_id!=null)) {
                                    this.setState({
                                        selectedQuestion: this.props.questions[++this.state.selectedIndex],
                                        selectedHeader: ++this.state.selectedHeader, selected: -1,
                                        error: null
                                    })
                                }

                                else {

                                    this.setState({ error: 'من فضلك ادخل احدي الاجابات للاستمرار' })

                                }

                            }
                            else if (this.state.answers.length == this.state.questions.length) {

                                this.props.quizAnwser( this.state.answers)
                            }

                        }}
                    >

                        {this.resultButtonText()}
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.last}
                        onPress={() => {
                            if(this.state.selectedHeader>questionNumber/3){
                                this.setState({headerColor:Colors.white})
                            }else {
                                this.setState({headerColor:Colors.darkGrey})

                            }
                            
                            if (this.state.selectedIndex >= 1) {
                                this.setState({
                                    selectedQuestion: this.props.questions[--this.state.selectedIndex],
                                    selectedHeader: --this.state.selectedHeader,
                                    selected: -1
                                })

                            }

                            if ( (this.state.selectedAnswers[this.state.selectedIndex].answer_id!=null)) {
                                this.setState({ error: null })

                            }

                        }}
                    >

                        <Text style={styles.lastText}>السابق </Text>

                        <EvilIcons name='chevron-right' color={Colors.darkGrey} size={30} />


                    </TouchableOpacity>

                </View>



            </View>
        );
    }
}


const styles = StyleSheet.create({

    mainView: {
        width: width,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: Colors.white
    },
    slider: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width - 100
        , height: 25
        , backgroundColor: Colors.grey2,
        borderRadius: 50,
        marginLeft: 15,
        flexDirection: 'row'
    },
    sliderGreen: {
        height: 25,
        backgroundColor: Colors.darkGreen,
        borderRadius: 50,
        position: 'absolute',
        right: 0

    },
    sliderText: {
        fontFamily: 'sans-plain',
        fontSize: 11,
    },
    questionText: {
        fontFamily: 'sans-plain',
        fontSize: 14,
        color: Colors.black
        , width: width - 80,
        alignSelf: 'flex-end',
        textAlign: 'right',
        marginRight: 20,
        marginTop: 22
    },
    important: {
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        width: 35
        , height: 35,
        borderColor: Colors.darkGreen,
        borderWidth: 1,
        //shadowColor: Colors.black,
        //shadowOpacity: .15,
        //shadowOffset: { width: 0, height: 2 },
        //elevation: 2,
        borderRadius: 50
    },
    last: {
        width: width / 2 - 30,
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: 'row'
        , backgroundColor: Colors.offWhite
        , borderRadius: 50,
        height: 50,
        marginLeft: 15
    },
    lastText: {
        fontFamily: 'sans-plain',
        fontSize: 14,
        color: Colors.grey,
        textAlign: 'right',
    },
    next: {
        width: width / 2 - 30,
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: 'row'
        , backgroundColor: Colors.darkGreen
        , borderRadius: 50,
        height: 50,
    },
    nextText: {
        fontFamily: 'sans-plain',
        fontSize: 14,
        color: Colors.white,
        textAlign: 'right',
    }
    ,
    notClearText: {
        fontFamily: 'sans-plain',
        fontSize: 14,
        color: Colors.darkGreen
        , width: width - 80,
        textAlign: 'right',
    }
    , notClear: {
        alignSelf: 'flex-end',
        textAlign: 'right',
        marginRight: 20,
        marginTop: 20
    },
    errorBack: {
        backgroundColor: Colors.errorBackColor
        , borderRadius: 10,
        padding: 6,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginRight: 20,
        marginTop: 20
    },
    errorText: {
        color: Colors.errorColor
        , fontSize: 10
        , fontFamily: 'sans-plain'
    }
});


const mapStateToProps = ({ newUser, question, quizAnswer }) => {
    return {

        accessToken: newUser.accessToken,
        questions: question.questions,
        answer: quizAnswer.data,

    }
};

export default connect(mapStateToProps, { quizAnwser })(QuestionsCard)
