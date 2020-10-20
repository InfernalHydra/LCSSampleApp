/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  FlatList,
} from 'react-native';

import Ranking from './components/Ranking';

import DATA from './data/lcs';

export default function App() {

  const renderItem = ({item}) => (
    <Ranking name={item.name} w={item.w} l={item.l} logo={item.logo} />
  );

  console.log(DATA);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => String(item.rank)}
        />
      </SafeAreaView>
    </>
  );
};