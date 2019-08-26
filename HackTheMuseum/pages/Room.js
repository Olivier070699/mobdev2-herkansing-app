import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, } from 'react-native';


export default class Room extends React.Component {
  constructor() {
    super();
    this.state = {
        data: []
    }
  }
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#EE5732',
      shadowOpacity: 0,
      elevation: 0,
    },
}
  
  componentWillMount(){
  this.getRoomsFromAPI()
  }

  getRoomsFromAPI = async() => {
  const url = "http://192.168.5.135:8080/api/v1/rooms"

  await fetch(url, {
      method: 'GET',
      headers:{
      'Content-Type': 'application/json'
      }
  })
  .then(res => res.json())
  .then(async(response) => await this.setState({
      data: response
  }))
  .catch(error => console.error('Error:', error))
  }

  render() {
    const museum_id = this.props.navigation.getParam('museum_id', 'null')
    return ( 
        <View style={styles.container}>
        <Text style={styles.heading}>In welke kamer bevind je je momenteel?</Text>
        <View style={styles.tileContainer}>
            {Array.from(this.state.data).map(room => (
            <TouchableOpacity style={styles.tile} key={room.id} onPress={() => this.props.navigation.navigate('Question', {museum_id: museum_id, room: room.name})}>
                <Text key={room.id} style={styles.text}>
                {room.name}
                </Text>
            </TouchableOpacity>
            ))}
        </View>
        </View>
    );
  }
}

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EE5732',
        justifyContent: 'center',
        width: "100%",
    },

    image: {
        height: 190,
        width: "80%",
        marginLeft: "10%",
        marginBottom: 80,
    
    },

    buttonGreen: {
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

    buttonRed: {
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

    text: {
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 24,
        marginLeft: "auto",
        marginRight: "auto",
    },

    heading: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft: "auto",
    marginRight: "auto",
    },

    tile: {
    textAlign: 'center',
    justifyContent: 'space-around',
    width: 150,
    height: 150,
    backgroundColor: '#5AC8FA',
    margin: 6,
    },

    tileContainer:{
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
    },
  });