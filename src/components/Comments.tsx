import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Dimensions,
    KeyboardAvoidingView,
    Platform,
    Image,
    TouchableOpacity, ScrollView
} from "react-native";
import MelonNavigation from "../lib/MelonNavigation";
import DismissKeyboard from "../lib/DismissKeyboard";
import AppStyle from "../lib/AppStyle";


const screenWidth = Math.round(Dimensions.get('window').width);

const Comments = ({navigation}) => {
    return (
        <MelonNavigation navigation={navigation} back={true} headTitle={'Reviews'} resultCode={200} loading={false}
                         reloadAction={() => {
                         }}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex: 1}}>
                <DismissKeyboard>
                    <View style={styles.contain}>
                        <ScrollView>
                            {
                                [1, 2, 3,4,5,6].map((item: any, index: number) => {
                                    return (
                                        <View key={index}
                                              style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
                                            <View style={styles.avatar}>
                                                <Text style={styles.avatarText}>С</Text>
                                            </View>
                                            <View style={{width: screenWidth - 88}}>
                                                <View
                                                    style={{flexDirection: 'row', alignItems: 'center', marginTop: 2}}>
                                                    <Text style={styles.avatarSubText}>Baatar0701</Text>
                                                    <Text style={styles.avatarSubText}>2022.03.16</Text>
                                                </View>
                                                <Text numberOfLines={2} style={styles.descriptionText}>Lorem ipsum dolor
                                                    sit amet, consectetur adipiscing elit, sed
                                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </Text>
                                                <TouchableOpacity>
                                                    <Text style={styles.avatarTextReply}>Reply</Text>
                                                </TouchableOpacity>

                                            </View>
                                        </View>

                                    )
                                })
                            }
                        </ScrollView>
                        <View style={{
                            position: 'absolute',
                            height: 90,
                            backgroundColor: '#141416',
                            bottom: 0,
                            zIndex: 1000,
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            paddingHorizontal: 15,
                            width: screenWidth
                        }}>
                            <TextInput placeholderTextColor={'#145C50'} placeholder={'Сэтгэгдэл бичих'}
                                       style={styles.input}/>
                            <TouchableOpacity style={styles.iconBj}>
                                <Image
                                    style={{
                                        height: 24,
                                        width: 24,
                                        tintColor: 'rgba(225,225,225,0.5)'
                                    }}
                                    source={require('../../assets/images/icon/upArrow.png')}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </DismissKeyboard>
            </KeyboardAvoidingView>
        </MelonNavigation>

    )
}

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: '#000'
    },
    input: {
        backgroundColor: '#000',
        height: 40,
        width: screenWidth - 90,
        borderRadius: 20,
        marginTop: -10,
        paddingHorizontal: 20,
        color: '#fff'
    },
    iconBj: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: '#145C50',
        marginTop: -10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar: {
        height: 48,
        width: 48,
        borderRadius: 24,
        backgroundColor: '#2F3035',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    avatarText: {
        fontFamily: AppStyle.DEFAULT.font.bold,
        fontSize: 18,
        color: '#fff'
    },
    avatarSubText: {
        fontSize: 13,
        fontFamily: AppStyle.DEFAULT.font.regularSF,
        color: '#808082',
        marginRight: 10
    },
    avatarTextReply: {
        color: '#109B84',
        marginTop: 5,
        fontSize: 14,
        fontFamily: AppStyle.DEFAULT.font.medium
    },
    descriptionText: {
        fontFamily: AppStyle.DEFAULT.font.light,
        fontSize: 14,
        color: '#fff',
        textAlign: 'justify'
    },
})

export default Comments