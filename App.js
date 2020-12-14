import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splashscreeen from './utils/src/Splash';
import LoginScreen from './utils/src/Login';
import HomeScreen from './utils/src/Home';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="Splash" component={Splashscreeen} />
        <Stack.Screen name="HomeStack" component={HomeStack}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};

function AuthStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name='Login' component={LoginScreen}/>
    </Stack.Navigator>
  );
}
function HomeStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen}/>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
