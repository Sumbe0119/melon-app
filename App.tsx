import * as React from "react";
import {View} from "react-native";
import AppNavigator from "./src/AppNavigator";
import {NavigationContainer,} from "@react-navigation/native";
import ErrorView from "./src/lib/ErrorView";
import FlashMessage from "react-native-flash-message";
import Loader from "./src/lib/Loader";
import * as Font from 'expo-font';
import {useCallback, useEffect, useState} from "react";
import { StatusBar } from 'expo-status-bar';

interface AppState {
    loading: boolean
    resultCode: number
}

const initialAppState: AppState = {
    loading: true,
    resultCode: 200,
}

const App = () => {
    const [state, updateState] = useState(initialAppState);
    useEffect(() => {
        initApp().then();
    }, []);


    const initApp = useCallback(async () => {
        updateState({...state, loading: true});
        await Promise.all([
            loadResources(),
            // await this.fetchUser(),
        ]);
        updateState({...state, loading: false})
    }, [state]);

    const loadResources = useCallback(async () => {
        await Promise.all([
            Font.loadAsync({
                'Linearicons': require('./assets/fonts/Linearicons.ttf'),
                'MaterialIcons': require('./assets/fonts/MaterialIcons.ttf'),
                'Raleway-Thin': require('./assets/fonts/Raleway-Thin.ttf'),
                'Raleway-Light': require('./assets/fonts/Raleway-Light.ttf'),
                'Raleway-Medium': require('./assets/fonts/Raleway-Medium.ttf'),
                'Raleway-Bold': require('./assets/fonts/Raleway-Bold.ttf'),
                'Raleway-Black': require('./assets/fonts/Raleway-Black.ttf'),
                'SF-Pro-Display-Medium': require('./assets/fonts/SF-Pro-Display-Medium.otf'),
                'SF-Pro-Display-Regular': require('./assets/fonts/SF-Pro-Display-Regular.otf'),
                'SF-Pro-Display-Bold': require('./assets/fonts/SF-Pro-Display-Bold.otf'),

            }),
        ]);
    }, []);
    if (state.resultCode != 200)
        return <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}><ErrorView
            reload={() => initApp()}/></View>;

    if (state.resultCode != 200)
        return <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}><ErrorView
            reload={() => initApp()}/></View>;
    return (
        <View style={{flex: 1}}>
            <StatusBar style="light" hidden={true} />
            {
                state.loading ? (
                    <View
                        style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}><Loader/></View>
                ) : (
                    <NavigationContainer>
                        <AppNavigator/>
                    </NavigationContainer>
                )
            }
            <FlashMessage
                position="bottom"
                duration={2500}
                style={[
                    {
                        borderRadius: 15,
                        alignItems: 'center',
                        alignSelf: 'center'
                    }
                ]}
                floating={true}/>
        </View>
    )
};

export default App