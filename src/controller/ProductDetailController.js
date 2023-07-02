import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { DataContext } from '../context/context'
import ProductDetailModel from '../models/ProductDetailModel'
import ProductDetail from '../screens/homeScreens/ProductDetail'

const ProductDetailController = () => {

const {productDetailInfo}=useContext(DataContext  )

const [productDetailCont,setProductDetailCont]=useState(new ProductDetailModel(


    productDetailInfo.name,
    productDetailInfo.price,
    productDetailInfo.description,
    productDetailInfo.rating,
    productDetailInfo.image

))




  return (
<ProductDetail productDetailProp={productDetailCont}/>
  )
}

export default ProductDetailController

const styles = StyleSheet.create({})