import React from  'react'
import {Text, View, StyleSheet, TextInput, Dimensions, TouchableOpacity} from "react-native";
import MelonNavigation from "../../lib/MelonNavigation";
import MelonButton from "../../lib/MelonButton";
import DismissKeyboard from "../../lib/DismissKeyboard";
import AppStyle from "../../lib/AppStyle";




const screenWidth = Math.round(Dimensions.get('window').width);

const Register =({navigation})=>{
    return(
        <MelonNavigation navigation={navigation} back={true} headTitle={'Бүртгүүлэх'} loading={false} reloadAction={()=>{}} resultCode={200}>
            <DismissKeyboard>
                <View style={styles.contain}>
                    <View style={{marginBottom: 100}}>
                        <TextInput placeholderTextColor={'#808082'} placeholder={'Утасны дугаар'} style={styles.input}/>
                        <TextInput placeholderTextColor={'#808082'} placeholder={'Нууц үг'} style={styles.input}/>
                        <TextInput placeholderTextColor={'#808082'} placeholder={'Нууц үг давтах'} style={styles.input}/>
                        <MelonButton title={'Бүртгүүлэх'} type={'main'} style={styles.btn} onPress={()=>navigation.navigate('home')}/>
                    </View>
                </View>
            </DismissKeyboard>
        </MelonNavigation>

    )
}


const styles = StyleSheet.create({
    contain: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input:{
        width: screenWidth  - 80,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: "#2F3035",
        fontFamily: AppStyle.DEFAULT.font.bold,
        marginBottom: 10,
        color: '#fff'
    },
    btn:{
        width: screenWidth -80,
        marginTop: 30
    },
    passwordReset:{
        color: '#fff',
        fontFamily: AppStyle.DEFAULT.font.medium,
        marginTop: 20,
        textAlign: 'right'
    },
})

export default Register