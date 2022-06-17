import React from 'react'

import { createDrawerNavigator } from '@react-navigation/drawer'

// Screens
import Tela1 from '../screens/tela1'
import Tela2 from '../screens/tela2'
import Tela3 from '../screens/tela3'

// Método de navegação
const Drawer = createDrawerNavigator()

export default props => (

  <Drawer.Navigator>
    <Drawer.Screen name="Tela1" 
                  component={Tela1}
                  options={ 
                    {
                      title: 'Home'
                    } 
                  }
    />
    <Drawer.Screen name="Tela2" 
                  component={Tela2}
                  options={ 
                    {
                      title: 'News'
                    } 
                  }
    />
    <Drawer.Screen name="Tela3" 
                  component={Tela3}
                  options={ 
                    {
                      title: 'About'
                    } 
                  }
    />
  </Drawer.Navigator>
    
)
