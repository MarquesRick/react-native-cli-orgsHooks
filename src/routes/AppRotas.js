import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import ProdutorRotas from './ProdutorRotas';
import MelhoresProdutoresRotas from './MelhoresProdutoresRotas';

const Tab = createMaterialBottomTabNavigator();
export default function AppRotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={ProdutorRotas} />
        <Tab.Screen
          name="Melhores Produtores"
          component={MelhoresProdutoresRotas}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
