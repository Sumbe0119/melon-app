import React from "react";
import {Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import SubNavigation from "../lib/SubNavigation";
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import AppStyle from "../lib/AppStyle";
import HomeVideos from "./home/HomeVideos";

const screenWidth = Math.round(Dimensions.get('window').width);


const data = [
    {
        id: 1,
        type: 'Шүүлтүүр'
    },
    {
        id: 2,
        type: 'Онцлох'
    },
    {
        id: 3,
        type: 'Санал болгох'
    },
    {
        id: 4,
        type: 'Шинэ'
    },
    {
        id: 5,
        type: 'Их үзсэн'
    }
]


const HollywoodMovie = ({navigation}) => {
    return (

        <View style={styles.contain}>
            <SubNavigation  navigation={navigation} back={true} headTitle={'HOLLYWOOD'}/>
            <View style={{position: 'relative'}}>
                <Image style={{
                    borderRadius: 5,
                    width: screenWidth,
                    height: 250,
                    resizeMode: 'cover',
                    zIndex: 90,
                }} source={require('../../assets/images/cover4.jpg')}/>
                <LinearGradient colors={[ 'rgba(0,0,0,0.70)', 'rgba(0,0,0,0.44)','transparent']}
                                style={styles.linearGradient}>
                </LinearGradient>
                <LinearGradient colors={['transparent','rgba(0,0,0,0.1)','rgba(0,0,0,0.1)']}
                                style={styles.linearGradient1}>
                </LinearGradient>
            </View>
            <View style={{marginTop: 20, paddingBottom: 40, marginHorizontal: 15}}>
                <SwiperFlatList autoplay autoplayDelay={4} autoplayLoop index={2} showPagination={false}>
                    {
                        data.map(( item:any, index: number)=>{
                            return(
                                <View style={styles.child} key={index}>
                                    <Text style={styles.text}>{item.type}</Text>
                                </View>
                            )
                        })
                    }
                </SwiperFlatList>
            </View>
            <ScrollView style={{marginTop: -25}}>
                <HomeVideos title={'Адал явдал'} navigation={navigation}/>
                <HomeVideos title={'Инээдмийн'} navigation={navigation}/>
                <HomeVideos title={'Драма'} navigation={navigation}/>
            </ScrollView>
        </View>


    )
}

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: '#000'
    },
    linearGradient: {
        height: 100,
        width: screenWidth,
        position: 'absolute',
        top: 0,
        zIndex: 100
    },
    linearGradient1: {
        height: 50,
        width: screenWidth,
        position: 'absolute',
        bottom: 0,
        zIndex: 100
    },
    child:{
        height: 25,
        paddingHorizontal: 15,
        borderRadius: 20,
        backgroundColor: '#2F3035',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    text:{
        color: '#fff',
        fontFamily: AppStyle.DEFAULT.font.medium,
        fontSize: 12
    }
})

export default HollywoodMovie