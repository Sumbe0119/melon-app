import React, {useContext} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    Dimensions,
} from "react-native";
import ErrorView from "./ErrorView";
import Constants from 'expo-constants';
import AppStyle from "./AppStyle";
import Loader from "./Loader";

interface NavigationProps {
    loading: boolean,
    resultCode: number,
    navigation: any,
    children: any,
    reloadAction?: Function,
    back?: boolean,
    headTitle?: string,
}

const screenWidth = Math.round(Dimensions.get('window').width);
const MelonNavigation = ({
                             loading,
                             resultCode,
                             navigation,
                             children,
                             reloadAction,
                             back,
                             headTitle,
                         }: NavigationProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                {
                    back == true ? (
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image
                                style={{
                                    width: 24,
                                    height: 24,
                                    tintColor: '#fff',
                                    marginRight: -40
                                }}
                                source={require('../../assets/images/icon/back.png')}
                            />
                        </TouchableOpacity>
                    ) : (
                        <Text style={{color: '#fff', fontSize: 22, fontFamily: AppStyle.DEFAULT.font.black}}>
                            MELON
                        </Text>
                    )
                }

                <Text style={{textAlign: 'center'}}>
                    {headTitle ? <Text style={styles.headTitle}>{headTitle}</Text> : null}
                </Text>
                <View/>

            </View>
            {resultCode == 200 ? (loading ? <Loader/> : children) : (
                <ErrorView code={resultCode} reload={reloadAction}/>)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    headerContainer: {
        paddingHorizontal: 15,
        paddingTop: Constants.statusBarHeight + 50,
        height: Constants.statusBarHeight + 100,
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 10,
        justifyContent: 'space-between',
    },
    headTitle: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: AppStyle.DEFAULT.font.bold,
    },

});

export default MelonNavigation;
