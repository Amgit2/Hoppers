import React, { useEffect, useState } from 'react';
import {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
  Image,
} from 'react-native';
// Import Map and Marker
import MapView, {Marker, enableLatestRenderer, PROVIDER_GOOGLE } from 'react-native-maps';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Profile = (props) =>{

  const [profileScreen, setProfileScreen] = useState(
    ""
  );
  
  initialJson = {
    userName : 'TestUserProfile',
    pciture: '',
    rating: 3,
    points: 100,
    temp: ''
};

  const [userName, setUserName] = useState(
    'TestUserProfile'
  );
  
  function setJsonVariable(variable, value){
    if(variable == 'userName'){
      console.log(value);
      setUserName(value)
    }
  }

  return(
  <View style={styles.button}>
    <View style={styles.body}>
      <Image source={require('../../../Img/stool.png')} />
      <Text>"UserName : "  + {userName}</Text>
      <Button title = 'Hello, Im Profile' onPress={() => setJsonVariable('userName', 'new name bla')}></Button>
    </View>     
   </View>)
}


 export default Profile;

 const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent:'center',
    flex: 3,
  },
  button: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent:'center',
    //flex: 1,
    width:'100%',
    height:'100%'
  },
  map: {
    width:'100%',
    height:'100%'
  },
 });