import AsyncStorage from '@react-native-async-storage/async-storage';

class Storage {
    static _retrieveData = async (name:string) => {
        try {
            const value = await AsyncStorage.getItem(name);
            return value
        } catch (error) {
            return null
        }
    };
    static _storeData = async (name:string,data:any) => {
        try {
            await AsyncStorage.setItem(name, data);
            return data;
        } catch (error) {


        }
    }
    static _storeDataRemove = async (name:string) => {
        try {
            await AsyncStorage.removeItem(name);
        } catch (error) {

        }
    }
}

export default Storage