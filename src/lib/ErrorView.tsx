import * as React from "react";
import {View,Image,Text} from "react-native";
import MelonButton from "./MelonButton";

interface ErrorProps {
    reload:Function,

    code?: number
}

export default ({reload,code}:ErrorProps) => {
    console.log("code:",code)
    let message = "Системд алдаа гарлаа та дахин оролдоно уу";
    if(code === 4){
        message = "Та нэвтрэх шаардлагатай"
    }
    return (
        <View style={{flex:1,justifyContent:'center',
            alignItems:'center',}}>
            {/*<LinearIcons style={{color:AppStyle.DEFAULT.color.main}} name={'hammer-wrench'} size={70} />*/}
            <Text numberOfLines={2} style={{textAlign:'center',paddingTop:15,paddingBottom:15}}>{message}</Text>
            <MelonButton title={'Дахин оролдох'} type={'main'} onPress={()=>reload()}/>
        </View>
    )
}