import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Colors from '../Constant/Colors';
import { MaterialIcons, Ionicons, EvilIcons, FontAwesome, AntDesign } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window')

class SocialCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  showIcon =()=>{
  
    if(this.props.text){
      return(
        
        <Text style={{ color: this.props.color, margin: this.props.margin, fontSize: this.props.fontSize, fontFamily: this.props.fontFamily, fontWeight: this.props.fontWeight }}>{this.props.text}</Text>

      )
    }else  if(this.props.iconName){
      return(
        
     <AntDesign name={this.props.iconName} color={this.props.iconColor} size={this.props.iconSize} />  

      )
    }else if(this.props.iconName2){
      return(
        <EvilIcons name={this.props.iconName2} color={this.props.iconColor2} size={this.props.iconSize2} />  

      )
    }
    else if(this.props.iconName3){
      return(
        <FontAwesome name={this.props.iconName3} color={this.props.iconColor3} size={this.props.iconSize3} />  

      )
    }
  }

  render() {
    return (
      <TouchableOpacity style={[styles.main,{marginLeft:this.props.marginLeft,borderColor:this.props.borderColor}]} onPress={this.props.onPress}>
        {this.showIcon()}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({

  main: {

    width:45,
    height:45,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:1,
    borderRadius:50
    


  },


})

export default SocialCard;
