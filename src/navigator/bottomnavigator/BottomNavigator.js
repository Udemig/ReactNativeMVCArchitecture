import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Products from '../../screens/bottomscreens/ProductsScreen'
import Profile from '../../screens/bottomscreens/ProfileScreen'
import ProfileScreenController from '../../controller/ProfileScreenController'

const BottomNavigator = () => {

    const Bottom=createBottomTabNavigator()

  return (
<Bottom.Navigator>
<Bottom.Screen options={{headerShown:false}}  name='Profile ' component={ProfileScreenController}/>
    <Bottom.Screen options={{headerShown:false}} name='Products' component={Products}/>

</Bottom.Navigator>
  )
}

export default BottomNavigator

const styles = StyleSheet.create({})