import React from 'react';
import { StyleSheet, Text, Image, View, } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'


export default class Question extends React.Component {

    static navigationOptions = {
        header: null
    }

  render() {
    return (
    <Container style={styles.container}>
        <Text style={styles.text}>Museum1, Room2 -> uitlezen localStorage</Text>
        
        <View style={styles.viewParent}>

            <Text style={styles.text}>Wie heeft het ‘Lamgods’ geschilderd?</Text>
            
            <Button style={styles.button}>
                <Text style={styles.txtBtn}>Antwoord 1</Text>
            </Button>

            <Button style={styles.button}>
                <Text style={styles.txtBtn}>Antwoord 2</Text>
            </Button>

            <Button style={styles.button}>
                <Text style={styles.txtBtn}>Antwoord 3</Text>
            </Button>

            <Button style={styles.button}>
                <Text style={styles.txtBtn}>Antwoord 4</Text>
            </Button>

        </View>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EE5A24',
        justifyContent: 'center',
        width: "100%",
    },

    viewParent: {
        width: '80%',
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    text: {
        textAlign: 'center',
        fontSize: 24,
        color: 'white',
    },

    button: {
        color: '#fff',
        width: '100%',
        marginTop: 15,
        paddingTop: 15,
        paddingBottom: 15,
        elevation: 0,
        borderRadius: 20
    },

    txtBtn: {
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 24,
        color: 'white',
    },
});