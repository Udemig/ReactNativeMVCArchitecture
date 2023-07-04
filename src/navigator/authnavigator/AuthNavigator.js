import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignIn from '../../screens/authscreens/SignIn'
import SignUp from '../../screens/authscreens/SignUp'

const AuthNavigator = () => {

const AuthStack=createNativeStackNavigator()

  return (
  <AuthStack.Navigator>
        <AuthStack.Screen options={{headerShown:false}} name='SignUp' component={SignUp}/>
    <AuthStack.Screen options={{
      headerShown:false
    }} name='SignIn' component={SignIn} />


  </AuthStack.Navigator>
  )
}

export default AuthNavigator

