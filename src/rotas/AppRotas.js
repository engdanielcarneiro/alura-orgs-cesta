import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
//capital letters because the package "react-native-svg-transformer": "^0.14.3", transforms svs into a react component
import Coracao from '../assets/coracao.svg';
import Home from '../assets/home.svg';
//
import MelhoresProdutoresRotas from './MelhoresProdutoresRotas';
import ProdutorRotas from './ProdutorRotas';

const Tab = createBottomTabNavigator();

export default function AppRotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({color}) => {
            let Icon = Home;

            if (route.name === 'Melhores Produtores') {
              Icon = Coracao;
            }

            return <Icon width={20} height={20} color={color} />;
          },
          tabBarActiveTintColor: '#2A9F85',
          tabBarInactiveTintColor: '#C7C7C7',
          tabBarLabelStyle: estilos.tabText,
        })}>
        <Tab.Screen name="Home" component={ProdutorRotas} />
        <Tab.Screen
          name="Melhores Produtores"
          component={MelhoresProdutoresRotas}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const estilos = StyleSheet.create({
  tabText: {
    fontSize: 14,
  },
});
