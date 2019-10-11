import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Colors from '../Constant/Colors';
import ResultObjectiveCard from './ResultObjectiveCard';
import { MaterialIcons, Ionicons, EvilIcons, FontAwesome, AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window')

class ResultCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <View style={[styles.main]}>

       

        <Text style={styles.type}>

           اختبار انت و ذاتك - {this.props.type}

        </Text>

        <Text style={styles.date}>

          {this.props.date}

        </Text>

        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' ,marginTop:15}}>
                        
                        <ResultObjectiveCard
                            disabled={true}
                           number={this.props.weakness}
                            text='نقاط الضعف'
                            backgroundColor={Colors.lightBlack2}
                            width= {(width / 3) - 30}
                            height= {100}
                            borderRadius={0}
                        />

                        <ResultObjectiveCard
                            disabled={true}
                            number={this.props.improve}
                            text='نقاط تحتاج الي تطوير'
                            backgroundColor={Colors.orange}
                            width= {(width / 3) - 30}
                            height= {100}
                            borderRadius={0}
                        />

                        <ResultObjectiveCard
                            disabled={true}
                            number={this.props.power}
                            text='نقاط قوة'
                            backgroundColor={Colors.darkGreen}
                            width= {(width / 3) - 30}
                            height= {100}
                            borderRadius={0}
                        />
                    </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({

  main: {

    width: width - 40,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'flex-start',
    shadowColor: Colors.black,
    shadowOpacity: .15,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    padding: 10
    ,marginVertical:10


  },

  
  type: {
    fontFamily: 'sans-bold',
    fontSize: 14,
    color: Colors.black
    , width: width - 80,
    alignSelf: 'flex-end',
    textAlign: 'right',
    marginRight: 10,
    marginTop: 5
  },
  date: {
    fontFamily: 'sans-plain',
    fontSize: 12,
    color: Colors.darkGrey
    , width: width - 70,
    alignSelf: 'flex-end',
    textAlign: 'right',
    marginRight: 10,
    marginTop: 5,
    marginBottom: 10
  }

})

export default ResultCard;
