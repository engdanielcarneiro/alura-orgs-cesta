import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import useTextos from '../hooks/useTextos';
import Cesta from '../telas/Cesta';
import Home from '../telas/Home';
import PedidoFeito from '../telas/PedidoFeito';
import Produtor from '../telas/Produtor';

const Stack = createNativeStackNavigator();

export default function ProdutorRotas({ComponentePrincipal = Home}) {
  const {tituloPedidoFeito} = useTextos();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={ComponentePrincipal} />
      <Stack.Screen name="Produtor" component={Produtor} />
      <Stack.Screen name="Cesta" component={Cesta} />
      <Stack.Screen
        name="PedidoFeito"
        component={PedidoFeito}
        // options={{
        //   headerShown: true,
        //   title: tituloPedidoFeito,
        // }}
      />
    </Stack.Navigator>
  );
}
