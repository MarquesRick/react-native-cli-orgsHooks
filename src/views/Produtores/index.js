import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, Text, StyleSheet } from 'react-native';

import Produtor from './components/Produtor';
import Topo from './components/Topo';
import useProdutores from '../../hooks/useProdutores';
import useTextos from '../../hooks/useTextos';
import topo from '../../assets/produtores/topo.png';

export default function Produtores({ melhoresProdutores }) {
  const navigation = useNavigation();
  const lista = useProdutores(melhoresProdutores);
  const { tituloProdutores } = useTextos();

  const TopoLista = () => {
    return (
      <>
        <Topo
          melhoresProdutores={melhoresProdutores}
          imagem={topo}
          altura={150}
        />
        <Text style={estilos.titulo}>{tituloProdutores}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={lista}
      renderItem={({ item }) => (
        <Produtor
          {...item}
          aoPressionar={() => {
            navigation.navigate('Produtor', item); //pass parameter
          }}
        />
      )}
      keyExtractor={({ nome }) => nome}
      ListHeaderComponent={TopoLista}
      style={estilos.lista}
    />
  );
}

const estilos = StyleSheet.create({
  lista: {
    backgroundColor: '#ffffff',
  },
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});
