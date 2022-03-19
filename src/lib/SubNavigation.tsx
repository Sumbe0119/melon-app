import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    Dimensions, ScrollView,
} from "react-native";
import Constants from 'expo-constants';
import AppStyle from "./AppStyle";

interface NavigationProps {
    navigation: any,
    reloadAction?: Function,
    back?: boolean,
    headTitle?: string,
}

const screenWidth = Math.round(Dimensions.get('window').width);
const SubNavigation = ({
                           navigation,
                           back,
                           headTitle,
                       }: NavigationProps) => {


    return (
        <View style={styles.head}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconBj}>
                    {back ? (
                        <Image
                            style={{
                                height: 24,
                                width: 24,
                                tintColor: '#fff',
                                zIndex: 100,
                                marginLeft: -3
                            }}
                            source={require('../../assets/images/icon/back.png')}/>
                    ) : (null)
                    }
                </TouchableOpacity>
                <Text style={{
                    fontFamily: AppStyle.DEFAULT.font.bold,
                    color: '#fff',
                    fontSize: 16,
                    textAlign: 'center',
                    marginLeft: -30
                }}>{headTitle}</Text>
                <View/>
            </View>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    head: {
        position: 'absolute',
        top: Constants.statusBarHeight + 40,
        zIndex: 100,
        paddingHorizontal: 15,
        width: screenWidth,
    },
    headerContainer: {
        paddingHorizontal: 15,
        paddingTop: Constants.statusBarHeight,
        height: Constants.statusBarHeight + 50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
        justifyContent: 'space-between',
    },
    headTitle: {
        color: '#FFF',
        fontSize: 14,
        fontFamily: AppStyle.DEFAULT.font.bold
    },
    iconBj: {
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: 'rgba(225,225,225,0.3)',
        alignItems: 'center',
        justifyContent: 'center'
    }

});

export default SubNavigation;
