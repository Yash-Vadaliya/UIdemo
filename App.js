import React, { useState, Component } from 'react';
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
  FlatList,
  Alert,
  Platform,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { WebView } from 'react-native-webview';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';


//import { styles } from './utils/styles/index';
import TodoItem from './app/TodoItem';
import AddTodo from './app/addTodo';
import Header from './app/header';

const App: () => React$Node = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
 
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };
 
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
 
  const showDatepicker = () => {
    showMode('date');
  };
 
  const showTimepicker = () => {
    showMode('time');
  };

  const createThreeButtonAlert = () =>
  Alert.alert(
    "Alert Title",
    "My Alert Msg",
    [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed")
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: false }
  );
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <>
      <View style={styles.container}>
        <Text style={{
          fontFamily: 'GreatVibes-Regular',
          fontSize: 40,
          color: 'red',
        }}>Welcome to react native</Text>

        <Button title='Alert' onPress={createThreeButtonAlert} />

        <View>
      <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
    <RNPickerSelect
            selectedValue={selectedValue}
            style={{placeholder: 'game'}}
            onValueChange={(value,index) => setSelectedValue(Value)}
            items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
        />
       <View style={{height: '50%', width: '100%', flexDirection: 'row'}}> 
         <WebView source={{uri: 'https://reactnative.dev/'}} />
       </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  
})

export default App;