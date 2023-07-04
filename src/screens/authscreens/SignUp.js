import React, { useState } from 'react';

import {Text, View, Dimensions, StyleSheet} from 'react-native';
import MyTextInput from '../../components/MyTextInput';
import MyButton from '../../components/MyButton';
import SecondaryButton from '../../components/SecondaryButton';
import color from '../../utils/color';
import Lottie from 'lottie-react-native';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';

export default function SignUp() {


  const [newUser,setNewUser]=useState({
    name:'Hasan',
    email:'hasancelikjobbbbb@gmail.com',
    password:'123456',
    profilePhoto:'data:image/jpeg;base64,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'
  })


const onChangeText=(key,value)=>{
  setNewUser({...newUser,[key]:value})
}


const handleSignUp=(user)=>{
  auth()
  .createUserWithEmailAndPassword(newUser.email, newUser.password)
  .then(() => {
    console.log('User account created & signed in!');


    firestore()
  .collection('Users').doc(auth().currentUser.uid)
  
  .set(user)
  .then(() => {
    console.log('User added!');
  });
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
}





  return (
    <View style={styles.mainContainer}>
      <View style={styles.greenContainer}>
        <Lottie
          style={styles.animation}
          source={require('../../animations/122140-log-in.json')}
          autoPlay
          loop
        />
        <Text style={styles.greenContainerText}>Şimdi Kaydol</Text>
      </View>

      <View style={styles.whitecontainer}>
        <View style={styles.inputContainer}>
          <MyTextInput
            leftIconName={'person'}
            label={'Kullanıcı Adı'}
            placeholder={'Kullanıcı Giriniz'}
            onChangeText={(text)=>onChangeText('name',text)}
          />
          <MyTextInput
            label={'E-Mail'}
            leftIconName={'mail'}
            placeholder={'Email Giriniz'}
            onChangeText={(text)=>onChangeText('email',text)}
          />
          <MyTextInput
            rightIconName={'eye-off'}
            label={'Şifre'}
            leftIconName={'lock-closed'}
            placeholder={'Şifre Giriniz'}
            onChangeText={(text)=>onChangeText('password',text)}

          />
        </View>

        <View style={styles.buttonContainer}>
          <MyButton title={'Sign Up'} onPress={()=>handleSignUp(newUser)}/>
          <SecondaryButton title={'Sign In'} />
        </View>
      </View>
    </View>
  );
}

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  mainContainer: {
    position: 'relative',
  },
  greenContainer: {
    height: height,
    width: '100%',
    backgroundColor: color.btnPrimary,
    alignItems: 'center',
  },

  animation: {
    width: 200,
    height: 200,
  },

  greenContainerText: {
    marginTop: 0,
    fontSize: 40,
    fontWeight: '600',
    marginLeft: -150,
    color: 'white',
    letterSpacing: 2,
  },

  whitecontainer: {
    height: '70%',
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 25,
    paddingVertical: 25,
  },

  inputContainer: {
    width: '100%',
    height: '60%',
  },

  buttonContainer: {
    width: '100%',
    height: '20%',
  },
});
