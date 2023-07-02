import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProductsList from '../homeScreens/ProductsList'
import ProductDetail from '../homeScreens/ProductDetail'
import ProductDetailController from '../../controller/ProductDetailController'

const Products = () => {

const ProductsStack=createNativeStackNavigator()

  return (
<ProductsStack.Navigator>
  <ProductsStack.Screen options={{headerShown:false}} name='ProductList' component={ProductsList}/>
  <ProductsStack.Screen name='ProductDetail' component={ProductDetailController}/>
</ProductsStack.Navigator>
  )
}

export default Products

const styles = StyleSheet.create({})