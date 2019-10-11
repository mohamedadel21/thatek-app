
import React ,{Component} from 'react';
import {AppRegistry,ActivityIndicator,Text,View,StyleSheet} from 'react-native';
import Colors from '../Constant/Colors';
const ActivityIndicator1 = (props) =>{
    return(
        <View style={styles.viewStyle}>
            <ActivityIndicator size={props.size} color={props.color} ></ActivityIndicator>
        </View>
    );
};


const styles=StyleSheet.create({

    viewStyle:{
       height:60,
       alignItems:'center',
       justifyContent:'center',
       shadowColor:Colors.black,
       shadowOpacity:.2,
       shadowOffset:{width:0,height:2},
       elevation:1

    },
    
});
export default ActivityIndicator1;