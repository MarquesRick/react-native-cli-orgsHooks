import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Home from './src/views/Home';

function App() {
  return (
    <>
      <SafeAreaView style={estilos.tela}>
        <Home />
      </SafeAreaView>
    </>
  );
}

//expandir o max que puder na tela
const estilos = StyleSheet.create({
  tela: {
    flex: 1,
  },
});

export default App;
