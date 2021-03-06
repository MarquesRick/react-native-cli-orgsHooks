import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FlatList, Text, StyleSheet } from 'react-native';

import Produtor from './components/Produtor';
import Topo from './components/Topo';
import useProdutores from '../../hooks/useProdutores';
import useTextos from '../../hooks/useTextos';

export default function Produtores({ melhoresProdutores }) {
  const navigation = useNavigation();
  const route = useRoute();
  const [exibeMensagem, setExibeMensagem] = useState(false);
  const nomeCompra = route.params?.compra.nome;
  const timeStampCompra = route.params?.compra.timeStamp;
  const lista = useProdutores(melhoresProdutores);
  const { tituloProdutores, mensagemCompra } = useTextos();
  const mensagemCompleta = mensagemCompra?.replace('$NOME', nomeCompra);

  useEffect(() => {
    setExibeMensagem(!!nomeCompra);
    let timeout;

    if (nomeCompra) {
      timeout = setTimeout(() => {
        setExibeMensagem(false);
      }, 3000);
    }
    //para limpar o timeout em caso de nao executar varios ao mesmo tempo
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeStampCompra]);

  const TopoLista = () => {
    return (
      <>
        <Topo melhoresProdutores={melhoresProdutores} />
        {exibeMensagem && (
          <Text style={estilos.compra}>{mensagemCompleta}</Text>
        )}
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
            navigation.navigate('Produtor', item);
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
  compra: {
    backgroundColor: '#EAF5F3',
    padding: 16,
    color: '#464646',
    fontSize: 16,
    lineHeight: 26,
  },
});
