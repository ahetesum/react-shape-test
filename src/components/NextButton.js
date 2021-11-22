import React from "react";
import { View,StyleSheet,Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import COLORS from '../constants/Colors';

const NextButton =props=>{
    return(
        <TouchableOpacity  style={[styles.button,props.customStyle]} onPress={props.onNextPress}>
            <Text style={styles.text}>
                {props.title}
            </Text>
        </TouchableOpacity>
    );
};

export default NextButton;

const styles = StyleSheet.create({
    button:{
        color:COLORS.infoColor,
        borderRadius:5,
        justifyContent:"center",
        alignItems:'center'
    },
    text:{
        color:COLORS.whiteColor,
    },
});