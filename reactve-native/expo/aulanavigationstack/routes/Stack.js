import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import Tela1 from '../screens/tela1'
import Tela2 from '../screens/tela2'
import Tela3 from '../screens/tela3'

// Método de navegação
const Stack = createNativeStackNavigator()

export default props => (

  <Stack.Navigator initialRouteName="Tela1"
                   screenOptions={ 
                     {
                      headerShown: false
                     } 
                   }
  >
    <Stack.Screen name="Tela1" 
                  component={Tela1}
                  options={ 
                    {
                      title: 'Home'
                    } 
                  }
    />
    <Stack.Screen name="Tela2" 
                  component={Tela2}
    />
    <Stack.Screen name="Tela3" 
                  component={Tela3}
    />
  </Stack.Navigator>
    
)
