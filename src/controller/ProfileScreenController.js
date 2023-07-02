import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { DataContext } from '../context/context'
import ProfileScreenModel from '../models/ProfileScreenModel'
import Profile from '../screens/bottomscreens/ProfileScreen'

const ProfileScreenController = () => {

    const {userInfo}=useContext(DataContext)

    const[user,setUser]=useState(new ProfileScreenModel(
        userInfo.userImage,
        userInfo.userName,
        userInfo.userEmail,
        userInfo.userBio
    ))

  return (
   <Profile userInfo={user}/>
  )
}

export default ProfileScreenController

const styles = StyleSheet.create({})