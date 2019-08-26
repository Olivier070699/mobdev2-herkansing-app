import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native'


export default class Museums extends React.Component {
constructor() {
    super();
    this.state = {
      data: []
    }
  }
  static navigationOptions = {
    header: null
  }
   
  componentWillMount(){
    this.getMuseumsFromAPI()
  }

  getMuseumsFromAPI = async() => {
  const url = "http://192.168.5.135:8080/api/v1/museums"

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
    return ( 
      <View style={styles.container}>
        <Text style={styles.heading}>In welk museum ben je?</Text>
        <View style={styles.tileContainer}>
          {Array.from(this.state.data).map(museum => (
            <TouchableOpacity style={styles.tile} key={museum.id} onPress={() => this.props.navigation.navigate('Room', {museum_id: museum.id})}>
              <Text key={museum.id} style={styles.text}>
                {museum.name}
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
      backgroundColor: '#5856D6',
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
    backgroundColor: '#FFCC00',
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