import React, { useState } from "react";
import { View,StyleSheet,Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import COLORS from '../constants/Colors';

const CustomSlider =props=>{

    const [sliderValue, setSliderValue] = useState(5);

    let sliderStyle = {
    sliderReal: {
        backgroundColor: '#119EC2',
        width: (this.state.slideValue/50) * 300,
        height:30,
    }
}

    return(

        
        <View style={{borderRadius: 50, overflow: 'hidden'}}>       
        <View style={{flexDirection: 'row', position: 'absolute'}}>
            <View style={styles.sliderDummy}></View>
            <View style={sliderStyle.sliderReal}></View>
        </View>
        <Slider 
            style={{width: 300, height: 30, borderRadius: 50}}
            minimumValue={0}
            maximumValue={50}
            value={this.state.slideValue}
            onValueChange={(value)=> this.setState({ slideValue: value}) }
            maximumTrackTintColor='transparent'  
            minimumTrackTintColor='transparent'
            />  

        </View>

    );
};

export default CustomSlider;

const styles = StyleSheet.create({
    sliderDummy: {
        backgroundColor: '#d3d3d3',
        width: 300,
        height:30,
        borderRadius: 50,
        position: 'absolute',                
    },

});