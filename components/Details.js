import React from 'react';
import {
    Text,
    Image,
    View,
    StyleSheet
} from 'react-native';

export default function Details({ route }) {
    console.log(route.params);
    const {name, logo} = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <Image source={logo} />
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: 'powderblue',
        alignItems: 'center',
        flex: 1,
        flexGrow: 1
    },
    title : {
        fontSize: 30
    },
});

