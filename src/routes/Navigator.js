import React from "react";
import { View, Text, Platform, Dimensions, BackHandler } from "react-native";
import { createStackNavigator } from 'react-navigation-stack';

import {  createAppContainer, createSwitchNavigator } from "react-navigation";
import { MaterialIcons, Ionicons, EvilIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import Button from '../common/Button';
import NavigationHeader from '../common/NavigationHeader';
import Splash from '../screens/Splash';
import StartTest from '../screens/StartTest';
import Attention from '../screens/Attention';
import Important from '../screens/Important';
import Questions from '../screens/Questions';
import ForgotPassword from '../screens/ForgotPassword';
import QuestionsImportant from '../screens/QuestionsImportant';
import Result from '../screens/Result';
import MainAuth from '../screens/Auth/MainAuth';
import ContactUs from '../screens/ContactUs';
import AddNameToCertification from '../screens/AddNameToCertification';
import ShareNotes from '../screens/ShareNotes';
import YourTests from '../screens/YourTests';
import MainTabs from './MainTabs';
import Colors from '../Constant/Colors';
const { width, height } = Dimensions.get('window')


const AppNavigator = createStackNavigator({

  splash: {
    screen: Splash,
    navigationOptions: {
      header: null
    }
  },
  StartTest: {
    screen: StartTest,

    navigationOptions: ({ navigation }) => ({
      headerLeft: null,
      headerRight: (
        <NavigationHeader
          title='خصص اختبارك في ثوانى !'
          navigation={navigation}
          onPress={() => {
            if (navigation.getParam('splash') == true) {
            }
            else {
              navigation.goBack();
            }
          }
          }
        />
      ),
      headerTitleStyle,
      headerStyle
    })

  },
  Attention: {
    screen: Attention,
    navigationOptions: {
      header: null
    }
  },
  Important: {
    screen: Important,
    navigationOptions: ({ navigation }) => ({
      headerLeft: null,
      headerRight: (
        <NavigationHeader
          title='هام'
          navigation={navigation}
          onPress={() => {
            if (navigation.getParam('splash') == true) {
            }
            else {
              navigation.navigate('StartTest')
            }
          }
          }
        />
      ),
      headerTitleStyle,
      headerStyle
    })
  },
  Questions: {
    screen: Questions,

    navigationOptions: ({ navigation }) => ({
      headerLeft: <Button
        text='المتابعة لاحقا'
        width={100}
        height={30}
        backgroundColor={Colors.none}
        borderRadius={50}
        fontFamily='sans-bold'
        fontSize={12}
        color={Colors.white}
        borderColor={Colors.white}
        borderWidth={1}
        marginLeft={20}
      />,
      headerRight: (
        <NavigationHeader
          title='اختبار انت و ذاتك'
          navigation={navigation}
          onPress={() => {
            if (navigation.getParam('splash') == true) {
            }
            else {
              navigation.goBack();
            }
          }
          }        />
      ),
      headerTitleStyle,
      headerStyle
    })


  },
  QuestionsImportant: {
    screen: QuestionsImportant,
    navigationOptions: {
      header: null
    }
  },
  Result: {
    screen: Result,

    navigationOptions: ({ navigation }) => ({
      headerLeft: null,
      headerRight: (
        <NavigationHeader
          title='اختبار انت و ذاتك - زائر'
          navigation={navigation}
          onPress={() => {
            if (navigation.getParam('splash') == true) {
            }
            else {
              navigation.goBack();
            }
          }
          }        />
      ),
      headerTitleStyle,
      headerStyle
    })


  },
  MainAuth: {
    screen: MainAuth,

    navigationOptions: ({ navigation }) => ({
      headerLeft: null,
      headerRight: (
        <NavigationHeader
          title='الى نتيجة الاختبار'
          navigation={navigation}
          onPress={() => {
            if (navigation.getParam('splash') == true) {
            }
            else {
              navigation.goBack();
            }
          }
          }        />
      ),
      headerTitleStyle,
      headerStyle
    })
  },
  ForgotPassword: {
    screen: ForgotPassword,
    navigationOptions: ({ navigation }) => ({
      headerLeft: null,
      headerRight: (
        <NavigationHeader
          title='تغيير كلمة المرور'
          navigation={navigation}
          onPress={() => {
            if (navigation.getParam('splash') == true) {
            }
            else {
              navigation.goBack();
            }
          }
          }        />
      ),
      headerTitleStyle,
      headerStyle
    })
  },
  ShareNotes: {
    screen: ShareNotes,
    navigationOptions: ({ navigation }) => ({
      headerLeft: null,
      headerRight: (
        <NavigationHeader
          title='شاركنا ملاحظاتك أو اقتراحاتك'
          navigation={navigation}
          onPress={() => {
            if (navigation.getParam('splash') == true) {
            }
            else {
              navigation.goBack();
            }
          }
          }        />
      ),
      headerTitleStyle,
      headerStyle
    })
  },
  ContactUs: {
    screen: ContactUs,
    navigationOptions: ({ navigation }) => ({
      headerLeft: null,
      headerRight: (
        <NavigationHeader
          title='اتصل بنا'
          navigation={navigation}
          onPress={() => {
            if (navigation.getParam('splash') == true) {
            }
            else {
              navigation.goBack();
            }
          }
          }        />
      ),
      headerTitleStyle,
      headerStyle
    })
  },
  YourTests: {
    screen: YourTests,
    navigationOptions: ({ navigation }) => ({
      headerLeft: null,
      headerRight: (
        <NavigationHeader
          title='العرض الشامل'
          navigation={navigation}
          onPress={() => {
            if (navigation.getParam('splash') == true) {
            }
            else {
              navigation.goBack();
            }
          }
          }        />
      ),
      headerTitleStyle,
      headerStyle
    })
  },
  MainTabs: {
    screen: MainTabs,
    navigationOptions: {
      header: null
    }
  },
  AddNameToCertification: {
    screen: AddNameToCertification,
    navigationOptions: {
      header: null
    }
  },
}, {
    initialRouteName: 'splash',


  }
);

const headerTitleStyle = {
  justifyContent: 'center',
  alignSelf: 'center',
  textAlign: 'center',
  marginLeft: Platform.OS == 'ios' ? '35%' : null,
  fontFamily: 'sans-plain',
  color: Colors.white,
}
const headerStyle = {
  backgroundColor: Colors.darkGreen,
  borderBottomWidth: 0,
  shadowColor: Colors.black,
  shadowOpacity: .2,
  shadowOffset: { width: 0, height: 2 },
  elevation: 3,
  paddingBottom: 10,

}

export default createAppContainer(AppNavigator);