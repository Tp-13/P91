import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen'
import HomeScreen from './screens/HomeScreen'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default function App() {
  return (
    <AppContainer/>
  );
}

var AppNavigator = createSwitchNavigator({
  WelcomeScreen: WelcomeScreen,
  HomeScreen: HomeScreen,
});

const AppContainer = createAppContainer(AppNavigator);

