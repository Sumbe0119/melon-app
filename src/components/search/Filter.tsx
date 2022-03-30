import React, {useState} from 'react'
import {Text, View, StyleSheet, TouchableOpacity, Dimensions, FlatList, ScrollView} from "react-native";
import MelonNavigation from "../../lib/MelonNavigation";
import AppStyle from "../../lib/AppStyle";


const screenWidth = Math.round(Dimensions.get('window').width);

const data = [
    {
        id: '1',
        title: 'Asia Movie',
    },
    {
        id: '2',
        title: 'K-Drama',
    },
    {
        id: '3',
        title: 'German',
    },
    {
        id: '4',
        title: 'Russia',
    },
    {
        id: '5',
        title: 'Cartoon',
    },
    {
        id: '6',
        title: 'Animation',
    },
    {
        id: '7',
        title: 'Horror',
    },
    {
        id: '8',
        title: 'Action',
    },
    {
        id: '9',
        title: 'Fantasy',
    },
    {
        id: '10',
        title: 'Love',
    },
    {
        id: '11',
        title: 'Marvel',
    },
    {
        id: '12',
        title: 'Zombie',
    },
];

const numColumns = Math.ceil(data.length / 2);

const renderItem = (item: any, index: number, separators: any, navigation: any) => (
        <TouchableOpacity key={index} style={styles.renderItem}>
            <Text style={{color: '#808082',fontFamily:AppStyle.DEFAULT.font.medium}}>{item.title}</Text>
        </TouchableOpacity>
    )
;

type tabs = 'firstTab' | 'secondTab' | 'thirdTab'


const Filter = (navigation) => {
    const [state, updateState] = useState<tabs>('firstTab')

    return (
        <MelonNavigation navigation={navigation} back={true} headTitle={'Шүүлтүүр'} resultCode={200} loading={false}
                         reloadAction={() => {
                         }}>
            <View style={styles.contain}>
                <View style={styles.tabHeader}>
                    <TouchableOpacity style={state === 'firstTab' ? styles.tabBoxLeftActive : styles.tabBoxLeft}
                                      onPress={() => updateState('firstTab')}>
                        <Text style={state === 'firstTab' ? styles.textActive : styles.text}>Кино</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={state === 'secondTab' ? styles.tabBoxActive : styles.tabBox}
                                      onPress={() => updateState('secondTab')}>
                        <Text style={state === 'secondTab' ? styles.textActive : styles.text}>Видео</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={state === 'thirdTab' ? styles.tabBoxRightActive : styles.tabBoxRight}
                                      onPress={() => updateState('thirdTab')}>
                        <Text style={state === 'thirdTab' ? styles.textActive : styles.text}>Аудио</Text>
                    </TouchableOpacity>
                </View>
                {

                    state === 'firstTab' ? (
                        <View>
                            <Text style={styles.headText}>Киноны Төрөл</Text>
                            <ScrollView
                                horizontal
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{paddingVertical: 20}}>
                                <FlatList
                                    data={data}
                                    scrollEnabled={false}
                                    contentContainerStyle={{
                                        alignSelf: 'flex-start',
                                    }}
                                    showsHorizontalScrollIndicator={false}
                                    numColumns={numColumns}
                                    renderItem={({
                                                     item,
                                                     index,
                                                     separators
                                                 }) => renderItem(item, index, separators, navigation)}
                                    keyExtractor={item => item.id.toString()}
                                />
                            </ScrollView>
                        </View>
                    ) : null
                }
                {
                    state === 'secondTab' ? (
                        <View>
                            <Text style={styles.headText}>Видеоны Төрөл</Text>
                        </View>
                    ) : (null)
                }
                {
                    state === 'thirdTab' ? (
                        <View>
                            <Text style={styles.headText}>Аудио Төрөл</Text>
                        </View>
                    ) : (null)
                }


            </View>
        </MelonNavigation>

    )
}
const styles = StyleSheet.create({
    contain: {
        flex: 1,
        paddingHorizontal: 15
    },
    topText: {
        fontSize: 18,
        color: '#fff',
        fontFamily: AppStyle.DEFAULT.font.bold,
        marginTop: 10,
        marginBottom: 20
    },
    tabHeader: {
        height: 45,
        width: screenWidth - 30,
        borderRadius: 10,
        borderColor: '#141416',
        borderWidth: 1,
        borderStyle: 'solid',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginTop: 20
    },
    tabBox: {
        flex: 3,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#141416',
        borderWidth: 1,
    },
    tabBoxActive: {
        flex: 3,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#109B84',
        borderWidth: 1,
    },
    tabBoxLeft: {
        flex: 3,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderColor: '#141416',
        borderWidth: 1,
    },
    tabBoxLeftActive: {
        flex: 3,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderColor: '#109B84',
        borderWidth: 1,
    },
    tabBoxRight: {
        flex: 3,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderColor: '#141416',
        borderWidth: 1,
    },
    tabBoxRightActive: {
        flex: 3,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderColor: '#109B84',
        borderWidth: 1,
    },
    textActive: {
        fontFamily: AppStyle.DEFAULT.font.medium,
        color: '#109B84'
    },
    text: {
        fontFamily: AppStyle.DEFAULT.font.medium,
        color: '#808082'
    }, headText: {
        color: '#fff',
        fontFamily: AppStyle.DEFAULT.font.bold,
        fontSize: 18,
        marginBottom: 10
    },
    renderItem: {
        paddingHorizontal: 20,
        marginRight: 15,
        backgroundColor: '#141416',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 25,
        marginBottom: 10
    }
})

export default Filter