import React from 'react'
import {View, StyleSheet, Text, FlatList, TouchableOpacity, Image, Dimensions} from "react-native";
import AppStyle from "../../lib/AppStyle";

const screenWidth = Math.round(Dimensions.get('window').width);

const data = [
    {
        id: '1',
        image: require('../../../assets/images/image1.png'),
    },
    {
        id: '2',
        image: require('../../../assets/images/image2.png'),
    },
    {
        id: '3',
        image: require('../../../assets/images/image3.png'),
    },
    {
        id: '4',
        image: require('../../../assets/images/image4.png'),
    },
];


const renderItem = (item: any, index: number, separators: any, navigation: any ) => (
    <TouchableOpacity onPress={()=>navigation.navigate('single')}
    key={index} style={{width: (screenWidth - 40) / 3.2, marginRight: 10}}>
        <Image style={{
            borderRadius: 5,
            width: (screenWidth - 40) / 3.2,
            height: 140,
            resizeMode: 'cover',
            marginTop: 10
        }} source={item.image}/>
    </TouchableOpacity>
);

interface Props {
    title: string,
    navigation: any
}

const HomeVideos = ({title, navigation}: Props) => {

    return (
        <View style={styles.container}>
            <View style={styles.headDescContain}>
                <Text style={styles.headText}>{title}</Text>
                <Text style={styles.headRightText}>Бүгд</Text>
            </View>
            <View style={{marginLeft: 15}}>
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
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headDescContain: {
        flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, marginTop: 15
    },
    headText: {
        color: '#fff', fontSize: 16, fontFamily: AppStyle.DEFAULT.font.bold
    },
    headRightText: {
        color: '#E2AA6C', fontSize: 14, fontFamily: AppStyle.DEFAULT.font.medium
    },
    text: {
        fontSize: 8
    },
    boxTitle: {
        color: '#fff',
        marginTop: 10,
        fontSize: 12,
        fontFamily: AppStyle.DEFAULT.font.thin,
        paddingRight: 10
    },
    linearGradient: {
        width: (screenWidth - 50) / 2,
        height: (screenWidth - 50) / 3,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
})

export default HomeVideos;