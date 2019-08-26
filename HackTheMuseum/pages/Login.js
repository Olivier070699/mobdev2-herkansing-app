import React from 'react';
import { StyleSheet, Text, Image, } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'
import FontAwesome from 'react-native-vector-icons/FontAwesome5';


export default class Login extends React.Component {

  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#FFDD59',
      color: 'white',
      shadowOpacity: 0,
      elevation: 0,
    },
}

  render() {
    return (
      <Container style={styles.container}>
          <Image
              style={styles.image}
              source={require('../assets/ghentbox_logo.png')}
          />

          <Form>
            <Item floatingLabel
            style={styles.Item}
            >
              <Label style={styles.label}>Email</Label>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
              />
            </Item>

            <Item floatingLabel
            style={styles.Item}
            >
              <Label style={styles.label}>Password</Label>
              <Input
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize="none"
              />
            </Item>
            

            <Button style={styles.ButtonGreen} onPress={() => this.props.navigation.navigate('Museums')}>
              <Text style={styles.Text} >Login</Text>
            </Button>
          </Form>

      <Text style={styles.textLink} onPress={() => this.props.navigation.navigate('Register')}>I've no account</Text>

              
      </Container>
    );
  }
}

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

  Item: {
      borderColor: 'white',
      borderBottomWidth: 8,
      borderRadius: 0,
      color: 'white',
      width: '80%',
      marginLeft: '10%',
      marginTop: 10
  },

  label: {
      color: 'white',
      fontWeight: 'bold',
      textTransform: 'uppercase',
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
      borderRadius: 20
      },

Text: {
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft: "auto",
    marginRight: "auto",
},  

textLink: {
  color: '#3C40C6',
  marginTop: 10,
  marginLeft: 'auto',
  marginRight: 'auto',
}
});