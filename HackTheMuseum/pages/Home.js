import React from 'react';
import { StyleSheet, Text, Image, AsyncStorage } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'
import { AuthSession } from 'expo';

export default ({ history }) => (
    <Container style={styles.container}>
        
        <Image style={styles.image} source={require('../assets/ghentbox_logo.png')} />

        <Form>
          <Button style={styles.ButtonGreen} onPress={() => history.push("/login")}>
            <Text style={styles.Text}>{test[2]}</Text>
          </Button>
                
          <Button style={styles.ButtonRed} onPress={() => history.push("/register")}>
            <Text style={styles.Text}>Register</Text>
          </Button>
        </Form>
            
      </Container>
    );

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFDD59',
        justifyContent: 'center',
        width: "100%",
    },

    image: {
        height: 190,
        width: "80%",
        marginLeft: "10%",
        marginBottom: 80,
    
    },

    ButtonGreen: {
        backgroundColor: '#4CD964',
        color: '#fff',
        width: '80%',
        marginTop: 30,
        marginLeft: '10%',
        paddingTop: 15,
        paddingBottom: 15,
        elevation: 0,
        borderRadius: 20,
        textAlign: 'center',
        },
  
    ButtonRed: {
        backgroundColor: '#EE5732',
        color: '#fff',
        width: '80%',
        marginTop: 5,
        marginLeft: '10%',
        paddingTop: 15,
        paddingBottom: 15,
        elevation: 0,
        borderRadius: 20,
        textAlign: 'center',
  },

  Text: {
      color: '#fff',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: 24,
      marginLeft: "auto",
      marginRight: "auto",
  }
});

let testArray = ['Room 1', 'Room 2', 'Room 3', 'Room 4'];
AsyncStorage.setItem('testArray', JSON.stringify(testArray));
let test = AsyncStorage.getItem('testArray');