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



const SignUpPage = (props) =>{

  //let a = new getScreen(); style={styles.body}
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [email, setEmail] = useState('');


  // Functions
  const SignUp = () => {
    console.log("Sign Up")
  }

  return(
  <View >
    
      <View style={styles.mainContainer}>
        <Text style={styles.title}> Lets sign you up! </Text>
        
        <CustomInput 
          placeholder="Enter your a username"
          value = {username} 
          setValue={setUsername}
        />       
        <CustomInput 
          placeholder="Enter your email"
          value = {email} 
          setValue={setEmail}
        />
        <CustomInput 
          placeholder="Enter your a password"
          value = {password} 
          setValue={setPassword}
        />

        <CustomInput 
          placeholder="Enter your a password"
          value = {passwordRepeat} 
          setValue={setPasswordRepeat}
        />
        <View style={styles.Buttons}></View>
        <Button title = 'Sign Up' onPress={() => SignUp()}></Button> 
      </View>
      
   </View>)
}


 export default SignUpPage;

 const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent:'center',
    //flex: 1,
    width:'100%',
    height:'100%'
  },
  title: {
    width:'100%',
    textAlign: 'center'
  },
  Buttons: {
    width:'100%'
  },
  mainContainer: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent:'center',
    width:'100%',
    height:'100%'
    
  },
 });