import React, {useState} from "react";
import {Dimensions, Image, StyleSheet, Text, TextInput, View} from "react-native";
import MelonNavigation from "../../lib/MelonNavigation";
import AppStyle from "../../lib/AppStyle";
import DismissKeyboard from "../../lib/DismissKeyboard";
import MelonButton from "../../lib/MelonButton";

const screenWidth = Math.round(Dimensions.get('window').width)


interface Value {
    personalPass: any,
    personalPassConfig: any
}

const state: Value = {
    personalPass: '',
    personalPassConfig: ''
}

const PersonControl = ({navigation}) => {
    const [personalPass, setPersonalPass] = useState(state)
    const [personalPassConfig, setPersonalPassConfig] = useState(state)


    return (
        <MelonNavigation loading={false} navigation={navigation} headTitle={'Насан хүрэгчийн тохиргоо'} resultCode={200}
                         back={true} reloadAction={() => {
        }}>
            <DismissKeyboard>
                <View style={styles.contain}>
                    <Text style={styles.lockText}>+18 контент хязгаарлах нууц үг</Text>

                    <View style={styles.inputContainer}>
                        <Image
                            style={{
                                height: 22,
                                width: 22,
                                tintColor: '#808082',
                                marginRight: 20
                            }}
                            source={require('../../../assets/images/icon/gender.png')}/>
                        <TextInput style={styles.input} placeholder={'Хяналтын нууц үг'}
                                   placeholderTextColor={'#808082'} keyboardType={'numeric'}
                                   onChangeText={(personalPass) => setPersonalPass({
                                       ...state,
                                       personalPass: personalPass
                                   })}
                                   value={personalPass.personalPass}
                                   secureTextEntry={true}
                                   maxLength={4}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Image
                            style={{
                                height: 22,
                                width: 22,
                                tintColor: '#808082',
                                marginRight: 20
                            }}
                            source={require('../../../assets/images/icon/gender.png')}/>
                        <TextInput style={styles.input} placeholder={'Хяналтын нууц үг давтах'}
                                   placeholderTextColor={'#808082'} keyboardType={'numeric'}
                                   onChangeText={(personalPassConfig) => setPersonalPassConfig({
                                       ...state,
                                       personalPassConfig: personalPassConfig
                                   })}
                                   value={personalPassConfig.personalPassConfig}
                                   secureTextEntry={true}
                                   maxLength={4}
                        />
                    </View>
                    <MelonButton  style={styles.btn} title={'Хадгалах'} type={'main'}/>
                </View>
            </DismissKeyboard>
        </MelonNavigation>

    )
}
const styles = StyleSheet.create({
    contain: {
        flex: 1,
        paddingHorizontal: 15
    },
    lockText: {
        color: '#808082',
        fontFamily: AppStyle.DEFAULT.font.mediumSF,
        fontSize: 18,
        marginBottom: 30,
        marginTop: 10
    },
    inputContainer: {
        flexDirection: 'row',
        height: 45,
        width: screenWidth - 30,
        backgroundColor: '#141416',
        borderRadius: 5,
        alignItems: "center",
        paddingHorizontal: 20,
        marginBottom: 20
    },
    input: {
        flex: 1,
        color: '#fff'
    },
    btn:{
        marginTop: 10
    }

})

export default PersonControl