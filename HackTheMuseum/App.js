import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native';

import Home from "./pages/Home";
import Museums from "./pages/Museums";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Question from "./pages/Question";
import Profile from "./pages/Profile";
import Room from "./pages/Room";

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/museums" component={Museums} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/question" component={Question} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/room" component={Room} />
        </Switch>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
