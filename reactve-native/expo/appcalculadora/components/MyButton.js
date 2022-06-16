import React from 'react'
import { TouchableHighlight, Text, Dimensions, StyleSheet } from 'react-native'

export default props => {

  const styleButton = [ Estilo.button ]
  if( props.large2 ) styleButton.push( Estilo.buttonLarge2 )
  if( props.large3 ) styleButton.push( Estilo.buttonLarge3 )
  if( props.color ) styleButton.push( Estilo.buttonColor )

  return(
    <TouchableHighlight>
      <Text style={ styleButton }> 
        { props.title }
      </Text>
    </TouchableHighlight>
  )
}

const Estilo = StyleSheet.create({
  button: {
    fontSize: 32,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
    padding: 10,
    width: Dimensions.get('window').width / 4,
    height: Dimensions.get('window').width / 4,
  },
  buttonLarge3: {
     width: (Dimensions.get('window').width / 4) * 3
  },
  buttonLarge2: {
     width: (Dimensions.get('window').width / 4) * 2
  },
  buttonColor: {
    color: '#f1f1f1',
    backgroundColor: '#fa8231'
  }
})