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


        {/* <View style={styles.mainContainer}>
          <CustomInput
            text="facebook"
            onPress={setScreen('ForgotPassword')}/>
        </View>  */}

const Login = (props) =>{

  //let a = new getScreen(); style={styles.body}
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  // Functions  //

  // Sign on Functions
  const onSignInFacebook = () => {
    console.log("facebook")
  }

  const onSignInGoogle = () => {
    console.log("Google")
  }

  const onSignInApple = () => {
    console.log("Apple")
  }

  const LoginWithUserName = () => {
    console.log("Log in")
  }

  return(
  <View >
    
      <View style={styles.mainContainer}>
        <View style={styles.UserNameContainer}> 
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

          <Button title = 'Login' onPress={() => LoginWithUserName()}></Button>         
          <Button title = 'Sign Up' onPress={() => setScreen('SignUp')}></Button> 
          <Button title = 'Forgot Password' onPress={() => setScreen('ForgotPassword')}></Button>     
        </View>

        <View style={styles.SiteLogins}>
        <Button title = 'Facebook' onPress={() => onSignInFacebook()}></Button>
        <Button title = 'Google' onPress={() => onSignInGoogle()}></Button>
        <Button title = 'Apple' onPress={() => onSignInApple()}></Button>
        </View>
      </View>
      
   </View>)
}


 export default Login;

 const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent:'center',
    //flex: 1,r
    width:'100%',
    height:'100%'
  },
  map: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent:'center',
    width:'100%',
    height:'100%'
  },
  mainContainer: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent:'center',
    width:'100%',
    height:'100%'
    
  },
  SiteLogins: {
    backgroundColor: '#ffffff',
    //alignItems: 'center',
    justifyContent:'center',
    width:'100%',
    paddingTop: 50
    //height:'100%'
  },
  UserNameContainer: {
    backgroundColor: '#ffffff',
    //alignItems: 'center',
    //justifyContent:'center',
    width:'100%',
    //height:'100%'
  }

 });