import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Icons
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Screens
import Tela1 from '../screens/tela1'
import Tela2 from '../screens/tela2'
import Tela3 from '../screens/tela3'

// Método de navegação
const Tabs = createBottomTabNavigator()

export default props => (

  <Tabs.Navigator initialRouteName="Tela1"
                  screenOptions={
                    {
                      headerShown: false
                    }
                  }
                  tabBarOptions={
                    {
                      activeTintColor: 'red',
                      inactiveTintColor: 'blue',
                      labelStyle: {
                        fontSize: 24
                      },
                      showLabel: false
                    }
                  }
  >
    <Tabs.Screen  name="Tela1" 
                  component={Tela1}
                  options={ 
                    {
                      tabBarLabel: 'Home',
                      tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="home" 
                                                size={size} 
                                                color={color} 
                        />
                      )
                    } 
                  }
    />
    <Tabs.Screen name="Tela2" 
                  component={Tela2}
                  options={ 
                    {
                      tabBarLabel: 'News',
                      tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="bell" 
                                                size={size} 
                                                color={color} />
                      )
                    } 
                  }
    />
    <Tabs.Screen name="Tela3" 
                  component={Tela3}
                  options={ 
                    {
                      tabBarLabel: 'About',
                      tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="account-supervisor" 
                                                size={size} 
                                                color={color} />
                      )
                    } 
                  }
    />
  </Tabs.Navigator>
    
)
