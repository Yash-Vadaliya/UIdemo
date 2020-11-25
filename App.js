import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App: () => React$Node = () => {
  return (
    <>
    <View style={{alignSelf: 'center',flex: 0.75,margin: 70}}>
      <View>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg',
          }}
        />
      </View>
      <View>
        <Text style={styles.name}>YASH VADALIYA</Text>
      </View>
      <View style={{
         flex: 0.15,
         flexDirection: 'row'
      }}>
        <View style={{margin: 2,width: '50%', alignSelf:'center'}}>
          <Text style={{textAlign: 'center',fontWeight: 'bold',fontSize: 18}}>Email ID: </Text>
        </View>
        <View style={{margin: 4, width: '50%', alignSelf:'center'}}>
          <Text style={{textAlign: 'left',fontSize: 18}}>abc@gmail.com</Text>
        </View>
      </View>

      <View style={{
          flex: 0.15,
          flexDirection: 'row'
        }}>
          <View style={{margin: 2,width: '50%', alignSelf:'center'}}>
            <Text style={{textAlign: 'center',fontWeight: 'bold',fontSize: 18}}>Phone No.: </Text>
          </View>
          <View style={{margin: 4, width: '50%', alignSelf:'center'}}>
            <Text style={{textAlign: 'left',fontSize: 18}}>1234567890</Text>
          </View>
        </View>

        <View style={{
          flex: 0.15,
          flexDirection: 'row'
        }}>
          <View style={{margin: 2,width: '50%', alignSelf:'center'}}>
            <Text style={{textAlign: 'center',fontWeight: 'bold',fontSize: 18}}>City: </Text>
          </View>
          <View style={{margin: 4, width: '50%', alignSelf:'center'}}>
            <Text style={{textAlign: 'left',fontSize: 18}}>Rajkot</Text>
          </View>
        </View>

        <View style={{
          flex: 0.15,
          flexDirection: 'row'
        }}>
          <View style={{margin: 2,width: '50%', alignSelf:'center'}}>
            <Text style={{textAlign: 'center',fontWeight: 'bold',fontSize: 18}}>State: </Text>
          </View>
          <View style={{margin: 4, width: '50%', alignSelf:'center'}}>
            <Text style={{textAlign: 'left',fontSize: 18}}>Gujarat</Text>
          </View>
        </View>

        <View style={{
          flex: 0.15,
          flexDirection: 'row'
        }}>
          <View style={{margin: 2,width: '50%', alignSelf:'center'}}>
            <Text style={{textAlign: 'center',fontWeight: 'bold',fontSize: 18}}>Country : </Text>
          </View>
          <View style={{margin: 4, width: '50%', alignSelf:'center'}}>
            <Text style={{textAlign: 'left',fontSize: 18}}>India</Text>
          </View>
        </View>
        </View>
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
    borderColor: 'red',
    borderWidth: 2,
    margin: 10,
    textAlign: 'center'
  }
});

export default App;
