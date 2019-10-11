import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, TextInput, FlatList } from 'react-native';
import { MaterialIcons, Ionicons, EvilIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import Colors from '../Constant/Colors';
import { connect } from 'react-redux'
import { GLView, Asset, BlurView, Constants } from 'expo'
const { width, height } = Dimensions.get('window')



class Certificate extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (

      <View style={[styles.main,{marginTop: this.props.marginTop, height: this.props.height , width: this.props.width}]}>

        <Image style={{height: this.props.height, width: this.props.height}} source={require('../../assets/certificate-pattern.png')} />
        <Image style={[styles.topLeft,{height:this.props.imageHeigh,width:this.props.topImageWidth}]} source={require('../../assets/certificate-top-left.png')} />
        <Image style={[styles.topRight,{height:this.props.imageHeigh,width:this.props.topImageWidth}]} source={require('../../assets/certificate-top-right.png')} />
        <Image style={[styles.bottomLeft,{height:this.props.imageHeigh,width:this.props.bottomImageWidth}]} source={require('../../assets/certificate-bottom-left.png')} />
        <Image style={[styles.bottomRight,{height:this.props.imageHeigh,width:this.props.bottomImageWidth}]} source={require('../../assets/certificate-bottom-right.png')} />

        <Image style={styles.logo} source={require('../../assets/logo_white_ios_512.png')} />

        <View style={[styles.view,{top:this.props.ViewTop}]}>
          <Text style={styles.CertificateText} >شهادة تقديرية</Text>
          <Text style={[styles.honorText,{marginTop:this.props.textMarginTop}]} >يتشرف موقع ذاتك، بتقديم هذه الشهادة لــ</Text>
          <Text style={[styles.name,{marginTop:this.props.textMarginTop}]} >{this.props.name}</Text>

          <Text style={[styles.text,{marginTop:this.props.textMarginTop}]} >وذلك بعد اتمامه اختبار "أنت وذاتك" وكانت نقاط قوته في نتيجة الاختبار:</Text>
          <Text style={styles.powerPoints} >{this.props.powerPoints}</Text>

          <Text style={[styles.text3,{marginTop:this.props.textMarginTop}]} >وقد أُعطيَتْ هذه الشهادة التقديرية بناءً على طلبه</Text>

          <View style={[styles.view2,{marginTop:this.props.viewMarginTop,width:this.props.viewWidth}]}>

            <View style={styles.view3}>
              <Text style={styles.doctorName} >الدكتور ممدوح البدوي</Text>
              <Text style={styles.doctorTitle} >استشاري علم النفس الشخصية</Text>
              <Image style={styles.signature} source={require('../../assets/signature.png')} />

            </View>

            <View style={styles.view4}>
              <View style={styles.view5}>
                <Text style={styles.CertificateNumber} >{this.props.number}</Text>
                <Text style={styles.CertificateNumberText} >رقم الشهادة:</Text>
              </View>

              <View style={styles.view6}>
                <Text style={styles.CertificateDate} >{this.props.date}</Text>
                <Text style={styles.CertificateDateText} >تاريخ اصدار الشهادة:</Text>
              </View>

            </View>

          </View>
        </View>


      </View>

    );
  }
}

const styles = StyleSheet.create({
  main: {
   
     borderRadius: 10
    , backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOpacity: .1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  doctorTitle: { fontFamily: 'sans-bold', fontSize: 3.8, color: Colors.grey },
  doctorName: { fontFamily: 'sans-bold', fontSize: 5, color: Colors.black }
  , view: {
    width: width - 40,
    position: 'absolute',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  view2: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  }, view3: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    position: 'absolute',
    left: 10

  },
  view4: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    position: 'absolute',
    right: 10

  },
  view5: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'

  },
  view6:{
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'

  },
  text: { fontFamily: 'sans-bold', fontSize: 7, color: Colors.darkGrey,},
  powerPoints: { fontFamily: 'sans-bold', fontSize: 7, color: Colors.darkGrey ,textAlign:'center',width:width-70},
  text3: { fontFamily: 'sans-bold', fontSize: 7, color: Colors.darkGreen, },
  notBlurred: {
    ...StyleSheet.absoluteFill,
 

  },
  topLeft: {  position: 'absolute', top: 10, left: 10 }
  , topRight: {  position: 'absolute', top: 10, right: 10 },
  bottomLeft: {  position: 'absolute', bottom: 10, left: 10 },
  bottomRight: {  position: 'absolute', bottom: 10, right: 10 },
  logo: { height: 30, width: 30, position: 'absolute', bottom: 20 },
  signature: { height: 25, width: 50,  },
  CertificateText: { fontFamily: 'shilia-medium', fontSize: 13, color: Colors.darkGreen },
  honorText: { fontFamily: 'sans-bold', fontSize: 7, color: Colors.darkGrey },
  name: { fontFamily: 'sans-bold', fontSize: 17, color: Colors.darkGreen, },
  CertificateNumber: { fontFamily: 'sans-bold', fontSize: 5, color: Colors.grey,marginRight:2 },
  CertificateDate: { fontFamily: 'sans-bold', fontSize: 5, color: Colors.grey ,marginRight:2},
  CertificateNumberText: { fontFamily: 'sans-bold', fontSize: 5, color: Colors.grey},
  CertificateDateText: { fontFamily: 'sans-bold', fontSize: 5, color: Colors.grey}
})

export default Certificate;
