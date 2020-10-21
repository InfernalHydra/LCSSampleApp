import React from 'react';
import {
    Text,
    Image,
    View,
    StyleSheet
} from 'react-native';

export default function Details({ route }) {
    // Gets the data we passed into this screen
    const {name, logo} = route.params;

    // And we render ourself based on that!
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

