import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import sucesso from '../assets/sucesso.png';
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
  const {produtor, compra} = route.params;
  const nomeCesta = compra.nome;
  const mensagemCompleta = mensagemCompra?.replace('$NOME', nomeCesta);

  return (
    <View style={estilos.tela}>
      <View style={estilos.conteudo}>
        <Image style={estilos.sucesso} source={sucesso} />
        <View style={estilos.textos}>
          <Texto style={estilos.principal}>
            {mensagemPrincipalPedidoFeito}
          </Texto>
          <Texto style={estilos.compra}>{mensagemCompleta}</Texto>
          <TouchableOpacity
            style={estilos.botao}
            onPress={() => {
              navigation.navigate('HomeScreen');
            }}>
            <Texto style={estilos.textoBotao}>{botaoHomePedidoFeito}</Texto>
          </TouchableOpacity>
          <TouchableOpacity
            style={[estilos.botao, estilos.botaoProdutor]}
            onPress={() => {
              navigation.navigate('Produtor', produtor);
            }}>
            <Texto style={[estilos.textoBotao, estilos.textoBotaoProdutor]}>
              {botaoProdutorPedidoFeito}
            </Texto>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  conteudo: {
    zIndex: 0,
  },
  sucesso: {
    width: '100%',
    height: undefined,
    aspectRatio: 360 / 300,
  },
  textos: {
    paddingHorizontal: 16,
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
  botao: {
    marginTop: 16,
    backgroundColor: '#2A9F85',
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 16,
    lineHeight: 26,
  },
  botaoProdutor: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ECECEC',
  },
  textoBotaoProdutor: {
    color: '#464646',
  },
});
