import React from "react";
import { View,StyleSheet,Dimensions } from "react-native";
import COLORS from '../constants/Colors'


const windowWidth = Dimensions.get('window').width;
const cirleHolderW=40,circleOuterW=80,middleCircleW=140, innerCircleW=220;

const Circle=props=>{

    return(
        <View style={[styles.outerCircle,
            {width:(props.radius*2),height:(props.radius*2),
                borderRadius:props.radius,        
                borderStyle:props.borderStyle,
                backgroundColor:props.bgColor,
                borderColor:props.bColor
    }]}>
            {props.children}
        </View>
    );
}


const styles = StyleSheet.create({
    outerCircle:{
        borderWidth:3,
        borderStyle:'dashed',
        alignItems:'center',
        justifyContent:'center',
    },
  });


  export default Circle;