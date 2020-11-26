import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App: () => React$Node = () => {
  const [value, onChangeText] = React.useState('Email Id:');
  const [value1, onChangePass] = React.useState('Password');
  return (
    <>
    <SafeAreaView style={{flex: 1,backgroundColor: '#b19cd9'}}>
    <View style={{alignSelf: 'center',marginTop: 150}}>
    <View>
        <Text style={styles.name}>FOOBAR</Text>
      </View>
      <View style={{marginTop: 100}}>
        <TextInput
        style={{ height: 40,width: '100%', borderBottomColor: 'gray', borderBottomWidth: 1 }}
        placeholder = "Email Id"
        onChangeText={text => onChangeText(text)}
        value={value}
      />
        </View> 

        <View>
        <TextInput
        style={{ height: 40,width: '100%', borderBottomColor: 'gray', borderBottomWidth: 1 }}
        placeholder = "Password"
        onChangePass={text => onChangePass(text)}
        value1={value}
      />
        </View> 

        <View style={{marginTop: 50}}>
        <Button
        title="Login"
        width='100%'
        color="#f194ff"
        onPress={() => Alert.alert('Cannot press this one')}
      />
        </View>

    </View>
      </SafeAreaView>  
    </>
  );
};

const styles = StyleSheet.create({
  
  tinyLogo: {
    alignSelf: 'center',
    width: 50,
    height: 50,
  },
  name: {
    //borderColor: 'red',
    fontSize: 50,
    borderWidth: 0,
    //margin: 10,
    textAlign: 'center'
  }
});

export default App;
