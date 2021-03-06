import React from 'react'
import {Text, View, StyleSheet, Dimensions, Image, TextInput, FlatList, TouchableOpacity} from "react-native";
import * as Animatable from 'react-native-animatable';

import Constants from 'expo-constants';
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
    {
        id: '5',
        image: require('../../../assets/images/img1.png'),
    },
    {
        id: '6',
        image: require('../../../assets/images/image2.png'),
    },
    {
        id: '7',
        image: require('../../../assets/images/image3.png'),
    },
    {
        id: '8',
        image: require('../../../assets/images/image1.png'),
    },
];


const renderItem = (item: any, index: number, separators: any, navigation: any) => (
    <TouchableOpacity onPress={() => navigation.navigate('single')}
                      key={index} style={{width: (screenWidth - 30) / 3, marginRight: 10, marginBottom: 30}}>
        <Image style={{
            borderRadius: 5,
            width: (screenWidth - 30) / 3,
            height: 140,
            resizeMode: 'cover',
            marginTop: 10
        }} source={item.image}/>
    </TouchableOpacity>
);


const Search = ({navigation}) => {
    return (
        <View style={styles.contain}>
            <View style={styles.header}>
                <View style={styles.inputContainer}>
                    <Image
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: '#808082',
                            marginRight: 15
                        }}

                        source={require('../../../assets/images/icon/search.png')}/>
                    <TextInput placeholder={'????????'} placeholderTextColor={'#808082'} style={styles.input}/>
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 10
                }}>
                    <Text style={{...styles.text, marginBottom: 0}}>????????????????</Text>
                    <TouchableOpacity  style={styles.filter} onPress={()=>navigation.navigate('filter')}>
                        <Image
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: '#808082',
                            }}
                            source={require('../../../assets/images/icon/filter.png')}/>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={data}
                    showsVerticalScrollIndicator={true}
                    numColumns={3}
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
    contain: {
        flex: 1,
        backgroundColor: '#000',
        paddingHorizontal: 15
    },
    header: {
        paddingTop: Constants.statusBarHeight + 70
    },
    inputContainer: {
        height: 45,
        backgroundColor: '#1a1a1a',
        borderRadius: 10,
        width: screenWidth - 30,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    input: {
        flex: 1,
        color: '#fff'
    },
    text: {
        color: '#fff',
        fontSize: 18,
        fontFamily: AppStyle.DEFAULT.font.bold,
        marginBottom: 10
    },
    filter: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1a1a1a',
        borderRadius: 10,
        height: 35,
        width: 35,


    }
})

export default Search