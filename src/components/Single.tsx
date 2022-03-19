import React, {useCallback, useEffect, useState} from 'react'
import {Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import SubNavigation from "../lib/SubNavigation";
import {LinearGradient} from "expo-linear-gradient";
import AppStyle from "../lib/AppStyle";
import Constants from "expo-constants";
import {SwiperFlatList} from "react-native-swiper-flatlist/index";


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);


const actorData = [
    {
        id: 1,
        name: 'Aleksander',
        image: require('../../assets/images/avatar1.png'),
    },
    {
        id: 2,
        name: 'Oles Katsion',
        image: require('../../assets/images/avatar2.png'),
    },
    {
        id: 3,
        name: 'Natalya',
        image: require('../../assets/images/avatar3.png'),
    },
    {
        id: 4,
        name: 'Anna Sergowiche',
        image: require('../../assets/images/avatar4.png'),
    },
    {
        id: 5,
        name: 'Shtifanowe',
        image: require('../../assets/images/avatar5.png'),
    }
]


const data = [
    {
        id: '1',
        image: require('../../assets/images/img1.png'),
    },
    {
        id: '2',
        image: require('../../assets/images/img2.png'),
    },
    {
        id: '3',
        image: require('../../assets/images/img3.png'),
    },
    {
        id: '4',
        image: require('../../assets/images/img4.png'),
    },
];


const renderItem = (item: any, index: number, separators: any, navigation: any) => (
    <TouchableOpacity onPress={() => navigation.navigate('single')}
                      key={index} style={{width: (screenWidth - 40) / 2.2, marginRight: 12}}>
        <Image style={{
            borderRadius: 5,
            width: (screenWidth - 40) / 2.2,
            height: 110,
            resizeMode: 'cover',
            marginTop: 10
        }} source={item.image}/>
    </TouchableOpacity>
);


