import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Colors from '../Constant/Colors';
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

        <View style={[styles.iconAndButton]}>


          <TouchableOpacity style={styles.shareTouch}
            onPress={this.props.shareOnPress}
          >
            <Text style={styles.shateText}>
              مشاركة النتيجة


            </Text>
            <AntDesign name='sharealt' color={Colors.white} size={17} />

          </TouchableOpacity>

          <View style={styles.icon} >
            <MaterialIcons name={this.props.icon} color={Colors.darkGreen} size={24} />
          </View>

        </View>

        <Text style={styles.objective}>

          {this.props.objective}

        </Text>

        <Text style={styles.result}>

          {this.props.result}

        </Text>


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


  },

  iconAndButton: {

    width: width - 40,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    margin: 30



  },
  icon: {
    width: 70, height: 70
    , borderWidth: 1
    , borderColor: Colors.darkGreen,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    position: 'absolute',
    right: 20

  },
  shareTouch: {
    width: 120,
    justifyContent: "center",
    alignItems: 'center',
    flexDirection: 'row'
    , backgroundColor: Colors.darkGreen
    , borderRadius: 50,
    height: 35,
    marginLeft: 20
  },
  shateText: {
    fontFamily: 'sans-plain',
    fontSize: 11,
    color: Colors.white,
    textAlign: 'center',
    marginRight: 5
  },
  objective: {
    fontFamily: 'sans-bold',
    fontSize: 18,
    color: Colors.black
    , width: width - 80,
    alignSelf: 'flex-end',
    textAlign: 'right',
    marginRight: 10,
    marginTop: 5
  },
  result: {
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
