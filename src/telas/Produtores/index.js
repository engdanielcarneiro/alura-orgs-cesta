import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import useProdutores from '../../hooks/useProdutores';
import useTextos from '../../hooks/useTextos';
import Produtor from './componentes/Produtor';
import Topo from './componentes/Topo';

export default function Produtores({melhoresProdutores}) {
  const navigation = useNavigation();
  const lista = useProdutores(melhoresProdutores);
  const {tituloProdutores} = useTextos();

  const TopoLista = () => {
    return (
      <>
        <Topo melhoresProdutores={melhoresProdutores} />
        <Text style={estilos.titulo}>{tituloProdutores}</Text>
      </>
    );
  };

  return lista.length > 0 ? (
    <FlatList
      data={lista}
      renderItem={({item}) => (
        <Produtor
          {...item}
          aoPressionar={() => {
            navigation.navigate('Produtor', {...item});
          }}
        />
      )}
      keyExtractor={({nome}) => nome}
      ListHeaderComponent={TopoLista}
      style={estilos.lista}
    />
  ) : (
    <View style={estilos.semProdutores}>
      <Text style={estilos.textoSemProdutores}>
        Não há produtores com mais de 4 estrelas no momento.
      </Text>
    </View>
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
  semProdutores: {
    justifyContent: 'center',
    height: '100%',
  },
  textoSemProdutores: {
    fontSize: 16,
    lineHeight: 28,
    textAlign: 'center',
  },
});
