import * as React from "react";
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView} from "react-native"

import {LinearGradient} from 'expo-linear-gradient';
import AppStyle from "../../lib/AppStyle";
import MelonNavigation from "../../lib/MelonNavigation";
import HomeVideos from "./HomeVideos";
import Collapsible from "react-native-collapsible";
import CollectionsVideo from "./CollectionsVideo";


const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Home = ({navigation}) => {
    return (
        <MelonNavigation navigation={navigation} loading={false} back={false} resultCode={200} headTitle={''}
                         reloadAction={() => {
                         }}>
            <ScrollView style={styles.contain}>
                <View style={styles.layoutContain}>
                    <View style={styles.layoutLeft}>
                        <TouchableOpacity onPress={()=>navigation.navigate('mongolia')} style={{flex: 6.5, marginBottom: 5 ,position: 'relative'}}>
                            <Image
                                style={{width: '100%', height: '100%', borderRadius: 5}}
                                resizeMethod={"auto"}
                                source={require('../../../assets/images/channels.png')}/>
                            <View style={styles.layoutTextContain}>
                                <Text style={styles.layoutText}>CHANNELS</Text>
                            </View>
                            <LinearGradient
                                colors={['transparent', 'rgba(0,0,0,0.7)']}
                                style={styles.gradientStyle}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>navigation.navigate('hollywood')} style={{flex: 3, borderRadius: 5, marginTop: 10, position: 'relative'}}>
                            <Image
                                style={{width: '100%', height: '100%', borderRadius: 5}}
                                resizeMethod={"auto"}
                                source={require('../../../assets/images/hollywood.png')}/>
                            <View style={styles.layoutTextContain}>
                                <Text style={styles.layoutText}>HOLLYWOOD</Text>
                            </View>
                            <LinearGradient
                                colors={['transparent', 'rgba(0,0,0,0.7)']}
                                style={styles.gradientStyle}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.layoutRight}>
                        <TouchableOpacity  onPress={()=>navigation.navigate('mongolia')} style={{flex: 3, borderRadius: 5, marginBottom: 10, position: 'relative'}}>
                            <Image
                                style={{width: '100%', height: '100%', borderRadius: 5}}
                                resizeMethod={"auto"}
                                source={require('../../../assets/images/voodoo.png')}/>
                            <View style={styles.layoutTextContain}>
                                <Text style={styles.layoutText}>VOODOO</Text>
                            </View>
                            <LinearGradient
                                colors={['transparent', 'rgba(0,0,0,0.7)']}
                                style={styles.gradientStyle}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> navigation.navigate('mongolia')} style={{flex: 3, borderRadius: 5, marginBottom: 10, position: 'relative'}}>
                            <Image
                                style={{width: '100%', height: '100%', borderRadius: 5}}
                                resizeMethod={"auto"}
                                source={require('../../../assets/images/mongolia.png')}/>
                            <View style={styles.layoutTextContain}>
                                <Text style={styles.layoutText}>MONGOLIA</Text>
                            </View>
                            <LinearGradient
                                colors={['transparent', 'rgba(0,0,0,0.7)']}
                                style={styles.gradientStyle}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={()=>navigation.navigate('asia')} style={{flex: 3, borderRadius: 5, position: 'relative'}}>
                            <Image
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: 5
                                }}
                                resizeMethod={"auto"}
                                source={require('../../../assets/images/asia.png')}/>
                            <View style={styles.layoutTextContain}>
                                <Text style={styles.layoutText}>ASIA</Text>
                            </View>
                            <LinearGradient
                                colors={['transparent', 'rgba(0,0,0,0.7)']}
                                style={styles.gradientStyle}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <HomeVideos title={'Онцлох'} navigation={navigation}/>
                <HomeVideos title={'Шинээр нэмэгдсэн'} navigation={navigation}/>
                <CollectionsVideo title={'Цуврал кино'}/>
                <View style={{paddingBottom: 30}}/>
            </ScrollView>
        </MelonNavigation>
    )
}
const styles = StyleSheet.create({
    contain: {
        flex: 1,
        backgroundColor: '#000'
    },
    horizontal: {
        paddingHorizontal: 20
    },
    layoutContain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        height: 380,
        width: screenWidth - 30
    },
    layoutLeft: {
        width: (screenWidth / 2) - 20,
        flexDirection: 'column'
    },
    layoutRight: {
        width: (screenWidth / 2) - 20,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    layoutTextContain: {
        position: 'absolute', bottom: 7, left: 7, zIndex: 1000
    },
    layoutText: {
        fontFamily: AppStyle.DEFAULT.font.bold, color: '#fff', fontSize: 14
    },
    gradientStyle: {
        position: 'absolute',
        bottom: 0,
        zIndex: 999,
        width: '100%',
        height: 40
    }
})
export default Home
