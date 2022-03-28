import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../views/Home';
import MelhoresProdutores from '../views/MelhoresProdutores';

const Tab = createMaterialBottomTabNavigator();
export default function AppRotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Melhores Produtores" component={MelhoresProdutores} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
