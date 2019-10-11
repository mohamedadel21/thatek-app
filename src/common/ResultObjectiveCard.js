import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Colors from '../Constant/Colors';
import { MaterialIcons, Ionicons, EvilIcons, FontAwesome, AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window')

class QuestionObjectiveCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <TouchableOpacity style={[styles.main,
      {backgroundColor:this.props.backgroundColor,width:this.props.width, height:this.props.height,borderRadius:this.props.borderRadius}
    ]} 
      
      disabled={this.props.disabled}>


        <Text style={styles.text1}>

          {this.props.number}

        </Text>

        <Text style={styles.text2}>

          {this.props.text}

        </Text>

      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({

  main: {

  
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    margin: 5


  },
  text1:{
    fontFamily: 'sans-plain',
    fontSize: 30,
    color: Colors.white
    , width: width - 80,
    textAlign: 'center',
  },
  text2:{
    fontFamily: 'sans-plain',
    fontSize: 11,
    color: Colors.white
    , width: width - 80,
    textAlign: 'center',
    width: (width / 3) - 40,

  }



})

export default QuestionObjectiveCard;