const Single = ({navigation}) => {
    const [click, setClick] = useState(false)
    const [click1, setClick1] = useState(false)
    // const [position, setPosition] = useState(screenHeight/2)
    //
    // const YPosition = useCallback((event) => {
    //     const positionY = event.nativeEvent.contentOffset.y;
    //     console.log(positionY)
    // }, [])
    // const height = ()=>{Math.round(screenHeight/2)}

    return (
        <View style={{flex: 1}}>
            <SubNavigation   navigation={navigation} back={true} headTitle={''}/>

            <ScrollView  style={styles.contain}>
                <View>
                    <View style={{position: 'relative'}}>
                        <Image style={{
                            borderRadius: 5,
                            width: screenWidth,
                            height: 455,
                            resizeMode: 'cover',
                            zIndex: 90,
                        }} source={require('../../assets/images/single.png')}/>
                        <LinearGradient colors={['rgba(0,0,0,0.70)', 'rgba(0,0,0,0.44)', 'transparent']}
                                        style={styles.linearGradient}>
                        </LinearGradient>
                        <LinearGradient colors={['transparent', 'rgba(0,0,0,0.1)', 'rgba(0,0,0,0.1)']}
                                        style={styles.linearGradient1}>
                        </LinearGradient>

                    </View>
                    <TouchableOpacity style={styles.player}>
                        <Image style={{
                            width: 17,
                            height: 20,
                            resizeMode: 'cover',
                            zIndex: 90,
                        }} source={require('../../assets/images/icon/record.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={{marginHorizontal: 15}}>
                    <View style={styles.topText}>
                        <Text style={styles.MovieName}>Avengers End Game</Text>
                        <Text style={styles.MovieType}>Hollywood</Text>
                    </View>
                    <View style={styles.movieReaction}>
                        <TouchableOpacity onPress={() => setClick(!click)}
                                          style={click ? styles.activeLikeBox : styles.likeBox}>
                            <Image style={{
                                width: 18,
                                height: 18,
                                zIndex: 90,
                                marginRight: 5
                            }} source={require('../../assets/images/icon/like.png')}/>
                            <Text style={styles.boxText}>456</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setClick1(!click1)}
                                          style={click1 ? styles.activeUnLikeBox : styles.unLikeBox}>
                            <Image style={{
                                width: 18,
                                height: 18,
                                zIndex: 90,
                                marginRight: 5
                            }} source={require('../../assets/images/icon/unLike.png')}/>
                            <Text style={styles.boxText}>12</Text>
                        </TouchableOpacity>
                        <View style={styles.evaluationBox}>
                            <Text style={styles.evaluationBoxNumber}>6.7</Text>
                            <Text style={styles.evaluationBoxText}>MEE</Text>
                        </View>
                        <View style={styles.evaluationBox}>
                            <Text style={styles.evaluationBoxNumber}>8.1</Text>
                            <Text style={styles.evaluationBoxText}>IMDB</Text>
                        </View>
                    </View>
                    <View style={[styles.movieReaction, styles.movieReaction1]}>
                        <View style={styles.selectionBox}>
                            <Image style={{
                                width: 24,
                                height: 20,
                                zIndex: 90,
                                marginTop: 4
                            }} source={require('../../assets/images/icon/trailer.png')}/>
                            <Text style={styles.selectionBoxText}>Trailer</Text>
                        </View>
                        <View style={styles.selectionBox}>
                            <Image style={{
                                width: 24,
                                height: 24,
                                zIndex: 90,
                            }} source={require('../../assets/images/icon/download.png')}/>
                            <Text style={styles.selectionBoxText}>Татах</Text>
                        </View>
                        <View style={styles.selectionBox}>
                            <Image style={{
                                width: 18,
                                height: 18,
                                zIndex: 90,
                                marginTop: 4,
                                marginBottom: 2
                            }} source={require('../../assets/images/icon/save.png')}/>
                            <Text style={styles.selectionBoxText}>Хадгалах</Text>
                        </View>
                        <View style={styles.selectionBox}>
                            <Image style={{
                                width: 24,
                                height: 20,
                                zIndex: 90,
                                marginTop: 2,
                                marginBottom: 2
                            }} source={require('../../assets/images/icon/share.png')}/>
                            <Text style={styles.selectionBoxText}>Share</Text>
                        </View>
                    </View>
                    <View style={styles.border}>
                        <Text style={styles.typeText}>2020, Hollywood</Text>
                        <Text style={styles.typeText}>Тулаант</Text>
                        <View style={{flexDirection: 'row', marginTop: 5, alignItems: 'center'}}>
                            <View style={styles.hdBox}><Text style={styles.hdBoxText}>Full HD</Text></View>
                            <View style={styles.hdBox}><Text style={styles.hdBoxText}>+ 16</Text></View>
                            <Text style={styles.hdBoxTextEnd}>2цаг 55 минут</Text>
                        </View>
                        <View>
                            <View style={{flexDirection: 'row', marginBottom: 5, marginTop: 10}}>
                                <Text style={styles.hdBoxTextEndTop}>Languages: </Text>
                                <Text style={styles.hdBoxTextEnd}>Монгол, Англи, Япон, Солонгос</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.hdBoxTextEndTop}>Subtitles:</Text>
                                <Text style={styles.hdBoxTextEnd}>Англи, Монгол</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{marginBottom: 15}}>
                        <Text style={styles.subTitles}>Trailer and photos</Text>
                        <FlatList
                            data={data}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            renderItem={({
                                             item,
                                             index,
                                             separators
                                         }) => renderItem(item, index, separators, navigation)}
                            keyExtractor={item => item.id.toString()}
                        />
                    </View>
                    <View>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: 10
                        }}>
                            <Text style={styles.subTitles}>Season 1</Text>
                            <Text style={styles.subTitlesRight}>All Eposides</Text>
                        </View>
                        {
                            [1, 2, 3].map((item: any, index: number) => {
                                return (
                                    <View key={index} style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        marginBottom: 20
                                    }}>
                                        <Image
                                            style={{
                                                height: 90,
                                                width: 155,
                                                borderRadius: 5
                                            }}
                                            source={require('../../assets/images/single.png')}/>
                                        <View>
                                            <Text style={styles.boxText}>Avengers End Game</Text>
                                            <Text style={styles.boxTextSub}>1цаг 23минут</Text>
                                        </View>
                                        <Image
                                            style={{
                                                width: 24,
                                                height: 24,
                                                zIndex: 90,
                                                tintColor: '#fff'
                                            }}
                                            source={require('../../assets/images/icon/download.png')}/>
                                    </View>
                                )
                            })
                        }
                    </View>
                    <View style={{marginBottom: 15}}>
                        <Text style={styles.subTitles}>Description</Text>
                        <Text numberOfLines={5} style={styles.descriptionText}>It is a long established fact that a
                            reader will be distracted by the
                            readable content of a page when looking at its layout. The point of
                            using Lorem Ipsum is that it has a more-or-less normal distribution of
                            letters, as opposed to using 'Content here, content here', making it
                            look like readable English. Many desktop publishing packages and
                            web page editors now use Lorem Ipsum as their default model</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: 10
                    }}>
                        <Text style={styles.subTitles}>Reviews</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('comments')}>
                            <Text style={styles.subTitlesRight}>Сэтгэгдэл</Text>
                        </TouchableOpacity>

                    </View>
                    <View>
                        {
                            [1, 2, 3].map((item: any, index: number) => {
                                return (
                                    <View key={index}
                                          style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
                                        <View style={styles.avatar}>
                                            <Text style={styles.avatarText}>С</Text>
                                        </View>
                                        <View style={{width: screenWidth - 88}}>
                                            <Text numberOfLines={2} style={styles.descriptionText}>Lorem ipsum dolor sit
                                                amet, consectetur adipiscing elit, sed
                                                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </Text>
                                            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 2}}>
                                                <Text style={styles.avatarSubText}>Baatar0701</Text>
                                                <Text style={styles.avatarSubText}>2022.03.16</Text>
                                            </View>
                                        </View>
                                    </View>

                                )
                            })
                        }
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: 10
                    }}>
                        <Text style={styles.subTitles}>Actors</Text>
                        <Text style={styles.subTitlesRight}>Бүгд</Text>
                    </View>
                    <SwiperFlatList autoplay autoplayDelay={4} autoplayLoop index={2}
                                    showPagination={false}

                    >
                        {
                            actorData.map(( item:any, index: number)=>{
                                return(
                                    <View key={index} style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <Image style={{
                                            height: 70,
                                            width: 70,
                                            borderRadius: 5
                                        }} source={item.image}/>
                                        <View>
                                            <Text style={styles.text}>{item.name}</Text>
                                            <Text style={styles.text}>{item.name}</Text>
                                        </View>
                                    </View>
                                )
                            })
                        }
                    </SwiperFlatList>
                </View>
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
    player: {
        position: 'absolute',
        backgroundColor: 'rgba(225,225,225,0.85)',
        height: 60,
        width: 60,
        borderRadius: 30,
        top: 200,
        left: screenWidth / 2.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    MovieName: {
        fontSize: 22,
        fontFamily: AppStyle.DEFAULT.font.bold,
        color: '#fff',
        marginBottom: 10
    },
    MovieType: {
        fontSize: 14,
        fontFamily: AppStyle.DEFAULT.font.black,
        color: '#E2AA6C',
        textTransform: 'uppercase',
        marginBottom: 10
    },
    topText: {
        marginTop: 15
    },
    movieReaction: {
        flexDirection: 'row',
        marginTop: 10
    },
    movieReaction1: {
        marginTop: 20, borderBottomWidth: 1, borderColor: '#2F3035', paddingBottom: 20, marginBottom: 20
    },
    likeBox: {
        height: 30,
        width: 70,
        borderRadius: 3,
        borderColor: '#27CC63',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        flexDirection: 'row',
        paddingHorizontal: 15
    },
    activeLikeBox: {
        height: 30,
        borderRadius: 3,
        backgroundColor: '#27CC63',
        borderWidth: 1,
        borderColor: '#27CC63',
        borderStyle: 'solid',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        flexDirection: 'row',
        paddingHorizontal: 11
    },
    unLikeBox: {
        height: 30,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E95259',
        borderStyle: 'solid',
        marginRight: 10,
        flexDirection: 'row',
        paddingHorizontal: 15
    },
    activeUnLikeBox: {
        height: 30,
        borderRadius: 3,
        backgroundColor: '#E95259',
        borderWidth: 1,
        borderColor: '#E95259',
        borderStyle: 'solid',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        flexDirection: 'row',
        paddingHorizontal: 15
    },
    boxText: {
        color: '#fff',
        fontSize: 12,
        fontFamily: AppStyle.DEFAULT.font.mediumSF,
    },
    boxTextSub: {
        color: '#808082',
        fontSize: 12,
        fontFamily: AppStyle.DEFAULT.font.mediumSF,
        marginTop: 5
    },
    evaluationBox: {
        marginRight: 10,
        flexDirection: 'column',
        height: 30,
        paddingHorizontal: 5,
        alignItems: 'center'
    },
    evaluationBoxNumber: {
        fontFamily: AppStyle.DEFAULT.font.boldSF,
        fontSize: 16,
        color: '#fff'
    },
    evaluationBoxText: {
        fontFamily: AppStyle.DEFAULT.font.medium,
        fontSize: 10,
        color: '#808082'
    },
    selectionBox: {
        marginRight: 25,
        flexDirection: 'column',
        alignItems: 'center'
    },
    selectionBoxText: {
        fontSize: 12,
        fontFamily: AppStyle.DEFAULT.font.medium,
        color: '#808082',
        marginTop: 2
    },
    typeText: {
        color: '#fff', fontFamily: AppStyle.DEFAULT.font.mediumSF, fontSize: 14, marginBottom: 5
    },
    hdBox: {
        paddingVertical: 3,
        paddingHorizontal: 10,
        borderRadius: 3,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#fff',
        marginRight: 10
    },
    hdBoxText: {
        color: '#fff',
        fontSize: 12,
        fontFamily: AppStyle.DEFAULT.font.mediumSF
    },
    hdBoxTextEndTop: {
        fontSize: 14,
        fontFamily: AppStyle.DEFAULT.font.regularSF,
        color: '#808082',
        marginRight: 10
    },
    hdBoxTextEnd: {
        color: '#fff',
        fontSize: 14,
        fontFamily: AppStyle.DEFAULT.font.regularSF
    },
    border: {
        borderBottomWidth: 1,
        borderColor: '#2F3035',
        borderStyle: 'solid',
        paddingBottom: 15,
        marginBottom: 15
    },
    subTitles: {
        fontSize: 16,
        fontFamily: AppStyle.DEFAULT.font.black,
        color: '#fff',
        marginBottom: 10
    },
    subTitlesRight: {
        color: '#E2AA6C',
        fontFamily: AppStyle.DEFAULT.font.medium
    },
    text:{
      color: '#fff'
    },
    descriptionText: {
        fontFamily: AppStyle.DEFAULT.font.light,
        fontSize: 14,
        color: '#fff',
        textAlign: 'justify'
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
    }

})

export default Single