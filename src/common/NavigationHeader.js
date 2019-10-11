import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Colors from '../Constant/Colors';
import { MaterialIcons, Ionicons, EvilIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
const { width, height } = Dimensions.get('window')

class NavigationHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }



  render() {
    return (
    
    <View style={styles.view}>
    
    <Text style={styles.text}>{this.props.title}</Text>
      <TouchableOpacity style={{ marginRight:5}}
        onPress={this.props.onPress}>
        <EvilIcons name="chevron-right" size={35} color={Colors.white} />
      </TouchableOpacity>

    </View>);

  }
}

const styles = StyleSheet.create({
view:{ alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'center',  }
,text:{ color: Colors.white, fontFamily: 'sans-plain', fontSize: 17, }
})


export default NavigationHeader;
