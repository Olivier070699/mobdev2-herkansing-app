import React from 'react';
import { StyleSheet, Listview, Text, Image, FlatList, View, AsyncStorage } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label, } from 'native-base'
import { AuthSession } from 'expo';
import axios from 'axios'

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  static navigationOptions = {
    header: null
  }
   
  componentWillMount(){
    //fetch('http://192.168.0.101:8080/api/v1/museums')
    //fetch('https://facebook.github.io/react-native/movies.json')

    fetch('http://192.168.0.101:8080/api/v1/museums', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }) 
      .then((response) => {
        console.log('test');
        console.log(JSON.stringify(response.json()));
        return response.json()
      })
      .then((data) => { 
        console.log(data);
      }).catch((error) => {
        console.log(error)
      })
    

    //   .then((response) => response.text())
    //   .then((responseJson) => {
    //     console.log(responseJson);
    //   })
    //   .catch((error) => {
    //   console.log(error);
    // })
    
  }
 

  render() {
    return ( 
     
        
      <View>
        {this.state.data.map(el => {
          <Text>
            {el.name}
          </Text>
        })}
      </View>
      
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