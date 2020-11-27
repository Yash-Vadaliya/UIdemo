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
  FlatList,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { images } from './src/images/index';

import { styles } from './utils/styles/index';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'rahul',
    post: 'hello, rahul first post',
    image: images.post,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'virat',
    post: 'hello, virat first post',
    image: images.postTwo,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'hardik',
    post: 'hello, hardik first post',
    image: images.postThree,
  },
];

const Item = ({ name,post,image }) => (
  <View>
    <View style={ styles.container }>
          <View style={ styles.profile }>
          <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg',
          }}
        />
          </View>
          <View style={ styles.nameview }>
        <Text style={ styles.textname }>{ name }</Text>
          </View>
          <View style={ styles.menu }>
          <Image
          style={styles.logo}
          source={images.menu}
        />
          </View>
        </View>

          <View>
          <Image
          style={styles.mainphoto}
          source={ image }
        />
          </View>

          <View  style={ styles.bar }>
          <Image
          source={images.heart}
        />
         <Image
          style={ styles.comment }
          source={images.comment}
        />
         <Image
          style={ styles.send}
          source={images.send}
        />
         <Image
          style={ styles.save }
          source={images.save}
        />
          </View>

        <View style={ styles.posttextview }>
      <Text style={ styles.posttext }>{ post }</Text>
        </View>
  </View>
);

const App: () => React$Node = () => {

  const renderItem = ({ item }) => (
    <Item name={item.name} post={item.post} image={item.image}/>
  );

  return (
    <>
    <SafeAreaView style={ styles.safe }>

    <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

    <View>
    

    </View>
      </SafeAreaView>  
    </>
  );
};


export default App;
