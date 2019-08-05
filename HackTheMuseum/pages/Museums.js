import React from 'react';
import { StyleSheet, Text, Image, View} from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'


export default ({ history }) => (
    <Container style={styles.container}>
        <Text style={styles.text}>In wich museum are you?</Text>

        <View style={styles.viewParent}>
            <Button style={styles.firstBtn} onPress={() => history.push("/room")}>
                <Text style={styles.text}>MSK</Text>
            </Button>

            <Button style={styles.firstBtn} onPress={() => history.push("/room")}>
                <Text style={styles.text}>MAS</Text>
            </Button>

            <Button style={styles.firstBtn} onPress={() => history.push("/room")}>
                <Text style={styles.text}>STAM</Text>
            </Button>

            <Button style={styles.firstBtn} onPress={() => history.push("/room")}>
                <Text style={styles.text}>SMAK</Text>
            </Button>
        </View>

    </Container>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3C40C6',
        justifyContent: 'center',
        width: "100%",
    },

    text: {
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 24,
        marginLeft: "auto",
        marginRight: "auto",
    },

    viewParent: {
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'stretch',
        justifyContent: 'center',
        alignItems: 'center'
    },

    firstBtn: {
        height: 120,
        width: 120,
        margin: 10,
    },
});