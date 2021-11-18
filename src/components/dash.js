import React from "react";
import { View,StyleSheet,Text } from "react-native";
import COLORS from '../constants/Colors'

const Dash=props=>{

	var itemsDash = [];

	for(let i = 0; i < props.counter; i++){
        itemsDash.push(      
                <View style={(props.position==i)?styles.itemContainer:styles.itemContainerSelected}></View>
                )
    }


    return(
        <View style={styles.dashContainer}>
            {itemsDash}
        </View>
    );
}


const styles = StyleSheet.create({

    dashContainer:{
        marginVertical:10,
        marginHorizontal:5,
        flexDirection:'row',
        height:4,
    },
    itemContainerSelected:{
        flex:1,
        marginHorizontal:8,
        backgroundColor:COLORS.dividerColor,
        borderRadius:2
    },
    itemContainer:{
        flex:1,
        marginHorizontal:8,
        backgroundColor:COLORS.whiteColor,
        borderRadius:2
    },
  });


  export default Dash;