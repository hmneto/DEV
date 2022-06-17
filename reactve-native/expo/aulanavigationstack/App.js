import React from 'react'
import { View, StyleSheet } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'

import Stack from './routes/Stack'

export default () => (
  <View style={ Estilo.container }> 
  
    <NavigationContainer>

      <Stack />

    </NavigationContainer>
  
  </View>
)

const Estilo = StyleSheet.create({
  container: {
    flexGrow: 1
  }
})