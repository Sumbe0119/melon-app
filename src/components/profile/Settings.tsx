import React, {useCallback, useEffect, useState} from 'react'
import {Dimensions, StyleSheet, Text, View, Switch} from "react-native";
import MelonNavigation from "../../lib/MelonNavigation";
import {Slider} from '@miblanchard/react-native-slider';
import AppStyle from "../../lib/AppStyle";

const screenWidth = Math.round(Dimensions.get('window').width);

const SliderContainer = (props: {
    children: React.ReactElement;
    trackMarks?: Array<number>;
}) => {
    const {trackMarks} = props;
    let renderTrackMarkComponent: React.ReactNode;

    if (trackMarks?.length) {
        renderTrackMarkComponent = (index: number) => {
            const style = trackMarkStyles.activeMark;
            return <View style={style}/>;
        };
    }

    const renderChildren = () => {
        return React.Children.map(
            props.children,
            (child: React.ReactElement) => {
                if (!!child && child.type === Slider) {
                    return React.cloneElement(child, {
                        renderTrackMarkComponent,
                        trackMarks,
                    });
                }

                return child;
            },
        );
    };

    return (
        <View style={styles.sliderContainer}>
            {renderChildren()}
        </View>
    );
};

interface SliderProps {
    quantity: number
    text: string
    value: number
}

const initialSlider: SliderProps = {
    quantity: 480,
    text: 'Дэлгэцийн чанар хамгийн бага',
    value: 480
}

const Settings = ({navigation}) => {
    const [slider, setSlider] = useState(initialSlider)
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


    const initSlider = useCallback(() => {
        if (slider.value <= 650) {
            setSlider({text: 'Дэлгэцийн чанар хамгийн бага', quantity: 480, value: slider.value})
        }
        if (slider.value > 650 && slider.value <= 950) {
            setSlider({text: 'Дэлгэцийн чанар дунд зэрэг', quantity: 720, value: slider.value})
        }
        if (slider.value > 950 && slider.value <= 1080) {
            setSlider({text: 'Дэлгэцийн чанар маш сайн', quantity: 1080, value: slider.value})
        }
    }, [slider.value]);

    useEffect(() => {
        initSlider();
    }, [slider.value]);


    return (
        <MelonNavigation loading={false} resultCode={200} navigation={navigation} headTitle={'Тохиргоо'} back={true}>
            <View style={styles.container}>
                <View style={styles.top}>
                    <View style={styles.topSub}>
                        <Text style={styles.mainText}>WIFI ашиглаж видео татах</Text>
                        <Switch
                            trackColor={{false: "#f4f3f4", true: "#109B84"}}
                            thumbColor={isEnabled ? "#f4f3f4" : "#fff"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                    <Text style={styles.subText}>
                        WIFi ашиглаагүй таталт хийж байгаа тохиолдолд их хэмжээний дата ашиглах тул та WIFI шиглаж
                        татна уу.
                    </Text>
                </View>
                <View style={styles.middle}>
                    <View>
                        <View style={styles.qualityContain}>
                            <Text style={styles.qualityRight}>Нягтаршил</Text>
                            <Text style={styles.qualityLeft}>({slider.quantity})чанар</Text>
                        </View>
                        <SliderContainer trackMarks={[650, 950]}>
                            <Slider maximumValue={1080} minimumValue={480} step={1} maximumTrackTintColor={'#2F3035'}
                                    minimumTrackTintColor={'#109B84'} thumbTintColor={'#109B84'} value={slider.value}
                                    onValueChange={(value: number) => setSlider({...slider, value: value})}
                            />
                        </SliderContainer>
                        <Text style={styles.qualityBottom}>{slider.text}</Text>
                    </View>
                </View>
                <View style={styles.middle}>
                    <Text style={styles.middleText}>Утасны багтаамж</Text>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.storageLine}/>
                        <View style={styles.storageLineGreen}/>
                        <View style={styles.storageLineWhite}/>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginTop: 20
                    }}>
                        <View >
                            <View style={styles.flex}>
                                <View style={styles.blackBox}/>
                                <Text style={{...styles.boxText, color: '#808082'}}>Used</Text>
                            </View>
                            <Text style={{...styles.boxText, color: '#808082',marginLeft: 15}}>( 417gb )</Text>
                        </View>
                        <View >
                            <View style={styles.flex}>
                                <View style={styles.greenBox}/>
                                <Text style={{...styles.boxText, color: '#109B84'}}>Melon</Text>

                            </View>
                            <Text style={{...styles.boxText, color: '#109B84',marginLeft: 15}}>( 82gb )</Text>
                        </View>
                        <View>
                            <View style={styles.flex}>
                                <View style={styles.whiteBox}/>
                                <Text style={{...styles.boxText, color: '#fff'}}>Free</Text>

                            </View>
                            <Text style={{...styles.boxText, color: '#fff',marginLeft: 15}}>( 41gb )</Text>
                        </View>
                    </View>
                </View>
            </View>
        </MelonNavigation>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    sliderContainer: {
        width: screenWidth - 40,
        height: 5,
    },
    qualityContain: {
        flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10
    },
    qualityRight: {
        color: '#fff',
        fontFamily: AppStyle.DEFAULT.font.bold,
        fontSize: 16
    },
    qualityLeft: {
        color: '#fff', fontFamily: AppStyle.DEFAULT.font.mediumSF, fontSize: 14
    },
    qualityBottom: {
        color: '#808082', fontFamily: AppStyle.DEFAULT.font.medium,
        marginTop: 40
    },
    mainText: {
        color: '#fff',
        fontFamily: AppStyle.DEFAULT.font.bold,
        fontSize: 16,
        marginBottom: 10
    },
    subText: {
        color: '#808082',
        fontFamily: AppStyle.DEFAULT.font.medium,
        fontSize: 14,
    },
    top: {
        marginBottom: 20, marginTop: 20,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#2F3035',
        paddingBottom: 20
    },
    topSub: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: screenWidth - 40,
        marginBottom: 20
    },
    middle: {
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#2F3035',
        paddingBottom: 20
    },
    middleText: {
        color: '#fff',
        fontFamily: AppStyle.DEFAULT.font.bold,
        fontSize: 16,
        marginTop: 20,
        marginBottom: 20
    },
    storageLine: {
        height: 7,
        width: screenWidth / 2,
        backgroundColor: '#2F3035'
    },
    storageLineGreen: {
        height: 7,
        width: (screenWidth / 2) - 70,
        backgroundColor: '#109B84'
    },
    storageLineWhite: {
        height: 7,
        width: (screenWidth / 2) - 160,
        backgroundColor: '#fff'
    },
    flex: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    blackBox: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: '#2F3035',
        marginRight: 8
    },
    greenBox: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: '#109B84',
        marginRight: 8
    },
    whiteBox: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: '#fff',
        marginRight: 8
    },
    boxText: {
        fontSize: 12,
        fontFamily: AppStyle.DEFAULT.font.mediumSF,
        marginTop: 2,
    },

})


const trackMarkStyles = StyleSheet.create({
    activeMark: {
        borderColor: '#000',
        borderWidth: 2,
        height: 5,
        width: 2,
        left: -4 / 2,
    },
    inactiveMark: {
        borderColor: '#000',
        height: 5,
        borderWidth: 2,
        left: -4 / 2,
    },
});


export default Settings