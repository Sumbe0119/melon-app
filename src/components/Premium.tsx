import React from "react";
import {Text, View, StyleSheet, Dimensions} from "react-native";
import MelonNavigation from "../lib/MelonNavigation";
import AppStyle from "../lib/AppStyle";
import MelonButton from "../lib/MelonButton";


const screenWidth = Math.round(Dimensions.get('window').width);

const Premium = () => {
    return (
        <View style={styles.contain}>
            <Text style={styles.topText}>PREMIUM эрх авсан байх хэрэгтэй</Text>
            <View style={styles.box}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                    <View style={{flexDirection: 'column', width: screenWidth - 140}}>
                        <Text style={styles.text}>Эрх ашиглах</Text>
                        <Text style={styles.textTop}>Кино болон TV суваг</Text>
                        <Text style={styles.textBottom}>37 телевизийн суваг, MOVIE BOX, ASIA BOX, SPORT BOX,HOLLYWOOD
                            BOX, HBO HD кино хадмал орчуулга болон аудио номтой</Text>
                    </View>
                    <View style={{flexDirection: "column", alignItems: 'flex-end'}}>
                        <View style={styles.promoBox}>
                            <Text style={styles.promoText}>PREMUIM</Text>
                        </View>
                        <Text style={styles.promoText}>FREE</Text>
                        <Text style={styles.promoTextBottom}>1 сар</Text>
                    </View>
                </View>
            </View>
            <MelonButton title={'Premium хэрэглэгч болох'} type={'main'} style={styles.btn}/>
        </View>
    )
}
const styles = StyleSheet.create({
    contain: {
        flex: 1
    },
    topText: {
        color: '#fff', fontFamily: AppStyle.DEFAULT.font.bold
    },
    box: {
        paddingHorizontal: 15,
        paddingVertical: 20,
        backgroundColor: "#141416",
        borderRadius: 10,
        marginTop: 20
    },
    text: {
        color: '#808082',
        fontFamily: AppStyle.DEFAULT.font.bold,
        fontSize: 12,
        marginBottom: 10
    },
    promoBox: {
        backgroundColor: '#E95259',
        paddingVertical: 5,
        paddingHorizontal: 8,
        borderRadius: 5,
        marginBottom: 10
    },
    promoText: {
        color: '#fff',
        fontFamily: AppStyle.DEFAULT.font.bold,
        fontSize: 12
    },
    promoTextBottom: {
        color: '#808082',
        fontFamily: AppStyle.DEFAULT.font.boldSF,
        fontSize: 12,
        marginTop: 5
    },
    textBottom: {
        color: '#808082',
        fontFamily: AppStyle.DEFAULT.font.medium,
        fontSize: 12,
        lineHeight: 18
    },
    textTop: {
        color: '#fff',
        fontFamily: AppStyle.DEFAULT.font.bold,
        fontSize: 16,
        marginBottom: 10
    },btn:{
        marginTop: 40
    }
})

export default Premium