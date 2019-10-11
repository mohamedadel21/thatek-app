import { MaterialIcons, Ionicons, EvilIcons, AntDesign, FontAwesome } from '@expo/vector-icons';


import Colors from '../Constant/Colors';
import Main from '../screens/Main';
import MyAccount from '../screens/MyAccount';
import Menu from '../screens/Menu';
import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

export default Tab = createMaterialTopTabNavigator({





    Menu: {
        screen: Menu,
        navigationOptions: () => ({
            title: 'القائمة',
            tabBarIcon: ({ tintColor }) => {
                return (
                    <EvilIcons
                        name='navicon'
                        size={20}
                        color={tintColor}
                    />
                );
            }
        })
    },


    Main: {
        screen: Main,
        navigationOptions: () => ({
            title: 'الرئيسية',
            tabBarIcon: ({ tintColor }) => {
                return (
                    <AntDesign
                        name='home'
                        size={20}
                        color={tintColor}
                    />
                );
            }
        })
    }

    ,


    MyAccount: {
        screen: MyAccount,
        navigationOptions: () => ({
            title: 'حسابي',
            tabBarIcon: ({ tintColor }) => {
                return (
                    <MaterialIcons
                        name='person'
                        size={20}
                        color={tintColor}
                    />
                );
            }
        })
    }
    ,


}
    ,


    {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            showIcon: true,
            showLabel: true,

            labelStyle: {
                fontSize: 12.5,
                backgroundColor: Colors.none,
                fontFamily: 'sans-plain',
                marginTop: -5
            },
            inactiveTintColor: Colors.black,
            activeTintColor: Colors.darkGreen,
            pressColor: Colors.darkGreen,
            activeBackgroundColor: Colors.darkGreen,
            indicatorStyle: { backgroundColor: Colors.darkGreen },
            style: {
                backgroundColor: Colors.white
                , elevation: 9
            },
            tabStyle: {
                backgroundColor: Colors.white,

            }

            ,



            allowFontScaling: true,
        },
    });

