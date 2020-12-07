import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00FFFF',
      },
      input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
      },
      inputext: {
        width: 200,
        height: 44,
        padding: 10,
        textAlign:'center',
        fontWeight:'bold',
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
      },
      datetext: {
        marginTop:10, 
        fontSize: 20,
      },
      Picker: {
        height: 50,
        width: '55%', 
        marginLeft: 15,
      },
      forgot: {
        marginTop: 10, 
        fontWeight: 'bold', 
        fontSize: 20,
      },
    });