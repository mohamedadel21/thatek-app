import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, TextInput, FlatList } from 'react-native';
import { MaterialIcons, Ionicons, EvilIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import Colors from '../Constant/Colors';
import Header from './Header'
import Indicator from '../common/Indicator'
import { connect } from 'react-redux'
import { } from '../actions'
const { width, height } = Dimensions.get('window')


class Button extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    showRightIcon =()=>{
        if (this.props.rightIconName) {
            return(
                <EvilIcons name={this.props.rightIconName} color={this.props.rightIconColor} size={this.props.rightIconSize} />

            )
        }else if (this.props.rightIconName2) {
            return(
                <AntDesign name={this.props.rightIconName2} color={this.props.rightIconColor2} size={this.props.rightIconSize2} />
            )
        } 
    }

    showButtonContent =()=>{
        if (this.props.showIndicator) {
            return(
                <Indicator color={this.props.indicatorColor} size={this.props.indicatorSize}/>
            )
        }else{
            return(
                <View style={
                    {
                       
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                      
    
                    }
                }
                    onPress={this.props.onPress}
                >
    
                    <EvilIcons name={this.props.leftIconName} color={this.props.leftIconColor} size={this.props.leftIconSize} />
    
                    <Text style={{ color: this.props.color, margin: this.props.margin, fontSize: this.props.fontSize, fontFamily: this.props.fontFamily, fontWeight: this.props.fontWeight }}>{this.props.text}</Text>

                    {this.showRightIcon()}
                    
    
                </View>
            )
        }
    }

    render() {
        return (
            <TouchableOpacity style={
                {
                    width: this.props.width,
                    height: this.props.height,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: this.props.backgroundColor,
                    borderColor: this.props.borderColor,
                    borderWidth: this.props.borderWidth,
                    borderRadius: this.props.borderRadius,
                    marginBottom: this.props.marginBottom,
                    marginRight: this.props.marginRight,
                    marginTop: this.props.marginTop,
                    marginLeft: this.props.marginLeft,
                    alignSelf:this.props.alignSelf

                }
            }
                onPress={this.props.onPress}
            >

              {this.showButtonContent()}
              
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({

    mainView: {

    },


});

export default Button;
