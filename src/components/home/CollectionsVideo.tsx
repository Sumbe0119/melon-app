import React from 'react'
import {View, StyleSheet, Text, FlatList, TouchableOpacity, Image, Dimensions} from "react-native";
import AppStyle from "../../lib/AppStyle";

const screenWidth = Math.round(Dimensions.get('window').width);

const data = [
    {
        id: '1',
        image: require('../../../assets/images/collection1.png'),
    },
    {
        id: '2',
        image: require('../../../assets/images/collection2.png'),
    },
    {
        id: '3',
        image: require('../../../assets/images/collection1.png'),
    },
    {
        id: '4',
        image: require('../../../assets/images/collection2.png'),
    },
];


const renderItem = (item: any, index: number, separators: any) => (
    <TouchableOpacity
        key={index} style={{width: 246, marginRight: 10}}>
        <Image style={{
            borderRadius: 5,
            width: 246,
            height: 120,
            marginTop: 10
        }} source={item.image}/>
    </TouchableOpacity>
);

interface Props {
    title: string
}

const CollectionsVideo = ({title}: Props) => {

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
                                 }) => renderItem(item, index, separators)}
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

export default CollectionsVideo;