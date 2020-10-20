import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
} from 'react-native';

export default function Ranking(props) {
    return (
        <View style={styles.teamContainer}>
          <Image style={styles.container} source={props.logo}/>
          <View style={styles.textContainer} >
            <Text>{props.name}</Text>
            <Text>{props.w} - {props.l}</Text>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
      width: 50,
      height: 50
    },
    teamContainer : {
      backgroundColor: 'powderblue',
      flexDirection: 'row'
    },
    textContainer: {
      flex: 1,
      flexDirection: "column",
      // alignItems: 'center',
      justifyContent: 'center',
    }
  });
