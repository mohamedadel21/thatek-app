import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Linking } from 'react-native';
import Colors from '../Constant/Colors';
import { MaterialIcons, Ionicons, EvilIcons, FontAwesome, AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window')

class MenuCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <TouchableOpacity style={[styles.main]} onPress={this.props.onPress}>



        <View style={{ position: 'absolute', left: 20 }}   >

          <EvilIcons name='chevron-left' color={Colors.black} size={31} />
        </View>

        <Text style={styles.text}   >

          {this.props.text}

        </Text>


      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({

  main: {

    width: width - 40,
    height: 55,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.black,
    shadowOpacity: .15,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
    marginVertical: 3


  },
  text: { position: 'absolute', right: 20, fontSize: 14, fontFamily: 'sans-plain' }


})

export default MenuCard;
