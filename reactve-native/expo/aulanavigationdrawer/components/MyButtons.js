import React from 'react'
import { View, Button, StyleSheet } from 'react-native'

export default props => {

  // console.log(Object.keys(props))

  return(
    <View style={ Estilo.container }> 

      <View style={ Estilo.containerButton }> 
        <Button title="Voltar" 
                onPress={ () => props.navigation.goBack() }
        />      
      </View>

      <View style={ Estilo.containerButton }> 
        <Button title="Avançar" 
                onPress={ () => {
                  
                      props.navigation.navigate(props.tela, { 
                        numero: parseInt(Math.random() * 100)
                        
                        }
                      )
                
                    } 
                }
        />      
      </View>
      

    </View>
  )
}

const Estilo = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  containerButton: {
    flexGrow: 1
  }
})