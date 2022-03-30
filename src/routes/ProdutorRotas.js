import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Produtor from '../views/Produtor';
import Home from '../views/Home';

const Stack = createNativeStackNavigator();
export default function ProdutorRotas({ ComponentePrincipal = Home }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={ComponentePrincipal} />
      <Stack.Screen name="Produtor" component={Produtor} />
    </Stack.Navigator>
  );
}
