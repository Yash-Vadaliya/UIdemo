import React,{ Component, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import { styles } from './styles/index';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';
import {Picker} from '@react-native-picker/picker';

const App: () => React$Node = () => {
  const [state, setState] = useState({
    gender: 'male',
    
  });
  const [date, setDate] = useState(new Date());
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

  let res = String(date.getDate())+' - '+String(date.getMonth()+1)+' - '+String(date.getFullYear());

  const [selectedValue, setSelectedValue] = useState('');

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  const submitHandler = (username, password) => {
    if(username == '' && password == ''){
      Alert.alert('please enter details');
    }
    else if(username == ''){
      Alert.alert('please enter username');
    }
    else if(password == ''){
      Alert.alert('please enter password');
    }
    else{
    Alert.alert('Credentials', username +' - '+ password);
    }
  }
  const forgotpasswordHandle = () => {
    Alert.alert('forgote password');
  }

  const changeUsername = (val) => {
    setUsername(val);
}
  const changePassword = (val) => {
    setPassword(val);
  }

  return (
    <>
      <View style={styles.container}>
      <Text style={styles.inputext}>Sample Login Form</Text>
        <TextInput
          placeholder='username'
          onChangeText={changeUsername}
          style={styles.input}
        />
        <TextInput
          placeholder='password'
          onChangeText={changePassword}
          secureTextEntry={true}
          style={styles.input}
        />
        
         <View>
        <Button onPress={showDatepicker} title="Select date of birth!" />
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
      <Text style={styles.datetext}>{res}</Text>
      <Picker
        selectedValue={state.gender}
        style={styles.Picker}
        onValueChange={(itemValue, itemIndex) => setState({gender: itemValue})
        }>
        <Picker.Item label="male" value="male" />
        <Picker.Item label="female" value="female" />
        <Picker.Item label="other" value="other" />
      </Picker>
              
        <Button
          title={'Login'}
          style={styles.input}
          onPress={() => submitHandler(username, password)}
        />
        <Text style={styles.forgot} onPress={() => forgotpasswordHandle()}>forgot password</Text>
      </View>
    </>
  );
};

export default App;
