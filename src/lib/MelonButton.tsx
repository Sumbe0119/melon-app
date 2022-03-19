import React from 'react'
import {TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle, ActivityIndicator, Platform} from "react-native";
import AppStyle from "./AppStyle";
import LinearIcons from "../lib/LinearIcons";

interface ButtonProps {
    title: string,
    icon?: any,
    style?: StyleProp<ViewStyle>,
    onPress?: Function,
    type: 'main' | 'white',
    loading?: boolean,
    loadingColor?: string,

}

class MelonButton extends React.Component<ButtonProps> {
    onPress() {
        const loading = this.props.loading || false;
        if (this.props.onPress && !loading) {
            this.props.onPress()
        }
    }

    render() {
        const {title, style,type,icon} = this.props;
        let buttonStyle = type == 'white'?styles.buttonWhite:styles.button
        const containerStyle = style ? [buttonStyle, style] : buttonStyle;
        const textStyle = type == 'white'?styles.buttonRedText:styles.buttonText
        const loadingColor = this.props.loadingColor || "#FFFFFF";
        const loading = this.props.loading || false;
        return (
            <TouchableOpacity style={[containerStyle, styles.horizontal]} onPress={() => {this.onPress()}}>
                {
                    loading ? (<ActivityIndicator size="small" style={{marginRight: 10}} color={loadingColor}/>) : null
                }
                {
                    !loading && icon ? (<LinearIcons style={{marginRight: 10,color:"#FFF"}} name={icon} size={18}/>):null
                }
                <Text style={textStyle}>{title}</Text>
            </TouchableOpacity>
        )
    }
}



const styles = StyleSheet.create({
    button: {
        backgroundColor: '#B069F3',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:"center",
        borderRadius: 10
    },
    buttonWhite:{
        borderWidth: 1,
        borderColor: '#9E805A',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:"center",
        borderRadius: 10
    },
    buttonRedText:{
        fontFamily: AppStyle.DEFAULT.font.bold,
        color: '#000',
        fontSize: 14,
    },
    buttonText: {
        fontFamily: AppStyle.DEFAULT.font.bold,
        color: 'white',
        fontSize: 14,
    },
    horizontal: {
        flexDirection: 'row',
        padding: 10
    }
});
export default MelonButton;
