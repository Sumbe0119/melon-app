import React from "react";
import {Text, View, StyleSheet, Image, Dimensions} from "react-native";
import MelonNavigation from "../../lib/MelonNavigation";
import AppStyle from "../../lib/AppStyle";


const screenWidth = Math.round(Dimensions.get('window').width);


const Support = ({navigation}) => {
    return (
        <MelonNavigation loading={false} resultCode={200} navigation={navigation} headTitle={'Тусламж'} back={true}>
            <View style={styles.contain}>
                <Text style={styles.topText}>Хэрэгцээт холбоос</Text>
                <View style={styles.top}>
                    <View style={styles.topLeft}>
                        <Text numberOfLines={3}
                              style={styles.topLeftText}>Та
                            манай сайттай холбоотой санал хүсэлтээ илгээх бол энд дарна уу</Text>
                    </View>

                    <Image style={{
                        height: 35,
                        width: 35,
                        tintColor: '#D4CECE'
                    }}
                           source={require('../../../assets/images/icon/mail.png')}/>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.bottomBox}>
                        <Image style={{
                            height: 24,
                            width: 24,
                            marginRight: 15
                        }}
                               source={require('../../../assets/images/icon/telegram.png')}/>
                        <Text style={styles.text}>Telegram</Text>
                    </View>
                    <View style={styles.bottomBox}>
                        <Image style={{
                            height: 24,
                            width: 24,
                            marginRight: 15
                        }}
                               source={require('../../../assets/images/icon/messenger.png')}/>
                        <Text style={styles.text}>Messenger</Text>
                    </View>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.bottomBox}>
                        <Image style={{
                            height: 24,
                            width: 24,
                            marginRight: 15
                        }}
                               source={require('../../../assets/images/icon/facebook.png')}/>
                        <Text style={styles.text}>Facebook</Text>
                    </View>
                    <View style={styles.bottomBox}>
                        <Image style={{
                            height: 24,
                            width: 24,
                            marginRight: 15
                        }}
                               source={require('../../../assets/images/icon/youtube.png')}/>
                        <Text style={styles.text}>Telegram</Text>
                    </View>
                </View>

                <Text style={{color: '#808082', fontFamily: AppStyle.DEFAULT.font.mediumSF, marginTop: 20}}>MELON ID:
                    106018549</Text>
                <Text style={{color: '#808082', fontFamily: AppStyle.DEFAULT.font.mediumSF, marginTop: 10}}>Application
                    version:
                    1.1.1</Text>

            </View>
        </MelonNavigation>
    )
}

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        marginHorizontal: 15
    },
    topText: {
        color: '#fff', marginBottom: 20, marginTop: 10, fontSize: 16, fontFamily: AppStyle.DEFAULT.font.bold
    },
    top: {
        paddingHorizontal: 20,
        paddingVertical: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: screenWidth - 30,
        backgroundColor: '#141416',
        borderRadius: 10,
        marginBottom: 10
    },
    topLeft: {
        width: screenWidth - 120
    },
    topLeftText: {
        color: '#808082', fontFamily: AppStyle.DEFAULT.font.bold, lineHeight: 20
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bottomBox: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        width: (screenWidth / 2) - 20,
        backgroundColor: '#141416',
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#fff',
        fontFamily: AppStyle.DEFAULT.font.bold,
    }
})

export default Support