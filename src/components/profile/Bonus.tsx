import React from "react";
import {Text, View, StyleSheet, Image} from "react-native";
import MelonNavigation from "../../lib/MelonNavigation";
import AppStyle from "../../lib/AppStyle";

const Bonus = ({navigation}) => {
    return (
        <MelonNavigation loading={false} resultCode={200} navigation={navigation} back={true}
                         headTitle={'Бонус урамшуулал'}>
            <View style={styles.contain}>
                <View style={styles.bonuses}>
                    <View style={{flexDirection: 'column', alignItems: 'center'}}>
                        <Image
                            style={{
                                height: 22,
                                width: 22,
                                tintColor: '#fff'
                            }}
                            source={require('../../../assets/images/icon/melon-video.png')}/>
                        <View style={{flexDirection: 'column', alignItems: 'center'}}>
                            <Text style={styles.topText}>Киногоо</Text>
                            <Text style={{...styles.topText, marginTop: -2}}>үзээд</Text>
                        </View>
                    </View>
                    <Image
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: '#808082',
                            marginTop: -40
                        }}
                        source={require('../../../assets/images/icon/right-arrow.png')}/>
                    <View style={{flexDirection: 'column', alignItems: 'center'}}>
                        <Image
                            style={{
                                height: 22,
                                width: 22,
                                tintColor: '#fff'
                            }}
                            source={require('../../../assets/images/icon/incentive.png')}/>
                        <View style={{flexDirection: 'column', alignItems: 'center'}}>
                            <Text style={styles.topText}>Оноогоо</Text>
                            <Text style={{...styles.topText, marginTop: -2}}>цуглуулж</Text>
                        </View>
                    </View>
                    <Image
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: '#808082',
                            marginTop: -40
                        }}
                        source={require('../../../assets/images/icon/right-arrow.png')}/>
                    <View style={{flexDirection: 'column', alignItems: 'center'}}>
                        <Image
                            style={{
                                height: 35,
                                width: 35,
                                marginBottom: -10,
                                tintColor: '#fff'
                            }}
                            source={require('../../../assets/images/icon/shopping-bag.png')}/>
                        <View style={{flexDirection: 'column', alignItems: 'center'}}>
                            <Text style={styles.topText}>Үнэгүй</Text>
                            <Text style={{...styles.topText, marginTop: -2}}>үзрээй</Text>
                        </View>
                    </View>
                </View>
                <Text style={styles.bonusNumber}>Таньд үнэгүй кино үзэх</Text>
                <View style={styles.bonusBox}>
                    <View style={{flexDirection: 'row'}}>
                        {
                            [1, 2, 3].map((item: any, index: number) => {
                                return (
                                    <View key={index}>
                                        <Image
                                            style={{
                                                height: 22,
                                                width: 22,
                                                marginRight: 5
                                            }}
                                            source={require('../../../assets/images/icon/gift-box.png')}/>
                                    </View>
                                )
                            })
                        }
                    </View>
                    <Text style={styles.bonus}>3 эрх байна</Text>
                </View>
                <Text style={styles.text}>Та манай видео сангаас кино үзэж урамшуулал аван үнэгүй кино үзэж мөн өөрийн эрхээ бэлэглэх шилжүүлэх боломжтой юм. </Text>
             <View style={{flexDirection:'row'}}>
                 <Text style={styles.text}>Их үзвэл их урамшуулал</Text>
                 <Text style={{...styles.text, fontFamily: AppStyle.DEFAULT.font.bold, marginLeft: 5}}> We are MELON!</Text>
             </View>
            </View>
        </MelonNavigation>

    )
}
const styles = StyleSheet.create({
    contain: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 10,
    },
    bonuses: {
        flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20,marginBottom: 15
    },
    text: {
        color: '#fff',
        fontFamily: AppStyle.DEFAULT.font.light,
        textAlign: 'justify',
        marginBottom: 10
    },
    bonusNumber: {
        fontFamily: AppStyle.DEFAULT.font.bold,
        fontSize: 16,
        color: '#fff',
        marginBottom: 10,
        marginTop: 30,
    },
    topText: {
        color: '#fff',
        fontSize: 14,
        fontFamily: AppStyle.DEFAULT.font.light,
        marginTop: 15
    },
    bonus:{
        color: '#fff',
        fontFamily: AppStyle.DEFAULT.font.mediumSF,
        fontSize: 14,
        marginLeft: 10
    },
    bonusBox:{
        flexDirection: 'row', alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: "#2F3035",
        paddingBottom: 25,
        marginBottom: 25
    }
})

export default Bonus