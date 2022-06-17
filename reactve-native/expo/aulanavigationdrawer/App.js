import React from 'react'
import { View, StyleSheet } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'

import Drawer from './routes/Drawer'

export default () => (
  <View style={ Estilo.container }> 
  
    <NavigationContainer>

      <Drawer />

    </NavigationContainer>
  
  </View>
)

const Estilo = StyleSheet.create({
  container: {
    flexGrow: 1
  }
})