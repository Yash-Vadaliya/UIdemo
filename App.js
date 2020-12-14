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

import Splash from './utils/src/Splash';
import Login from './utils/src/Login';
import Home from './utils/src/Home';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Splash'>
          <Stack.Screen name='Splash' component={Splash} />
          <Stack.Screen name='AuthStack' component={AuthStack} />
          <Stack.Screen name='HomeStack' component={HomeStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

function AuthStack() {
  <Stack.Navigator>
    <Stack.Screen name='Login' component={Login} />
  </Stack.Navigator>
}

function HomeStack() {
  <Stack.Navigator>
    <Stack.Screen name='Home' component={Home} />
  </Stack.Navigator>
}

const styles = StyleSheet.create({
  
});

export default App;
