import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { MaterialIcons, Ionicons, EvilIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import Colors from '../Constant/Colors';
import { connect } from 'react-redux'
import { Tooltip } from 'react-native-elements'
const { width, height } = Dimensions.get('window')


class PickerItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  showError = () => {

    if (this.props.error) {
        return (
            <View style={styles.errorBack}>
                <Text style={styles.errorText}>{this.props.error}</Text>
            </View>
        )
    }

}

showToolTip =()=>{
    if(this.props.showToolTip){
        return(
                    <Tooltip
                        popover={<Text style={styles.tooltip}>{this.props.tooltipValue}</Text>}>
    
                        <Image style={{ width: 20, height: 20 }} source={require('../../assets/info.png')} />
                    </Tooltip>
    
        )
    }else return;
   
}

  render() {

    return (

        <View style={{ width: width - 40, marginTop: this.props.marginTop,marginBottom:this.props.marginBottom }}>

               <View style={styles.pickerheaderStyle}>
                    {this.showToolTip()}
                    <Text style={[styles.pickerheader,{ color:this.props.tooltipColor,}]}>{this.props.tooltip}</Text>
                </View>
    
            <View style={styles.picherView} >
                <TouchableOpacity
                    style={styles.pickerButton}
                    onPress={this.props.onPress}
                >

                    <EvilIcons name='chevron-down' size={25} color={Colors.darkGrey} />
                    <Text style={[styles.pickerResultText,{color:this.props.textColor,}]}>{this.props.value}</Text>

                </TouchableOpacity>

            </View>

            {this.showError()}

        </View>
    )
  }

}


const styles = StyleSheet.create({
    pickerheader: {
        fontFamily: 'sans-plain',
        fontSize: 13,
        marginLeft: 5
    },
    pickerResultText: {
        fontFamily: 'sans-plain'
        , fontSize: 13
        , position: 'absolute',
        right: 30
    }, picherView: {
        marginTop: 5,
        width: width - 40,
        borderRadius: 30,
        borderColor: Colors.lightGrey,
        borderWidth: 1,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    pickerItem: {
        color: Colors.darkGrey
        , fontFamily: 'sans-plain'
        , fontSize: 13
        , alignSelf: 'center',
        marginRight:40,
        height:20
    },
    pickerButton: {
        flexDirection: 'row',
        paddingLeft: 20,
        width: width - 40
        , margin: 10
    }, 
tooltip: {
    fontFamily: 'sans-plain', color: Colors.white, fontSize: 8
},
pickerheaderStyle: { alignSelf: 'flex-end', flexDirection: 'row', marginRight: 20 },
errorBack: {
    backgroundColor: Colors.white
    , borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: 17,
    marginTop: 3
},
errorText: {
    color: 'red'
    , fontSize: 10
    , fontFamily: 'sans-plain',
}

})

export default PickerItem;
