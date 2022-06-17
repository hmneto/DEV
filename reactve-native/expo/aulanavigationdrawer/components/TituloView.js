import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default props => {

  return(
    <View style={ [Estilo.view, {backgroundColor: props.color || '#1f1f1f'}] }> 
      <Text style={ Estilo.text }> 
        { props.children }
      </Text>
    </View>
  )
}

const Estilo = StyleSheet.create({
  view: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 50,
    color: '#f1f1f1'
  }
})