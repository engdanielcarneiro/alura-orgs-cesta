import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import sucesso from '../assets/sucesso.png';
import VoltarSvg from '../assets/voltar.svg';
import Texto from '../componentes/Texto';
import useTextos from '../hooks/useTextos';

export default function PedidoFeito() {
  const {
    tituloPedidoFeito,
    mensagemPrincipalPedidoFeito,
    mensagemCompra,
    botaoHomePedidoFeito,
    botaoProdutorPedidoFeito,
  } = useTextos();
  const navigation = useNavigation();
  const route = useRoute();
  const {compra} = route.params;
  const nomeCesta = compra.nome;
  const mensagemCompleta = mensagemCompra?.replace('$NOME', nomeCesta);

  return (
    <View style={estilos.tela}>
      <View style={estilos.topo}>
        <TouchableOpacity
          style={estilos.topoVoltar}
          onPress={() => navigation.goBack()}>
          <VoltarSvg />
        </TouchableOpacity>
        <Texto style={estilos.topoTexto}>{tituloPedidoFeito}</Texto>
      </View>
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
              navigation.popToTop();
            }}>
            <Texto style={estilos.textoBotao}>{botaoHomePedidoFeito}</Texto>
          </TouchableOpacity>
          <TouchableOpacity
            style={[estilos.botao, estilos.botaoProdutor]}
            onPress={() => {
              navigation.pop(2);
            }}>
            <Text style={[estilos.textoBotao, estilos.textoBotaoProdutor]}>
              {botaoProdutorPedidoFeito}
            </Text>
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
  topo: {
    zIndex: 1,
    position: 'absolute',
    width: '100%',
    height: 58,

    backgroundColor: '#FFF',

    //Android
    elevation: 5,

    //IOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    paddingVertical: 16,
    paddingHorizontal: 40,
  },
  topoTexto: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  topoVoltar: {
    width: 24,
    height: 24,
    position: 'absolute',
    left: 16,
    top: 17,
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
