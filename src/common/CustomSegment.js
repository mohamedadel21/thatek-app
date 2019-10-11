import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, TextInput, FlatList } from 'react-native';
import { MaterialIcons, Ionicons, EvilIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import Colors from '../Constant/Colors';
import { } from '../actions'
const { width, height } = Dimensions.get('window')


class CustomSegment extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }



    render() {
        return (
            <View style={styles.mainView} >



                <TouchableOpacity style={[styles.segment1, { backgroundColor: this.props.backgroundColor1 }]}
                    onPress={this.props.onPressSegment1}
                >
                    <Text style={[styles.segmentText1, { color: this.props.color1, }]}>

                        {this.props.segmentText1}

                    </Text>

                </TouchableOpacity>


                <TouchableOpacity style={[styles.segment2, { backgroundColor: this.props.backgroundColor2 }]}
                    onPress={this.props.onPressSegment2}

                >

                    <Text style={[styles.segmentText2, { color: this.props.color2, }]}>
                        {this.props.segmentText2}
                    </Text>

                </TouchableOpacity>



            </View>
        );
    }
}


const styles = StyleSheet.create({

    mainView: {
        width: width - 40,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
        borderColor: Colors.darkGreen,
        borderWidth: 1,
        borderRadius: 50,
        marginVertical: 20
    },
    segment1: {
        width: (width - 40) / 2,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 50,
        height: 40,
    }
    , segmentText1: {
        fontFamily: 'sans-bold',
        fontSize: 13,
        textAlign: 'center',
    },
    segment2: {
        width: (width - 40) / 2,
        justifyContent: "center",
        alignItems: 'center'
        , borderRadius: 50,
        height: 40,
    },
    segmentText2: {
        fontFamily: 'sans-bold',
        fontSize: 13,
        textAlign: 'center',
    }


});

export default CustomSegment;
