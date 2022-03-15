import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Texto from '../componentes/Texto';
import useTextos from '../hooks/useTextos';

export default function PedidoFeito() {
  const {
    mensagemPrincipalPedidoFeito,
    mensagemCompra,
    botaoHomePedidoFeito,
    botaoProdutorPedidoFeito,
  } = useTextos();
  const navigation = useNavigation();
  const route = useRoute();
  const produtor = route.params;

  return (
    <View style={estilos.conteudo}>
      <Texto style={estilos.principal}>{mensagemPrincipalPedidoFeito}</Texto>
      <Texto style={estilos.compra}>{mensagemCompra}</Texto>
      <TouchableOpacity
        style={estilos.botaoHome}
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}>
        <Texto style={estilos.textoBotaoHome}>{botaoHomePedidoFeito}</Texto>
      </TouchableOpacity>
      <TouchableOpacity
        style={estilos.botaoProdutor}
        onPress={() => {
          navigation.navigate('Produtor', produtor);
        }}>
        <Texto style={estilos.textoBotaoProdutor}>
          {botaoProdutorPedidoFeito}
        </Texto>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  conteudo: {
    paddingHorizontal: 16,
    paddingVertical: 27,
  },
  principal: {
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    color: '#464646',
  },
  compra: {
    fontSize: 16,
    lineHeight: 26,
    color: '#A3A3A3',
  },
  botaoHome: {
    backgroundColor: '#2A9F85',
    width: '100%',
    height: 58,
    borderRadius: 6,
    padding: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  textoBotaoHome: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  botaoProdutor: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 58,
    borderRadius: 6,
    padding: 16,
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ECECEC',
    marginTop: 16,
  },
  textoBotaoProdutor: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'center',
    color: '#464646',
  },
});
