import React from 'react'
import {Text, View, StyleSheet} from "react-native";
import MelonNavigation from "../../lib/MelonNavigation";
import { StatusBar } from 'expo-status-bar';

const SeriesDetail =({navigation})=>{
    return(
        <MelonNavigation loading={false} resultCode={200} navigation={navigation} back={true} headTitle={'Цуврал кино'} reloadAction={()=>{}}>
            <View style={styles.contain}>
                <Text>
                    a
                </Text>
            </View>
        </MelonNavigation>

    )
}

const styles = StyleSheet.create({
    contain:{
        flex: 1,
        backgroundColor: '#000',
    }
})

export default SeriesDetail;