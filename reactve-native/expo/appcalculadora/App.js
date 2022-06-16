import React from 'react'
import { View, StyleSheet } from 'react-native'

import MyButton from './components/MyButton'
import Display from './components/Display'

export default () => (
  <View style={ Estilo.container }> 
    <Display val='2' />
    <View style={ Estilo.teclado }>
      <MyButton title='AC' large3 />
      <MyButton title='/' color />
      <MyButton title='7' />
      <MyButton title='8' />
      <MyButton title='9' />
      <MyButton title='x' color />
      <MyButton title='4' />
      <MyButton title='5' />
      <MyButton title='6' />
      <MyButton title='-' color />
      <MyButton title='1' />
      <MyButton title='2' />
      <MyButton title='3' />
      <MyButton title='+' color />
      <MyButton title='0' large2 />
      <MyButton title='.' />
      <MyButton title='=' color />
    </View>
  

  </View>
)

const Estilo = StyleSheet.create({
  container: {
    flexGrow: 1
  },
  teclado: {
    flexDirection: "row",
    flexWrap: 'wrap'
  }
})