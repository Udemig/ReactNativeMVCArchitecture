import { StyleSheet, Text, View } from 'react-native'
import React, { useContext,useEffect ,useState} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { DataContext } from '../../context/context'
import BottomNavigator from '../bottomnavigator/BottomNavigator'
import AuthNavigator from '../authnavigator/AuthNavigator'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';

const RootNavigator = () => {

const {userAvaible,setUserAvaible}=useContext(DataContext)

const RootStack=createNativeStackNavigator()

const[userr,setUserr]=useState(null)

function onResult(QuerySnapshot) {
  console.log('Got Users collection result.');
  setUserr(QuerySnapshot._data)

}

function onError(error) {
  console.error(error);
}

useEffect(()=>{


  firestore().collection('Users').doc('Ayşe Albayrak').onSnapshot(onResult, onError);

},[])

console.log(userr)
  return (
<>
{userAvaible==true?(<BottomNavigator/>) :(<AuthNavigator/>)}</>
  )
}

export default RootNavigator

const styles = StyleSheet.create({})

