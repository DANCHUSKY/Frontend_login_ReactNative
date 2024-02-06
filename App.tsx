import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
// Screens

import { HomeScreen, ScreenLogin } from './screens/imports';
const HomeNavigator = createNativeStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <HomeNavigator.Navigator initialRouteName='Login'>
        <HomeNavigator.Screen name='Login' component={ScreenLogin} />
        <HomeNavigator.Screen name='Home' component={HomeScreen} />
        {/* Puedes agregar más pantallas según sea necesario */}
      </HomeNavigator.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
