import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Produtor from '../views/Produtor';
import Home from '../views/Home';
import Cesta from '../views/Cesta';
import Resumo from '../views/Resumo';

const Stack = createNativeStackNavigator();
export default function ProdutorRotas({ ComponentePrincipal = Home }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={ComponentePrincipal} />
      <Stack.Screen name="Resumo" component={Resumo} />
      <Stack.Screen name="Produtor" component={Produtor} />
      <Stack.Screen name="Cesta" component={Cesta} />
    </Stack.Navigator>
  );
}
