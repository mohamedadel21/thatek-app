import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Colors from '../Constant/Colors';
import { MaterialIcons, Ionicons, EvilIcons, FontAwesome, AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window')

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  leftText = () => {

    if (this.props.left == true) {

      return (

        <TouchableOpacity style={styles.button} onPress={this.props.onPressLeft}
        >
          <Text style={{ fontFamily: 'sans-plain', fontSize: 12, color: Colors.white }}>{this.props.leftText}</Text>
        </TouchableOpacity>

      )

    }
    else return;

  }

  render() {
    return (
      <View style={styles.main}>

        {this.leftText()}

        <Text style={styles.text}> {this.props.text} </Text>

        <TouchableOpacity
          onPress={this.props.onPress}
        >
          <EvilIcons name='chevron-right' size={30} color={Colors.white} />
        </TouchableOpacity>


      </View>
    );
  }
}

const styles = StyleSheet.create({

  main: {

    width,
    height: 70,
    backgroundColor: Colors.darkGreen,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    shadowColor: Colors.black,
    shadowOpacity: .2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  text: {
    color: Colors.white,
    fontFamily: 'sans-plain',
    fontSize: 16,

  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    width: 100
    , height: 30
    , borderColor: Colors.white
    , borderWidth: 1,
    position: 'absolute',
    left: 15, borderRadius: 50,
  }

})

export default Header;
