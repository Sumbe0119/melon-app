import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {Platform, Dimensions, Text, View, Image, StyleSheet} from "react-native";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import Home from "./components/home/Home";
import AppStyle from "./lib/AppStyle";
import MongolianMovie from "./components/MongolianMovie";
import AsiaMovie from "./components/AsiaMovie";
import HollywoodMovie from "./components/HollywoodMovie";
import Single from "./components/Single";
import Comments from "./components/Comments";
import Profile from "./components/profile/Profile";
import Search from "./components/Search";
import Support from "./components/profile/Support";
import Settings from "./components/profile/Settings";


const screenWidth = Math.round(Dimensions.get('window').width);

const HomeTab = createMaterialBottomTabNavigator();
const HomeTabView = () => {
    return (
        <HomeTab.Navigator
            style={{backgroundColor: '#5C3D2E'}}
            backBehavior={'none'}
            activeColor={'#fff'}
            inactiveColor={'#808082'}
            shifting={false}
            barStyle={{
                overflow: 'hidden',
                backgroundColor: '#141416',
                height: Platform.OS === 'ios' ? 80 : 60,
            }}
        >
            <HomeTab.Screen
                options={{
                    tabBarIcon: ({focused, color}) =>
                        focused ?
                            <Image style={{
                                width: 24,
                                height: 24,
                                tintColor: '#fff'
                            }} source={require('../assets/images/icon/activeHome.png')}/>
                            :
                            <Image style={{
                                width: 24,
                                height: 24,
                                tintColor: '#808082'
                            }} source={require('../assets/images/icon/home.png')}/>
                    ,
                    title: 'Нүүр'
                }}
                name="home" component={Home}/>
            <HomeTab.Screen
                options={{
                    tabBarIcon: ({focused, color}) =>
                        focused ?
                            <Image style={{
                                width: 24,
                                height: 24,
                                tintColor: '#fff'
                            }} source={require('../assets/images/icon/activeList.png')}/>
                            :
                            <Image style={{
                                width: 24,
                                height: 24,
                                tintColor: '#808082'
                            }} source={require('../assets/images/icon/list.png')}/>
                    ,
                    title: 'Цуврал'
                }}
                name="video" component={Home}/>
            <HomeTab.Screen
                options={{
                    tabBarIcon: ({focused, color}) =>
                        focused ?
                            <Image style={{
                                width: 24,
                                height: 24,
                                tintColor: '#fff',
                            }} source={require('../assets/images/icon/activeSearch.png')}/>
                            :
                            <Image style={{
                                width: 24,
                                height: 24,
                                tintColor: '#808082',
                            }} source={require('../assets/images/icon/search.png')}/>
                    ,
                    title: 'Хайлт'
                }}
                name="search" component={Search}/>
            <HomeTab.Screen
                options={{
                    tabBarIcon: ({focused, color}) =>
                        focused ?
                            <Image style={{
                                width: 24,
                                height: 24,
                                tintColor: '#fff'
                            }} source={require('../assets/images/icon/activeUser.png')}/>
                            :
                            <Image style={{
                                width: 24,
                                height: 24,
                                tintColor: '#808082'
                            }} source={require('../assets/images/icon/user.png')}/>
                    ,
                    title: 'Миний'
                }}
                name="profile" component={Profile}/>

        </HomeTab.Navigator>
    )
}

const MainStack = createStackNavigator();

const styles = StyleSheet.create({
    activeText: {
        color: '#ffffff',
        fontFamily: AppStyle.DEFAULT.font.light
    }
})

export default () => {
    return (
        // @ts-ignore
        <MainStack.Navigator screenOptions={{headerMode: 'none'}} initialRouteName={'homeView'}>
            <>
                <MainStack.Screen name="homeView" component={HomeTabView} initialParams={{threadID: 'main'}}/>
                <MainStack.Screen name="mongolia" component={MongolianMovie}/>
                <MainStack.Screen name="asia" component={AsiaMovie}/>
                <MainStack.Screen name="hollywood" component={HollywoodMovie}/>
                <MainStack.Screen name="single" component={Single}/>
                <MainStack.Screen name="comments" component={Comments}/>
                <MainStack.Screen name="profile" component={Profile}/>
                <MainStack.Screen name="support" component={Support}/>
                <MainStack.Screen name="settings" component={Settings}/>

            </>
        </MainStack.Navigator>
    )
};
