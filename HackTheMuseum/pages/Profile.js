import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';


export default class Profile extends React.Component {

  render() {
    return (
    <View style={styles.view}>
        <Text>
            Museums
        </Text>
        <Text>
            Rooms
        </Text>
        <Text>
            Profile
        </Text>
        
        <Text>Naam moet hier staan</Text>
        <Text>Reeds bezochte museums</Text>

        <Text>Settings -> wachtwoord wijzigen</Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#3C40C6',
        justifyContent: 'center',
        width: "100%",
    },
});