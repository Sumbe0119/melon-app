import React from "react";
import {Text, View, StyleSheet} from "react-native";
import MelonNavigation from "../../lib/MelonNavigation";
import Premium from "../Premium";

const Subscriptions = ({navigation}) => {
    return (
        <MelonNavigation loading={false} resultCode={200} navigation={navigation} back={true} headTitle={'Таалагдсан'}>
            <View style={styles.contain}>
                <Premium/>
            </View>
        </MelonNavigation>

    )
}
const styles = StyleSheet.create({
    contain: {
        flex: 1,
        paddingHorizontal: 15,
        paddingTop: 10
    }
})

export default Subscriptions