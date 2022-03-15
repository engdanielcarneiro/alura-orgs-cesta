import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import useProdutores from '../../hooks/useProdutores';
import useTextos from '../../hooks/useTextos';
import Produtor from './componentes/Produtor';
import Topo from './componentes/Topo';

export default function Produtores({melhoresProdutores}) {
  const navigation = useNavigation();
  const route = useRoute();
  const lista = useProdutores(melhoresProdutores);
  const {tituloProdutores, mensagemCompra} = useTextos();
  const [exibeMensagem, setExibeMensagem] = useState(false);

  const nomeCompra = route.params?.compra.nome;
  const timestampCompra = route.params?.compra.timestamp;
  const mensagemCompleta = mensagemCompra?.replace('$NOME', nomeCompra);

  useEffect(() => {
    setExibeMensagem(!!nomeCompra);
    let timeout;
    if (nomeCompra)
      timeout = setTimeout(() => {
        setExibeMensagem(false);
      }, 3000);

    return () => clearTimeout(timeout);
    // everything we return from a useEffect will be executed before the execution
    // of the next useEffect
  }, [timestampCompra]);

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

  return lista.length == 0 && melhoresProdutores ? (
    <View style={estilos.semProdutores}>
      <Text style={estilos.textoSemProdutores}>
        Não há produtores com mais de 4 estrelas no momento.
      </Text>
    </View>
  ) : (
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
  compra: {
    backgroundColor: '#EAF5F3',
    padding: 16,
    color: '#464646',
    fontSize: 16,
    lineHeight: 26,
  },
});
