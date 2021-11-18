import React from "react";
import { View,StyleSheet,Text,Dimensions, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Dash from "../components/dash";
import COLORS from '../constants/Colors'
import Dimens from "../constants/dimens";

const windowWidth = Dimensions.get('window').width;
const cirleHolderW=40,circleOuterW=80,middleCircleW=140, innerCircleW=220;

const ScaleMeterOneScreen=props=>{



    return(
        <View style={styles.container}>
            <Dash counter={5} position={0} />
            <View style={styles.hederTextContainer}>
                <Text style={styles.headerFont}>RESCUE SESSION: Anger {'&'} Frustation </Text>
                <Ionicons name='close-outline' size={25} color={COLORS.whiteColor} />
            </View>
            <View style={styles.hederTextContainer}>
                <Text style={styles.headerFontLarge}>Pick the level your anger {'&'} frustation right now </Text>
            </View>
            <View style={styles.widgetContainer}>
                <View style={styles.outerCircleHolder}>
                    <View style={styles.outerCircle}>
                        <View style={styles.semiCircle}></View>
                        <View style={styles.middleCircle}>
                            <View style={styles.innerCircle}>
                                    <Text style={styles.nuberText} >5</Text>
                                </View>
                            </View>
                        </View>
                </View>
            </View>
            <View style={styles.sliderHolder}>
                <Button style={styles.button} title="Next" />
            </View>
            <View style={styles.buttonHolder}>
                <Button style={styles.button} title="Next" />
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
    middleCircle:{

        height: windowWidth-middleCircleW,
        width: windowWidth-middleCircleW,
        borderRadius: (windowWidth-middleCircleW)/2,
        borderColor:COLORS.infoColor,
        backgroundColor:COLORS.infoColor,
        alignItems:'center',
        justifyContent:'center'
    },
    innerCircle:{

        height: windowWidth-innerCircleW,
        width: windowWidth-innerCircleW,
        borderRadius: (windowWidth-innerCircleW)/2,
        borderColor:COLORS.accentColor,
        backgroundColor:COLORS.accentColor,
        alignItems:'center',
        justifyContent:'center'
    },
    nuberText:{
        fontSize:Dimens.xxxlarge,
        color:COLORS.whiteColor,
        fontWeight:'600'
    },
    sliderHolder:{
        marginHorizontal:20,
        marginVertical:20,
    },
    buttonHolder:{
        marginHorizontal:20,
        marginVertical:20,
    }

  });


  export default ScaleMeterOneScreen;
