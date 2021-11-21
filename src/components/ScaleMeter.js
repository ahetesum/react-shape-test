import React from "react";
import { View,StyleSheet,Text } from "react-native";
import COLORS from '../constants/Colors';
import Dimens from "../constants/dimens";
import Dash from "./Dash";
import { Ionicons } from "@expo/vector-icons";

const ScaleMeter=props=>{
    return(
        <View>
        <Dash counter={5} position={0} />
        <View style={styles.hederTextContainer}>
            <Text style={styles.headerFont}>RESCUE SESSION: Anger {'&'} Frustation </Text>
            <Ionicons name='close-outline' size={25} color={COLORS.whiteColor} />
        </View>
        <View style={styles.hederTextContainer}>
            <Text style={styles.headerFontLarge}>Pick the level your anger {'&'} frustation right now </Text>
        </View>
        </View>
    );
}




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
  });


  export default ScaleMeter;
