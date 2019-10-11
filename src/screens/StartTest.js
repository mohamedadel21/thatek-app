import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView, TextInput,BackHandler,Alert } from 'react-native';
import { MaterialIcons, Ionicons, EvilIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import Colors from '../Constant/Colors';
import Header from '../common/Header'
import PickerItem from '../common/PickerItem'
import Button from '../common/Button'
import { connect } from 'react-redux'
import { birthYear } from '../Constant/Arrays'
import { getCountriesAndRelegion, saveNewUser } from '../actions'
import Toast, { DURATION } from 'react-native-easy-toast';
const { width, height } = Dimensions.get('window')
import KeyboardSpacer from 'react-native-keyboard-spacer';


class StartTest extends Component {
    constructor(props) {
        super(props);
        this.state = {

            loading:false,
            enableScrollViewScroll: true,

            maleButtonSelectedBorderColor: Colors.darkGreen,
            femaleButtonSelectedBorderColor: Colors.white,
            maleButtonSelectedColor: Colors.darkGreen,
            femaleButtonSelectedColor: Colors.black,
            selectedGender: 'm',

            search: '',
            birthYear: 'اختار من هنا',
            birthYearError: null,

            country: 'اختار من هنا',
            countryId: null,
            countryError: null,

            relegion: 'اختار من هنا',
            relegionId: null,
            relegionError: null,

            selectedPickerIndex: 0,
            selectedPickerText: '',


            pickerList: [],



        };


    }

    handleBackButton = () => {
        BackHandler.exitApp()
         return true;
       } 
       
    componentWillMount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
        this.props.getCountriesAndRelegion()
    }

    componentDidMount(){
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);

    }


    onEnableScroll = (value) => {
        this.setState({
            enableScrollViewScroll: value,
        });
    };



    selectPicker = (value, text) => {
        console.log(value + text);

        if (value == 1) {
            this.setState({ selectedPickerIndex: value, pickerList: birthYear, selectedPickerText: text, birthYearError: null })

        } else if (value == 2) {
            this.setState({ selectedPickerIndex: value, pickerList: this.props.countries, selectedPickerText: text, countryError: null })

        }
        else if (value == 3) {
            this.setState({ selectedPickerIndex: value, pickerList: this.props.religions, selectedPickerText: text, relegionError: null })

        }
        else if (value == 0) {
            this.setState({ selectedPickerIndex: value })

        }
    }



    Picker = (value, list) => {

        if (this.state.selectedPickerIndex == 0) {
            return;
        } else if (this.state.selectedPickerIndex != 0) {

            return (
                <View style={styles.picker}>

                    <TextInput
                        // placeholder='enter text'
                        style={styles.searchInput}
                        onChangeText={(search) => {
                            this.setState({ search })
                        }}
                    />


                    <ScrollView
                        contentContainerStyle={styles.pickerScroll}
                        onTouchStart={() => {
                            this.onEnableScroll(false);
                        }}
                        onMomentumScrollEnd={() => {
                            this.onEnableScroll(true);
                        }}
                    >
                        {

                            list.map((item, i) => {
                                if (item.name) {
                                    if (item.name.includes(this.state.search)) {

                                        return (
                                            <TouchableOpacity
                                                key={i}
                                                style={{ height: 35 }}
                                                onPress={() => {

                                                    if (value == 2) {
                                                        this.setState({ country: item.name, countryId: item.id, enableScrollViewScroll: true, selectedPickerIndex: 0, search: '' })
                                                    }
                                                    if (value == 3) {
                                                        this.setState({ relegion: item.name, relegionId: item.id, enableScrollViewScroll: true, selectedPickerIndex: 0, search: '' })
                                                    }

                                                }}>
                                                <Text style={styles.pickerItem}>{item.name}</Text>
                                            </TouchableOpacity>
                                        )
                                    }
                                } else if (!item.name) {

                                    if (item.includes(this.state.search)) {

                                        return (
                                            <TouchableOpacity
                                                key={i}
                                                style={{ height: 35 }}
                                                onPress={() => {

                                                    if (value == 1) {
                                                        this.setState({ birthYear: item, enableScrollViewScroll: true, selectedPickerIndex: 0, search: '' })

                                                    }
                                                }}>
                                                <Text style={styles.pickerItem}>{item}</Text>
                                            </TouchableOpacity>
                                        )
                                    }
                                }

                            })
                        }

                    </ScrollView>

                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: Colors.none, width, height: 50, position:'absolute',bottom:0}}>
                        <TouchableOpacity style={{ position: 'absolute', marginLeft: 25, height: 30, width: 30 }}
                            onPress={() => {
                                this.selectPicker(0)
                            }}
                        >
                            <EvilIcons name='chevron-up' size={30} color={Colors.black} />

                        </TouchableOpacity>

                        <Text style={styles.selectedPickerText}>{this.state.selectedPickerText}</Text>

                    </View>

                </View>
            )
        }


    }


    componentWillReceiveProps(props) {

        if (props.accessToken) {
            this.setState({loading:false})

            if (this.state.relegion!='اختار من هنا') {
                if (this.state.relegion == 'الإسلام - السنة' || this.state.relegion == 'الإسلام - الشيعة' || this.state.relegion == 'الطوائف الإسلامية الأخرى') {

                    this.props.navigation.navigate('Important')
    
                } else {
                    this.props.navigation.navigate('Attention')
    
                }  
            }

        }else this.setState({loading:false})
    }

    render() {

        const { femaleButtonSelectedBorderColor, maleButtonSelectedBorderColor, selectedGender, maleButtonSelectedColor, femaleButtonSelectedColor } = this.state

        return (

            <View style={styles.main}>

                <Toast ref="toast" />

                <ScrollView
                    scrollEnabled={this.state.enableScrollViewScroll}

                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start', alignItems: 'center' }}
                >
                    <Text style={[styles.instructionText]}>قم بتعبئة البيانات لكي تحصل علي{'\n'} محتوى يناسبك</Text>

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'row'
                        , marginTop: 20
                    }}>


                        <TouchableOpacity style={[styles.femaleButton, { borderColor: femaleButtonSelectedBorderColor }]}
                            onPress={() => {
                                this.setState({
                                    maleButtonSelectedBorderColor: Colors.white,
                                    femaleButtonSelectedBorderColor: Colors.darkGreen,
                                    maleButtonSelectedColor: Colors.black,
                                    femaleButtonSelectedColor: Colors.darkGreen,
                                    selectedGender: 'f'
                                })

                            }}
                        >

                            <Text style={[styles.femaleText, { color: femaleButtonSelectedColor }]}>أنثى</Text>

                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.maleButton, { borderColor: maleButtonSelectedBorderColor }]}

                            onPress={() => {

                                this.setState({
                                    maleButtonSelectedBorderColor: Colors.darkGreen,
                                    femaleButtonSelectedBorderColor: Colors.white,
                                    maleButtonSelectedColor: Colors.darkGreen,
                                    femaleButtonSelectedColor: Colors.black,
                                    selectedGender: 'm'
                                })

                            }}
                        >

                            <Text style={[styles.maleText, { color: maleButtonSelectedColor }]}>ذكر</Text>

                        </TouchableOpacity>
                    </View>

                    <PickerItem

                        marginTop={20}
                        value={this.state.birthYear}
                        tooltip='سنة الميلاد'
                        tooltipValue='لكى يتم عرض اسئلة و نتائج مناسبة'
                        error={this.state.birthYearError}
                        showToolTip={true}
                        tooltipColor={Colors.darkGrey}
                        textColor={Colors.darkGrey}
                        onPress={() => {
                            this.selectPicker(1, 'سنة الميلاد')
                        }}
                    />


                    <PickerItem

                        marginTop={20}
                        value={this.state.country}
                        tooltip='البلد'
                        tooltipValue='لعرض محتوى يناسب ثقافة بلدك'
                        error={this.state.countryError}
                        showToolTip={true}
                        tooltipColor={Colors.darkGrey}
                        textColor={Colors.darkGrey}
                        onPress={() => {
                            this.selectPicker(2, 'البلد')
                        }}
                    />


                    <PickerItem

                        marginTop={20}
                        value={this.state.relegion}
                        tooltip='المعتقد'
                        tooltipValue='لكى تحصل علي محتوى يناسب معتقداتك'
                        error={this.state.relegionError}
                        showToolTip={true}
                        tooltipColor={Colors.darkGrey}
                        textColor={Colors.darkGrey}
                        onPress={() => {
                            this.selectPicker(3, 'المعتقد')
                        }}
                    />
                <Text style={styles.relegionNote}>اختيار الديانة بدقة يبعد عنك الاسئلة و النصائح التي {'\n'}لا تناسب معتقداتك الدينية</Text>


                <Button
                    text='ابدأ الاختبار'
                    style={styles.button}
                    backgroundColor={Colors.darkGreen}
                    borderRadius={40}
                    width={175}
                    height={45}
                    alignSelf='center'
                    color={Colors.white}
                    showIndicator={this.state.loading}
                    indicatorColor={Colors.white}
                    indicatorSize='small'
                    fontFamily='sans-bold'
                    marginTop={20}

                        onPress={() => {

                            const { country, birthYear, relegion, selectedGender, relegionId, countryId } = this.state;

                            if (birthYear == 'اختار من هنا') {
                                this.setState({ birthYearError: 'من فضلك ادخل سنة الميلاد' })

                            }
                            else if (country == 'اختار من هنا') {
                                this.setState({ countryError: 'من فضلك ادخل البلد' })

                            }
                            else if (relegion == 'اختار من هنا') {
                                this.setState({ relegionError: 'من فضلك ادخل المعتقد' })

                            } else {
                                this.setState({loading:true})
                                this.props.saveNewUser(selectedGender, birthYear, countryId, relegionId);
                            }

                        }}
                    />

                       

                </ScrollView>

                {this.Picker(this.state.selectedPickerIndex, this.state.pickerList)}

                <KeyboardSpacer />

            </View>
        );
    }
}

