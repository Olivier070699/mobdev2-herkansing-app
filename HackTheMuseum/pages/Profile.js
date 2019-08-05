import React from 'react';
import { View, Text, Button } from 'react-native';

import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

export default ({ history }) => (
    <View>
        <Text
            onPress={() => history.push("/museums")}>
            Museums
        </Text>
        <Text
            onPress={() => history.push("/room")}>
            Rooms
        </Text>
        <Text
            onPress={() => history.push("/profile")}>
            Profile
        </Text>
        
        <Text>Naam moet hier staan</Text>
        <Text>Reeds bezochte museums</Text>

        <Text>Settings -> wachtwoord wijzigen</Text>
    </View>
);