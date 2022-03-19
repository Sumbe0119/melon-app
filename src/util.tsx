import config from './config'
import { showMessage } from 'react-native-flash-message';
import AppStyle from "./lib/AppStyle";

export const formatTime = (time: number) => {
    try {
        // @ts-ignore
        let i = parseInt(time / 60);
        if(i>24){
            i = i - 24
        }
        let mod = time% 60;
        return (i.toString().length === 1 ? "0"+i : i)+":"+(mod.toString().length === 1 ? "0"+mod : mod)
    } catch (e) {

    }
};
export const timeToNumber = (hms: string) => {
    try {
        let a = hms.split(':')
        let hour = parseInt(a[0]);
        let min = parseInt(a[1])
        return hour*60+min;
    } catch (e) {

    }
};
export const formatMoney = (amount, decimalCount = 0, decimal = ".", thousands = ",", sign = "") => {
    try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = amount < 0 ? "-" : "";

        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;

        // @ts-ignore
        return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "")+sign;
    } catch (e) {

    }
};

export const showErrorMessage = (message: any) => {
    showMessage({
        message,
        backgroundColor: AppStyle.DEFAULT.color.red
    })
}

export const showSuccessMessage = (message: any) => {
    showMessage({
        message,
        backgroundColor: AppStyle.DEFAULT.color.green
    })
}

export const showWarnMessage = (message: any) => {
    showMessage({
        message,
        backgroundColor: AppStyle.DEFAULT.color.yellow
    })
}
