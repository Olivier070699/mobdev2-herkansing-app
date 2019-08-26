import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from "./pages/Home";
import Museums from "./pages/Museums";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Question from "./pages/Question";
import Profile from "./pages/Profile";
import Room from "./pages/Room";

class App extends React.Component {

  static navigationOptions = {
    header: null
  }
  
  render() {
    return (
    <Text>Create Something Beautifull</Text>
    );
  }
}

const NavStack = createStackNavigator({
  Home: Museums,
  Museums: Museums,
  Login: Login,
  Register: Register,
  Question: Question,
  Profile: Profile,
  Room: Room,
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const nav = createAppContainer(NavStack);
export default nav;
