import React from 'react'
import {Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Constants from 'expo-constants';
import AppStyle from "../lib/AppStyle";


const screenWidth = Math.round(Dimensions.get('window').width);


const data = [
    {
        id: '1',
        image: require('../../assets/images/harry.jpg'),
        title: 'Harry Potter',
        season: 4
    },
    {
        id: '2',
        image: require('../../assets/images/twilight.jpeg'),
        title: 'Twilight',
        season: 6
    },
    {
        id: '3',
        image: require('../../assets/images/got.jpeg'),
        title: 'Game of thrones',
        season: 4
    },
    {
        id: '4',
        image: require('../../assets/images/hobbit.jpg'),
        title: 'Hobbits',
        season: 5
    },
];


const renderItem = (item: any, index: number, separators: any, navigation: any) => (
    <TouchableOpacity
        key={index} style={{width: screenWidth - 30, marginBottom: 10}}>
        <Image
            style={{
                width: screenWidth - 30,
                height: 170,
                borderRadius: 10,
                marginBottom: 10
            }}
            source={item.image}/>
        <View style={styles.flex}>
                <Text style={styles.text}>{item.title}</Text>
                <Text style={styles.subText}>{item.season} Бүлэг</Text>
        </View>
    </TouchableOpacity>
);


const Series = ({navigation}) => {
    return (
        <View style={styles.contain}>
            <FlatList
                data={data}
                showsHorizontalScrollIndicator={false}
                horizontal={false}
                renderItem={({
                                 item,
                                 index,
                                 separators
                             }) => renderItem(item, index, separators, navigation)}
                keyExtractor={item => item.id.toString()}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    contain: {
        paddingTop: Constants.statusBarHeight + 70,
        flex: 1,
        backgroundColor: '#000',
        paddingHorizontal: 15
    },
    flex: {
        flexDirection: 'column',
        marginBottom: 10
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontFamily: AppStyle.DEFAULT.font.bold,
        marginBottom: 5
    },
    subText: {
        color: '#808082',
        fontSize: 14,
        fontFamily: AppStyle.DEFAULT.font.regularSF,
    }


})

export default Series