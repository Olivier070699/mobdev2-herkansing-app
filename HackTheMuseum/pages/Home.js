import React from 'react';
import { StyleSheet, Text, Image, FlatList, View, AsyncStorage } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label, } from 'native-base'
import { AuthSession } from 'expo';


export default class Home extends React.Component {
  static navigationOptions = {
    header: null
}
  state = {
    data: []
  };

  componentWillMount() {
    this.fetchData();
  }

  
  fetchData = async () => {
    const response = await fetch("http://127.0.0.1:8080/api/v1/museums")
    const json = await response.json();
    this.setState({data: json.results}) 
  }

  render() {
    return (
    //   <View>
    //   <FlatList
    //     data={this.state.data}
    //     keyExtractor={(i) => i}
    //     renderItem={({ item }) =>
    //       <Text>
    //         {`${item.name}`}
    //       </Text>
    //     }
    //     />
    // </View>
      

      
    <Container style={styles.container}>
        
      <Image style={styles.image} source={require('../assets/ghentbox_logo.png')} />

      <Form>
          <Button style={styles.ButtonGreen} onPress={() => this.props.navigation.navigate('Login')}>
          <Text style={styles.Text}>login</Text>
        </Button>
              
        <Button style={styles.ButtonRed} onPress={() => this.props.navigation.navigate('Register')}>
          <Text style={styles.Text}>Register</Text>
        </Button>
      </Form>
              
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