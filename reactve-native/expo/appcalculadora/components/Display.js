import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default props => {



  return(
    <View style={Estilo.display}>
      <Text style={Estilo.displayText}>
        {props.val}
      </Text>
    </View>
  )
}

const Estilo = StyleSheet.create({
  display:{
    flexGrow:1,
    padding:20,
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent:'center',
    // alignItems:'end'
  },
  
  displayText:{
    fontSize:60,
    color:'#f1f1f1'
  }
})