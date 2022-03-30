import React, {useState} from "react";
import {Text, View, StyleSheet, TouchableOpacity, Dimensions} from "react-native";
import MelonNavigation from "../../lib/MelonNavigation";
import AppStyle from "../../lib/AppStyle";
import MelonButton from "../../lib/MelonButton";


const screenWidth = Math.round(Dimensions.get('window').width);

const About = ({navigation}) => {
    const [check, setChek] = useState(false)
    const [check1, setChek1] = useState(false)



    return (
        <MelonNavigation navigation={navigation} headTitle={"Миний"} resultCode={200} loading={false} back={true}
                         reloadAction={() => {
                         }}>
            <View style={styles.contain}>
                <View style={styles.card}>
                    <Text style={styles.cardText}>NickName</Text>
                    <Text style={styles.cardUSerText}>T.Sumbe0119</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardText}>Phone Number</Text>
                    <Text style={styles.cardUSerText}>86662422</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardText}>Gender</Text>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity style={styles.direction} onPress={()=> setChek(!check)}>
                            <View style={styles.check}>
                                {
                                    check ?  <View style={styles.checkInner}/> : null
                                }
                            </View>
                            <Text style={styles.cardUSerText}>Male</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.direction} onPress={()=> setChek1(!check1)}>
                            <View style={styles.check}>
                                {
                                    check1 ?  <View style={styles.checkInner}/> : null
                                }
                            </View>
                            <Text style={styles.cardUSerText}>Male</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <MelonButton title={'Мэдээлэл өөрчлөх'} type={'main'} style={styles.btn}/>

            </View>
        </MelonNavigation>

    )
}

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        alignItems: 'center'
    },
    card: {
        width: screenWidth - 30,
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: '#141416',
        borderRadius: 10,
        marginTop: 20
    },
    cardText: {
        color: "#808082",
        fontSize: 14,
        fontFamily: AppStyle.DEFAULT.font.bold,
        marginBottom: 10
    },
    cardUSerText: {
        color: "#fff",
        fontSize: 14,
        fontFamily: AppStyle.DEFAULT.font.mediumSF,
    },
    check: {
        height: 18,
        width: 18,
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 1.5,
        borderColor: "#109B84",
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    checkInner: {
        height: 10,
        width: 10,
        borderRadius: 10,
        backgroundColor: "#109B84"
    },
    direction:{
        flexDirection: 'row', alignItems: 'center',marginRight: 30
    },
    btn:{
        width: screenWidth -30,
        marginTop: 30
    }


})

export default About