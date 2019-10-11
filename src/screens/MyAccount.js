import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { MaterialIcons, Ionicons, EvilIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import Colors from '../Constant/Colors';
import Header from '../common/Header'
import { connect } from 'react-redux'
import {  } from '../actions'
const { width, height } = Dimensions.get('window')

class MyAccount extends Component {

    constructor(props) {

        super(props);
        this.state = {


        };

    }

    componentWillMount() {
    }

    componentWillReceiveProps(props) {


    }

   

    render() {


        return (
            <View style={styles.mainView}>

                <Header onPress={() => this.props.navigation.goBack()} text='' />

                <ScrollView

                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start', alignItems: 'center' }} >

                   


                </ScrollView>

            </View>
        );
    }
}


const styles = StyleSheet.create({

    mainView: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: Colors.white
    },
    
});

const mapStateToProps = ({ newUser, }) => {
    return {

        accessToken: newUser.accessToken,


    }
};

export default connect(mapStateToProps, {})(MyAccount)
