import React from 'react'
import {Text, View, StyleSheet, Dimensions, Image, TouchableOpacity} from "react-native";
import MelonNavigation from "../../lib/MelonNavigation";
import AppStyle from "../../lib/AppStyle";

import Constants from 'expo-constants';


const screenWidth = Math.round(Dimensions.get('window').width);

const Profile = ({navigation}) => {
    return (

        <View style={{flex: 1, backgroundColor: '#000'}}>
            {/*<Text style={{paddingTop: Constants.statusBarHeight +45, color: '#fff', fontFamily: AppStyle.DEFAULT.font.bold, fontSize: 18, marginLeft: 15,marginBottom: 20}}>Profile</Text>*/}
            <View style={styles.contain}>
                <View style={styles.top}>
                    <View style={{width: screenWidth - 120}}>
                        <Text style={{
                            color: '#fff',
                            fontFamily: AppStyle.DEFAULT.font.bold,
                            marginBottom: 5,
                            fontSize: 18
                        }}>Tuguldur Sumbe</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{color: '#808082', fontFamily: AppStyle.DEFAULT.font.mediumSF}}>MELON ID:
                                106018549</Text>
                        </View>
                        <Text style={{
                            color: '#fff',
                            fontFamily: AppStyle.DEFAULT.font.bold,
                            marginTop: 5
                        }}>t.sumbe01192@gmail.com</Text>
                    </View>
                    <View style={styles.avatar}>
                        <Text style={styles.avatarText}>M</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.middle}>
                    <Text style={styles.middleText}>Таалагдсан</Text>
                    <Image
                        style={{
                            height: 22,
                            width: 22,
                            tintColor: '#808082',
                            marginRight: 20
                        }}
                        source={require('../../../assets/images/icon/videos.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.middle}>
                    <Text style={styles.middleText}>Бонус урамшуулал</Text>
                    <Image
                        style={{
                            height: 22,
                            width: 22,
                            tintColor: '#808082',
                            marginRight: 20
                        }}
                        source={require('../../../assets/images/icon/gift.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.middle}>
                    <Text style={styles.middleText}>Насанд хүрэгчид</Text>
                    <Image
                        style={{
                            height: 22,
                            width: 22,
                            tintColor: '#808082',
                            marginRight: 20
                        }}
                        source={require('../../../assets/images/icon/security.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.middle} onPress={()=> navigation.navigate('settings')}>
                    <Text style={styles.middleText}>Тохиргоо</Text>
                    <Image
                        style={{
                            height: 22,
                            width: 22,
                            tintColor: '#808082',
                            marginRight: 20
                        }}
                        source={require('../../../assets/images/icon/settings.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.middle} onPress={()=> navigation.navigate('support')}>
                    <Text style={styles.middleText}>Тусламж</Text>
                    <Image
                        style={{
                            height: 22,
                            width: 22,
                            tintColor: '#808082',
                            marginRight: 20
                        }}
                        source={require('../../../assets/images/icon/supports.png')}/>
                </TouchableOpacity>
                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.subMiddle}>
                        <Text style={styles.bottomText}>Манайд үнэлгээ өгөх</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.subMiddle}>
                        <Text style={styles.bottomText}>Найзууддаа хуваалцах</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.subMiddle}>
                        <Text style={styles.bottomText}>Үйлчилгээний нөхцөл</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.subMiddle}>
                        <Text style={styles.bottomText}>Application version 2.0.0 </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.subMiddle}>
                        <Text style={{...styles.bottomText, color: '#109B84'}}>Системээс Гарах</Text>
                        <Image
                            style={{
                                height: 22,
                                width: 22,
                                tintColor: '#109B84',
                                marginRight: 20
                            }}
                            source={require('../../../assets/images/icon/logout.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    contain: {
        marginHorizontal: 15
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 30,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#2F3035',
        paddingTop: Constants.statusBarHeight + 70
    },
    avatar: {
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: '#2F3035',
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatarText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: AppStyle.DEFAULT.font.bold
    },
    middle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#2F3035',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        paddingVertical: 15
    },
    middleText: {
        fontSize: 17,
        fontFamily: AppStyle.DEFAULT.font.bold,
        color: '#fff'
    },
    bottom: {
        marginTop: 15
    },
    bottomText: {
        color: '#808082',
        paddingVertical: 10,
        fontFamily: AppStyle.DEFAULT.font.light,
        fontSize: 14
    },
    subMiddle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5
    }

})

export default Profile