  
import React, { useState } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
function Home({navigation}) {

  async function logout() {
    await AsyncStorage.clear()
    navigation.reset({
      index: 0,
      routes: [{ name: 'Splash' }],
    });
  }

  return(
    <View>
        <Text>Home screen</Text>
        <Button title='Logout' onPress={() => logout()}/>
    </View>
);

}
export default Home