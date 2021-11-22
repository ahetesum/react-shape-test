import React, { useState } from "react";
import { View,StyleSheet,Text,Dimensions, Button } from "react-native";
import COLORS from '../constants/Colors'
import Dimens from "../constants/dimens";
import Circle from "../components/Circle";
import { Slider } from 'react-native-elements';
import ScaleMeter from "../components/ScaleMeter";
import NextButton from "../components/NextButton";

const windowWidth = Dimensions.get('window').width;
const cirleHolderW=40,circleOuterW=80,middleCircleW=140, innerCircleW=220;

const ScaleMeterOneScreen=props=>{

     const [sliderValue, setSliderValue] = useState(5);
    
     const onNextPress=()=>{
        props.navigation.navigate('second');
     }

    return(
        <View style={styles.container}>
            <ScaleMeter></ScaleMeter>
            <View style={styles.widgetContainer}>
                <View style={styles.outerCircleHolder}>
                    <Circle borderStyle={'dashed'} bColor={COLORS.dividerColor} bgColor={'none'} radius={(windowWidth-80)/2}>
                        <View style={styles.semiCircle}></View>
                        <Circle  borderStyle={'solid'} bColor={COLORS.infoColor} bgColor={COLORS.infoColor} radius={(windowWidth-140)/2}>
                            <Circle  borderStyle={'solid'} bColor={COLORS.accentColor} bgColor={COLORS.accentColor} radius={(windowWidth-220)/2}>
                                <Text style={styles.nuberText} >{sliderValue}</Text>
                            </Circle>
                        </Circle>
                    </Circle>
                </View>
            </View>
            <View style={styles.sliderHolder}>
            <Slider
                value={sliderValue}
                onValueChange={(value) => setSliderValue(value)}
                maximumValue={10}
                minimumValue={0}
                step={1}
                maximumTrackTintColor={COLORS.whiteColor}  
                minimumTrackTintColor={COLORS.accentColor} 
                trackStyle={{ height: 10, thumbTintColor: COLORS.accentColor }}
                thumbStyle={{ height: 20, width: 20, backgroundColor: COLORS.accentColor }}
                />
            </View>
            <View style={styles.buttonHolder}>
                <NextButton title={'Next'} customStyle={styles.button} onNextPress={onNextPress} />
            </View>
        </View>
    );

};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:COLORS.primaryColor,
      //marginHorizontal:16,
      //marginVertical:16,
    },
    hederTextContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginVertical:10,
        marginHorizontal:10,

    },
    headerFont:{
        fontSize:Dimens.large,
        color:COLORS.whiteColor,
        fontWeight:'600'

    },
    headerFontLarge:{
        fontSize:Dimens.xlarge,
        color:COLORS.whiteColor,
        fontWeight:'800'

    },
    widgetContainer:{
        height:windowWidth,
        width:windowWidth,
    },
    outerCircleHolder:{
        marginHorizontal:20,
        marginVertical:20,
        height: windowWidth-cirleHolderW,
        alignItems:'center',
        justifyContent:'center'
    },
    outerCircle:{

        height: windowWidth-circleOuterW,
        width: windowWidth-circleOuterW,
        borderRadius: (windowWidth-circleOuterW)/2,
        borderColor:COLORS.dividerColor,
        borderWidth:3,
        borderStyle:'dashed',
        alignItems:'center',
        justifyContent:'center',
    },
    semiCircle:{
        position:'absolute',
        marginLeft:(windowWidth-middleCircleW+5)/2,
        height: windowWidth-middleCircleW+5,
        width: (windowWidth-middleCircleW+5)/2,
        borderTopEndRadius: (windowWidth-middleCircleW+5)/2,
        borderBottomEndRadius: (windowWidth-middleCircleW+5)/2,
        borderColor:COLORS.whiteColor,
        backgroundColor:COLORS.whiteColor,
        alignItems:'center',
        justifyContent:'center'
    },

    nuberText:{
        fontSize:Dimens.xxxlarge,
        color:COLORS.whiteColor,
        fontWeight:'600'
    },
    sliderHolder:{
        marginHorizontal:40,
        marginVertical:20,
        
    },
    buttonHolder:{
        marginHorizontal:20,
        marginVertical:20,
    },
    button:{
        color:COLORS.whiteColor,
        backgroundColor:COLORS.accentColor,
        height:40,width:'100%',
        
    }


  });


  export default ScaleMeterOneScreen;
