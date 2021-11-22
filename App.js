import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScaleMeterOneScreen from './src/screens/ScaleMeterOneScreen';
import { NavigationContainer } from '@react-navigation/native';
import ScaleMeterTwoScreen from './src/screens/ScaleMeterTwoScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const App=()=> {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="first" 
            screenOptions={{
              headerShown: false
            }}
        >
            <Stack.Screen name="first" component={ScaleMeterOneScreen} />
            <Stack.Screen name="second" component={ScaleMeterTwoScreen} />
        </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
