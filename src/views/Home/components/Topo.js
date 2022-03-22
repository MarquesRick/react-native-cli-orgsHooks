import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {carregaTopo} from '../../../services/carregaDados';
import logo from '../../../assets/logo.png';

// *formato de classe*
// mudanca para class para carregarmos apenas uma vez (componentDidMount)
class Topo extends React.Component {
  state = {
    topo: {
      boasVindas: '',
      legenda: '',
    },
  };

  atualizaTopo() {
    const retorno = carregaTopo();
    //sempre usar setState para setar o valor
    this.setState({topo: retorno});
  }
  componentDidMount() {
    this.atualizaTopo();
  }
  render() {
    return (
      <View estilos={estilos.topo}>
        <Image source={logo} style={estilos.imagem} />
        <Text style={estilos.boasVindas}>{this.state.topo.boasVindas}</Text>
        <Text style={estilos.legenda}>{this.state.topo.legenda}</Text>
      </View>
    );
  }
}
const estilos = StyleSheet.create({
  topo: {
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  imagem: {
    width: 70,
    height: 28,
  },
  boasVindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  legenda: {
    fontSize: 16,
    lineHeight: 26,
  },
});

export default Topo;
