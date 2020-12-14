import React, { useState,useEffect } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
function  Splash({navigation}) {
useEffect(()=>{
    setTimeout(() => {
        checklog();
    }, 5000);
},[])
 async function checklog() {
     const value=await AsyncStorage.getItem('@isUserLogin');
     if(value && Number(value) == 1){
         navigation.reset({
             index:0,
             routes:[{name:'HomeStack'}],
         });
     }else{
         navigation.reset({
             index:0,
             routes:[{name:'AuthStack'}],
         });
     }
}
 return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Splash Screen</Text>
        </View>
 );
}
export default Splash;