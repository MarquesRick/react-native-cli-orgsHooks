import React from 'react';
import {Text, StyleSheet, FlatList} from 'react-native';
//import {carregaProdutores} from '../../../services/carregaDados';
import useProdutores from '../../../hooks/useProdutores';
import Produtor from './Produtor';

// *formato de função*
// : remoando propriedade
export default function Produtores({topo: Topo}) {
  const [titulo, lista] = useProdutores();
  const topoLista = () => {
    return (
      <>
        <Topo />
        <Text style={estilos.titulo}>{titulo}</Text>
      </>
    );
  };

  return (
    <>
      <FlatList
        data={lista}
        //mesmo papel do map()
        renderItem={({item}) => <Produtor {...item} />}
        keyExtractor={({nome}) => nome}
        ListHeaderComponent={topoLista}
      />
    </>
  );
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
});
