import React from "react";
import {Text, View, StyleSheet, Dimensions, TextInput} from "react-native";

import Constants from 'expo-constants';
import MelonNavigation from "../../lib/MelonNavigation";
import AppStyle from "../../lib/AppStyle";
import MelonButton from "../../lib/MelonButton";


const screenWidth = Math.round(Dimensions.get('window').width);

const ResetPassword = ({navigation}) => {
    return (
        <MelonNavigation loading={false} resultCode={200} navigation={navigation} headTitle={'Нууц үг сэргээх'}
                         back={true}>
            <View style={styles.contain}>
                <Text style={styles.text}>Бүртгэлтэй дугаар оруулна уу</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                    {
                        [1, 2, 3, 4, 5].map((item: any, index: number) => {
                            return (
                                <View key={index} style={styles.box}>
                                    <TextInput style={styles.input}/>
                                </View>
                            )
                        })
                    }

                </View>
                <MelonButton title={'Нууц үг солих'} type={'main'} style={styles.btn}/>
            </View>
        </MelonNavigation>

    )
}

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: '#000',
        paddingHorizontal: 15
    },
    text: {
        fontFamily: AppStyle.DEFAULT.font.bold,
        color: "#fff",
        fontSize: 16,
        marginTop: 10
    },
    box: {
        height: 50,
        width: (screenWidth / 6) - 10,
        backgroundColor: '#2F3035',
        borderRadius: 5
    },
    input: {
        flex: 1,
        paddingLeft: 20,
        color: '#fff',
        fontSize: 18,
        fontFamily: AppStyle.DEFAULT.font.mediumSF
    },
    btn:{
        marginTop: 40
    }

})


export default ResetPassword