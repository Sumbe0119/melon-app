import React from  'react'
import {Text, View, StyleSheet, TextInput, Dimensions, TouchableOpacity} from "react-native";
import MelonNavigation from "../../lib/MelonNavigation";
import MelonButton from "../../lib/MelonButton";
import DismissKeyboard from "../../lib/DismissKeyboard";
import AppStyle from "../../lib/AppStyle";




const screenWidth = Math.round(Dimensions.get('window').width);

const Login =({navigation})=>{
    return(
        <MelonNavigation navigation={navigation} back={true} headTitle={'Нэвтрэх'} loading={false} reloadAction={()=>{}} resultCode={200}>
            <DismissKeyboard>
                <View style={styles.contain}>
                    <View style={{marginBottom: 100}}>
                        <TextInput placeholderTextColor={'#808082'} placeholder={'Утасны дугаар'} style={styles.input}/>
                        <TextInput placeholderTextColor={'#808082'} placeholder={'Нууц үг'} style={styles.input}/>
                        <MelonButton title={'Нэвтрэх'} type={'main'} style={styles.btn}/>
                        <TouchableOpacity onPress={()=>navigation.navigate('resetPass')}>
                            <Text style={styles.passwordReset}>Нууц үг мартсан</Text>
                        </TouchableOpacity>
                    </View>
                    <MelonButton title={'Бүртгүүлэх'} type={'black'} style={styles.btnBottom} onPress={()=> navigation.navigate('reqister')}/>
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
    btnBottom:{
        position: 'absolute',
        bottom: 100,
        width: screenWidth - 80
    }
})

export default Login