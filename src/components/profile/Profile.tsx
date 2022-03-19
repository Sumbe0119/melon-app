import React from 'react'
import {Text, View, StyleSheet, Dimensions, Image} from "react-native";
import MelonNavigation from "../../lib/MelonNavigation";
import AppStyle from "../../lib/AppStyle";


const screenWidth = Math.round(Dimensions.get('window').width);

const Profile = ({navigation}) => {
    return (
        <MelonNavigation navigation={navigation} back={true} headTitle={'Profile'} loading={false} reloadAction={() => {
        }} resultCode={200}>
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
                            <Text style={{color: '#808082', fontFamily:AppStyle.DEFAULT.font.mediumSF}}>MELON ID: 106018549</Text>
                            <Text style={{
                                color: '#109B84',
                                marginLeft: 20,
                                fontFamily: AppStyle.DEFAULT.font.medium
                            }}>Sign out</Text>
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
                <View style={styles.middle}>
                    <Text style={styles.middleText}>Subsctiptions</Text>
                    <Image
                        style={{
                            height: 22,
                            width: 22,
                            tintColor: '#808082',
                            marginRight: 20
                        }}
                        source={require('../../../assets/images/icon/videos.png')}/>
                </View>
                <View style={styles.middle}>
                    <Text style={styles.middleText}>Bonus and Gifts</Text>
                    <Image
                        style={{
                            height: 22,
                            width: 22,
                            tintColor: '#808082',
                            marginRight: 20
                        }}
                        source={require('../../../assets/images/icon/gift.png')}/>
                </View>
                <View style={styles.middle}>
                    <Text style={styles.middleText}>Personal control</Text>
                    <Image
                        style={{
                            height: 22,
                            width: 22,
                            tintColor: '#808082',
                            marginRight: 20
                        }}
                        source={require('../../../assets/images/icon/security.png')}/>
                </View>
                <View style={styles.middle}>
                    <Text style={styles.middleText}>Settings</Text>
                    <Image
                        style={{
                            height: 22,
                            width: 22,
                            tintColor: '#808082',
                            marginRight: 20
                        }}
                        source={require('../../../assets/images/icon/settings.png')}/>
                </View>
                <View style={styles.middle}>
                    <Text style={styles.middleText}>Your supports</Text>
                    <Image
                        style={{
                            height: 22,
                            width: 22,
                            tintColor: '#808082',
                            marginRight: 20
                        }}
                        source={require('../../../assets/images/icon/supports.png')}/>
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.bottomText}>Манайд үнэлгээ өгөх</Text>
                    <Text style={styles.bottomText}>Найзууддаа хуваалцах</Text>
                    <Text style={styles.bottomText}>Үйлчилгээний нөхцөл</Text>
                    <Text style={styles.bottomText}>Application version 2.0.0 </Text>
                </View>
            </View>

        </MelonNavigation>
    )
}

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: '#000',
        marginHorizontal: 15
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 30,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#2F3035'
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
        fontSize: 18,
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
    }

})

export default Profile