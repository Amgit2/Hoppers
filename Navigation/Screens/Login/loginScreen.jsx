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

import { setScreen } from '../../../App';

import CustomInput from '../../../Components/Custominput';



const Login = (props) =>{

  //let a = new getScreen(); style={styles.body}
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  return(
  <View >
    
      <View>
        <Button title = 'Hello! Click me to log in, or dont; I dont care :)' onPress={() => setScreen('Favorites')}></Button> 
        <CustomInput 
          placeholder="Username or Email"
          value = {username} 
          setValue={setUsername}
        />
        <CustomInput 
          placeholder="Password"
          value = {password} 
          setValue={setPassword}
        />
      </View>
      
   </View>)
}


 export default Login;

 const styles = StyleSheet.create({
  body: {
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