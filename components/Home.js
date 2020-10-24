import React, {useState} from 'react';
import {
    FlatList,
    TouchableOpacity,
    Text,
    StatusBar,
    SafeAreaView,
    View,
    StyleSheet,
    Image
} from 'react-native';

// Normally we would fetch data from a database, but for simplicity, we are simply going to read from a file
// If you want to look into fetching data from a server, look into fetch() and useEffect()
import DATA from '../data/lcs';

export default function Home({navigation}) {

    // These are React Hooks
    // These encapsulate various React.js functionality that used to be based on class methods
    // For instance, the class state object was overriden by these

    // What are my favorite teams?
    const [favorites, setFavorites] = useState([]);

    // Am I only looking at my favorite teams or am I looking at everyone?
    const [filterFavorites, setFilterFavorites] = useState(false);

    const renderItem = ({item}) => {
        // This should really be its own component, but I'm gonna make things a bit simple for us here
        // If you choose to make this your own component, look into useReducer(), useContext(), and/or passing callbacks as props
        let {name, logo, w, l} = item;

        return (
          <TouchableOpacity style={styles.teamContainer} onPress={() => navigation.navigate('Details', {name, logo})}>
            <Image style={styles.container} source={logo}/>
            <View style={styles.textContainer} >
              <Text>{name}</Text>
              <Text>{w} - {l}</Text>
            </View>
            {filterFavorites ? null :
                <View>
                    <TouchableOpacity style={styles.favoritesButton} onPress = {() => setFavorites([...favorites, item])}>
                        <Text>Add to Favorites</Text>
                    </TouchableOpacity>
                </View>
            }
          </TouchableOpacity>

        );
    };

    // Where the magic happens
    // Based on data, we render the elements that we want to see!
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <TouchableOpacity style={styles.button} onPress={() => setFilterFavorites(!filterFavorites)}>
                    <View>
                        <Text>{filterFavorites ? "Display All" : "Only Display Favorites"}</Text>
                    </View>
                </TouchableOpacity>
                <FlatList
                    data={filterFavorites ? favorites : DATA}
                    renderItem={renderItem}
                    keyExtractor={item => String(item.rank)}
                />
            </SafeAreaView>
        </>

    );
}

const styles = StyleSheet.create({
    button : {
        marginBottom: 20,
        height: 40,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container : {
        width: 50,
        height: 50
      },
    teamContainer : {
        backgroundColor: 'powderblue',
        flexDirection: 'row',
        borderBottomWidth: 2,
    },
    textContainer: {
        flex: 1,
        flexDirection: "column",
        // alignItems: 'center',
        justifyContent: 'center',
    },
    favoritesButton : {
        alignSelf: "flex-end",
        backgroundColor: 'red',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});