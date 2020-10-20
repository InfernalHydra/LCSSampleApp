import React from 'react';
import {
    FlatList,
    Text,
    StatusBar,
    SafeAreaView
} from 'react-native';
import Ranking from './Ranking';
import DATA from '../data/lcs';

export default function Home() {
    const renderItem = ({item}) => (
        <Ranking name={item.name} w={item.w} l={item.l} logo={item.logo} />
    );

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
}