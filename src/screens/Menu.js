import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, TextInput ,Linking,BackHandler,Alert} from 'react-native';
import { MaterialIcons, Ionicons, EvilIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import Colors from '../Constant/Colors';
import Header from '../common/Header'
import MenuCard from '../common/MenuCard'
import SocialCard from '../common/SocialCard'
import { connect } from 'react-redux'
import { WebBrowser } from 'expo'
import { Config } from '../Constant/Config'
const { width, height } = Dimensions.get('window')

class Menu extends Component {

    constructor(props) {

        super(props);
        this.state = {


        };
        
    }

   
    handleBackButton = () => {
        BackHandler.exitApp()
         return true;
       } 
       
    componentWillMount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentDidMount(){
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);

    }

    componentWillReceiveProps(props) {


    }
   

    render() {
        const data=[
            {text:'عن الاختبار'    , url :'https://thatek.com/about-test'  },
            {text:'الأسئلة الشائعة', url :'https://thatek.com/faq'  },
            {text:'خصوصية النتائج' , url :'https://thatek.com/privacy-policy' },
            {text:'شروط و أحكام'   , url :'https://thatek.com/terms' },
            {text:'خطط الأسعار'    , url :'https://thatek.com/plans'  },
            {text:'عن تطبيق ذاتك'  , url :'https://thatek.com/about-us' },
            {text:'اتصل بنا'       , url :'contactus' },
        ]

        return (
            <View style={styles.mainView}>

                <Header onPress={() => this.props.navigation.goBack()} text='القائمة' />

                <ScrollView

                    contentContainerStyle={{ flexGrow: 1,marginTop:20, justifyContent: 'flex-start', alignItems: 'center' }} >

                    {
                        data.map((item,index)=>{
                            return(
                                <MenuCard 
                                key={index} 
                                text={item.text}
                                onPress={()=>{
                                    if(item.url=='contactus'){
                                        this.props.navigation.navigate('ContactUs')
                                    }else{
                                        WebBrowser.openBrowserAsync(item.url);
                                        
                                    }
                                }}  
                                />
   
                            )
                        })
                    }
                   
                   <View style={styles.social}>
                   
                   <SocialCard
                     iconName='instagram'
                     iconColor={Colors.darkGreen}
                     iconSize={20}
                     borderColor={Colors.darkGreen}
                     onPress={()=>{
                        Linking.openURL(Config.instagramPage)
                     }}
                    />  
                   <SocialCard
                     iconName='twitter'
                     iconColor={Colors.darkGreen}
                     iconSize={20}
                     marginLeft={15}
                     borderColor={Colors.darkGreen}
                     onPress={()=>{
                        Linking.openURL(Config.twitterPage)
                     }}
                    />

                    <SocialCard
                     iconName2='sc-facebook'
                     iconColor2={Colors.darkGreen}
                     iconSize2={25}
                     marginLeft={15}
                     borderColor={Colors.darkGreen}
                     onPress={()=>{
                        Linking.openURL(Config.facebookPage)
                     }}
                    />
                   </View>


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
        backgroundColor: '#f0f0f040'
    },
    social:{flexDirection:'row',justifyContent:'center',alignItems:'center',width,marginVertical:25}
});

const mapStateToProps = ({ newUser, }) => {
    return {

        accessToken: newUser.accessToken,


    }
};

export default connect(mapStateToProps, {})(Menu)
