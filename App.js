/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Get the components that we have written
import Home from './components/Home';
import Details from './components/Details';


const Stack = createStackNavigator();

const Screen = Stack.Screen;
const Navigator = Stack.Navigator;

export default function App() {
  // Plugs in components into React Navigation
  return (
    <NavigationContainer>
        <Navigator initialRouteName="Home">
          <Screen name="Home" component={Home} />
          <Screen name="Details" component={Details} />
        </Navigator>
    </NavigationContainer>
  );
};