import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppRotas from './src/routes/AppRotas';
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={estilos.safeArea}>
        <StatusBar />
        <AppRotas />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const estilos = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
