import React from "react";
import { View,StyleSheet } from "react-native";
import NextButton from "../components/NextButton";
import ScaleMeter from "../components/ScaleMeter";
import COLORS from "../constants/Colors";



const ScaleMeterTwoScreen=props=>{

    const onNextPress=()=>{
        props.navigation.pop();
     }

    return(
        <View style={styles.container}>
            <ScaleMeter></ScaleMeter>
            <View style={styles.buttonHolder}>
                <NextButton title={'Back'} customStyle={styles.button} onNextPress={onNextPress} />
            </View>
        </View>
    );

};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:COLORS.primaryColor,
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


  export default ScaleMeterTwoScreen;
