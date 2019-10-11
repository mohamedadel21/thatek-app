import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, TextInput ,BackHandler,Alert} from 'react-native';
import { MaterialIcons, Ionicons, EvilIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import DialogManager, { ScaleAnimation, DialogContent, DialogButton } from 'react-native-dialog-component';
import { connect } from 'react-redux'
import Colors from '../Constant/Colors';
import CustomSegment from '../common/CustomSegment'
import ResultCard from '../common/ResultCard'
import ResultObjectiveCard from '../common/ResultObjectiveCard'
import ShareOnSocialMedia from './ShareOnSocialMedia'
import Button from '../common/Button'
import Certificate from '../common/Certificate'
import { QuizResult} from '../actions'

const { width, height } = Dimensions.get('window')

class Result extends Component {
    
    constructor(props) {

        super(props);
        this.state = {

            userType: 'visitor',
            selectedSegment: 'result',
            backgroundColor1: Colors.none,
            backgroundColor2: Colors.darkGreen,
            color1: Colors.darkGrey,
            color2: Colors.white,
            result:{},
            improve:'',
            power:'',
            weakness:'',
            date:''

        };

    }
      
    handleBackButton = () => {
        BackHandler.exitApp()
         return true;
       } 
 

    componentWillMount(){
        
        try{
            BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);

            if(!this.props.navigation.getParam('splash')==true){
                this.props.QuizResult(this.props.answer.id)        
            }

            if(this.props.result){
                this.getCapacitiesCounts(this.props.result)
            }

        }catch(err){

        }

    }

    componentDidMount(){
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);

    }
    getCapacitiesCounts =(result)=>{
       
             const counts =result.capacities_count

                let improve='0',power='0',weakness='0',date='';
                if(counts.improve){
                  improve=counts.improve;
                }
  
                if(counts.power){
                  power=counts.power;
                }
                
                if(counts.weakness){
                  weakness=counts.weakness;
                }
                if(result.quiz_info){
                  date=result.quiz_info.quiz_date;
                }

  
              this.setState({result:result,improve,power,weakness,date})
  
    }
    
    componentWillReceiveProps(props){

        if (props.result) {

            this.getCapacitiesCounts(props.result)
        }
       
    }

    selectSegment = (value) => {
        if (value == 'result') {
            this.setState({

                backgroundColor1: Colors.none,
                backgroundColor2: Colors.darkGreen,
                color1: Colors.darkGrey,
                color2: Colors.white,
                selectedSegment: value


            })
        } else {
            this.setState({
                backgroundColor2: Colors.none,
                backgroundColor1: Colors.darkGreen,
                color2: Colors.darkGrey,
                color1: Colors.white,
                selectedSegment: value
            })
        }
    }

    showSegmentScreens = () => {
        const { selectedSegment } = this.state;

        if (selectedSegment == 'result') {

            return (
                <View style={{justifyContent:'flex-start',alignItems:'center', backgroundColor: '#f0f0f040'            }}>
                   
                    <ResultCard
                        icon='person'
                        objective={this.props.result.title}
                        result={this.props.result.description}
                        shareOnPress={() => {
                            DialogManager.show({
                                haveTitleBar:false,
                                width:width-30,
                                height:height-50,
                                animationDuration: 200,
                                dismissOnHardwareBackPress:true,
                                titleStyle:{
                                    height:0
                                },

                                ScaleAnimation: new ScaleAnimation(),
                                children: (
                                  <ShareOnSocialMedia
                                   objective={this.props.result.title}
                                   result={this.props.result.description}
                                    date={this.state.date}
                                  onPressClose={()=>{
                                    DialogManager.dismiss(() => {
                                        console.log('callback - dismiss');
                                      });                                  }}
                                  />
                                ),
                              }, () => {
                                console.log('callback - show');
                              });

                        }}
                    />

                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' ,marginTop:20}}>
                        
                        <ResultObjectiveCard
                            disabled={true}
                           number={this.state.weakness}
                            text='نقاط الضعف'
                            backgroundColor={Colors.lightBlack2}
                            width= {(width / 3) - 20}
                            height= {110}
                            borderRadius={10}
                        />

                        <ResultObjectiveCard
                            disabled={true}
                            number={this.state.improve}
                            text='نقاط تحتاج الي تطوير'
                            backgroundColor={Colors.orange}
                            width= {(width / 3) - 20}
                            height= {110}
                            borderRadius={10}
                        />

                        <ResultObjectiveCard
                            disabled={true}
                            number={this.state.power}
                            text='نقاط قوة'
                            backgroundColor={Colors.darkGreen}
                            width= {(width / 3) - 20}
                            height= {110}
                            borderRadius={10}
                        />
                    </View>


                    <Text style={{ 
                        fontFamily: 'sans-plain',
                         fontSize: 15,
                         color:Colors.black,
                         textAlign:'center',
                         width:width-40,
                         marginTop:20

                         }}>

                            قم بتسجيل حسابك لتعرف اكثر عن نقاط قوتك، نقاط التي تحتاج منك الي تطوير ، نقاط ضعف
                         
                         </Text>
                         <Button
                         text='تسجيل حساب عبر الفيسبوك'
                         width={width-40}
                         height={40}
                        backgroundColor={Colors.faceBook}
                        borderRadius={50}
                        fontFamily='sans-plain'
                        fontSize={12}
                        color={Colors.white}
                        marginTop={15}
                        margin={5}

                        rightIconName='sc-facebook'
                        rightIconColor={Colors.white}
                        rightIconSize={20}
                         
                         
                         />

                        <Button
                         text='تسجيل حساب عبر جوجل '
                         width={width-40}
                         height={40}
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

                        <Button
                         text='تسجيل حساب'
                         width={width-40}
                         height={40}
                        backgroundColor={Colors.darkGreen}
                        borderRadius={50}
                        fontFamily='sans-plain'
                        fontSize={12}
                        color={Colors.white}
                        marginTop={10}
                        marginBottom={20}

                        onPress={()=>{
                            this.props.navigation.navigate('MainAuth')
                        }}
                       
                         
                         
                         />
                </View>
            )

        } else {
            return (
                <View style={{justifyContent:'flex-start',alignItems:'center', backgroundColor: '#f0f0f040'            }}>

               <Certificate width={width-40} height={270} imageHeigh={50} topImageWidth={50} bottomImageWidth={75} viewWidth={width-100} marginTop={15} textMarginTop={12} viewMarginTop={40} ViewTop={25} name='محمد عادل' date ='12-3-2020' number ='243' powerPoints='الكرم ، الشجاعة ، علو الهمة، العزة ، الاقدام ، الصبر'/>

               <Button
                        text='   تحميل الشهادة'
                        width={width/1.5}
                        height={50}
                        backgroundColor={Colors.darkGreen}
                        borderRadius={50}
                        fontFamily='sans-bold'
                        fontSize={13}
                        color={Colors.white}
                        marginTop={100}
                        marginBottom={20}

                        rightIconName2='clouddownload'
                        rightIconSize2={25}
                        rightIconColor2={Colors.white}
                    />
               </View>
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

                        segmentText1='الشهادة التقديرية'
                        segmentText2='النتيجة'
                        backgroundColor1={backgroundColor1}
                        backgroundColor2={backgroundColor2}
                        color1={color1}
                        color2={color2}

                        onPressSegment1={() => {
                            this.selectSegment('certificate')

                        }}

                        onPressSegment2={() => {
                            this.selectSegment('result')
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


});

const mapStateToProps = ({ newUser, question ,quizAnswer,quizResult}) => {
    return {

        accessToken: newUser.accessToken,
        questions: question.questions,
        answer: quizAnswer.data,
        result:quizResult.result

    }
};

export default connect(mapStateToProps, {QuizResult})(Result)
