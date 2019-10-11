import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Colors from '../Constant/Colors';
import { MaterialIcons, Ionicons, EvilIcons, FontAwesome, AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window')

class QuestionPointCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  showPoint =()=>{
    if (this.props.point) {

      return(
        <Text style={styles.point}> {this.props.point} </Text>

      )
    }else return;
  }

  render() {
    return (
      <View style={[styles.main, { borderColor: Colors.white, borderWidth: 1 }]}>

        <View style={{ marginRight: 7 }}>
          <View style={{ flexDirection: 'row', alignSelf: 'flex-end', }}>

            <View style={styles.view}       >

              <Text style={styles.number}>{this.props.number}</Text>

            </View>
            <Text style={styles.header}> {this.props.header} </Text>

          </View>
            {this.showPoint()}
        </View>



      </View>
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
  view:{
    justifyContent: 'center', alignItems: 'center', width: 22,
    height: 22,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.black
  },
  point: {
    width: width - 95,
    color: Colors.darkGrey,
    fontFamily: 'noto-naskhRegular',
    fontSize: 12,
    textAlign: 'right',
  },
  header: {
    color: Colors.black,
    fontFamily: 'sans-bold',
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


})

export default QuestionPointCard;