const styles = StyleSheet.create({

    main: {
        flex: 1,

    },
    startTest: {
        backgroundColor: Colors.darkGreen
        , borderRadius: 40, width: 175, height: 50,
        alignSelf: 'center', marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    maleButton: {
        height: 110,
        width: 110, borderRadius: 70,
        backgroundColor: Colors.white,
        shadowColor: Colors.black,
        shadowOpacity: .2,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        borderWidth: 1

    },
    maleText: {
        fontFamily: 'sans-bold',
        fontSize: 15,
    },
    picker: {
        height: height / 3,
        width: width
        , backgroundColor: Colors.white,
        position: 'relative',
        bottom: 0,
        shadowColor: Colors.black,
        shadowOpacity: .2,
        shadowOffset: { width: 0, height: 2 },
        elevation: 6,
    },
    femaleButton: {
        height: 110,
        width: 110,
        borderRadius: 70,
        backgroundColor: Colors.white,
        shadowColor: Colors.black,
        shadowOpacity: .2,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1

    },
    femaleText: {
        fontFamily: 'sans-bold',
        fontSize: 15,
    },
    instructionText: {
        fontFamily: 'sans-plain',
        fontSize: 15,
        alignSelf: 'center',
        marginTop: 20,
        textAlign: 'center'
    }, pickerheader: {
        color: Colors.darkGrey,
        fontFamily: 'sans-plain',
        fontSize: 13,
        marginLeft: 5
    },
    pickerResultText: {
        color: Colors.darkGrey,
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
        height: 20
    },
    pickerButton: {
        flexDirection: 'row',
        paddingLeft: 20,
        width: width - 40
        , margin: 10
    }, relegionNote: {
        color: Colors.darkGreen,
        fontSize: 10,
        alignSelf: 'flex-end',
        marginTop: 5,
        fontFamily: 'sans-plain',
        textAlign: 'right',
        marginRight: 40
    },
    searchInput: {
        textAlign: 'center', fontFamily: 'sans-plain', fontSize: 13, width: width - 90,
        height: 30, alignSelf: 'center', borderColor: Colors.lightGrey, borderRadius: 50, borderWidth: 1,
        marginTop: 20
    },
    pickerScroll: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 40

    },
    selectedPickerText: { position: 'absolute', bottom: 20, right: 20, height: 30, fontFamily: 'sans-plain', color: Colors.black, fontSize: 13 },
    tooltip: {
        fontFamily: 'sans-plain', color: Colors.white, fontSize: 8
    },
    pickerheaderStyle: { alignSelf: 'flex-end', flexDirection: 'row', marginRight: 20 }

})


const mapStateToProps = ({ startTest, newUser }) => {
    return {

        countries: startTest.countries,
        religions: startTest.religions,
        accessToken: newUser.accessToken

    }
};

export default connect(mapStateToProps, { getCountriesAndRelegion, saveNewUser })(StartTest)
