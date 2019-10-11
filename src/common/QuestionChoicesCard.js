import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Colors from '../Constant/Colors';
import { MaterialIcons, Ionicons, EvilIcons, FontAwesome, AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window')

class QuestionChoicesCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  /* showHeader =()=>{
     if(this.props.header){
       return(
         <View style={{flexDirection:'row',      alignSelf:'flex-end',  }}>
 
           <View style={{justifyContent:'center',alignItems:'center' ,   width:22,
       height:22,
       borderRadius:50,
       borderWidth:1,
       borderColor:Colors.black  }}>
 
         <Text style={styles.number}>{this.props.number}</Text>
         </View>
         <Text style={styles.header}> {this.props.header} </Text>
 
         </View>
 
       )
     }else return;
   }*/

  render() {
    return (
      <TouchableOpacity style={[styles.main, { borderColor: this.props.borderColor, borderWidth: this.props.borderWidth }]}
        onPress={this.props.onPress}
      >

        <View style={{ marginRight: 7 }}>

          <Text style={styles.answer}> {this.props.answer} </Text>

        </View>

        <View style={[styles.check, { borderColor: this.props.checkBorderColor, borderWidth: this.props.checkBorderWidth, backgroundColor: this.props.checkbackgroundColor }]} >
          <AntDesign name='check' color={this.props.checkColor} size={15} />
        </View>

      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({

  main: {

    width: width - 40,
    padding: 7,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginVertical: 3,
    shadowColor: Colors.black,
    shadowOpacity: .15,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,


  },
  answer: {
    width: width - 95,
    color: Colors.darkGrey,
    fontFamily: 'noto-naskhRegular',
    fontSize: 12,
    textAlign: 'right',
  },
  header: {
    color: Colors.black,
    fontFamily: 'noto-naskhBold',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 3,
    textAlign: 'right'
  },

  number: {
    color: Colors.black,
    fontFamily: 'noto-naskhBold',
    fontSize: 11,

  },
  check: {
    width: 22, height: 22
    , borderWidth: 1
    , borderColor: Colors.grey2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginRight: 3

  },

})

export default QuestionChoicesCard;
