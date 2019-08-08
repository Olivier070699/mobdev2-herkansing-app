import React from 'react';
import { StyleSheet, Text, Image, View} from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'


export default class Museums extends React.Component {
    
    static navigationOptions = {
        header: null
    }

  render() {
    return (
    <Container style={styles.container}>
        <Text style={styles.text}>In wich museum are you?</Text>

        <View style={styles.viewParent}>
            <Button style={styles.firstBtn}>
                <Text style={styles.text} onPress={() => this.props.navigation.navigate('Room')}>MSK</Text>
            </Button>

            <Button style={styles.firstBtn}>
                <Text style={styles.text} onPress={() => this.props.navigation.navigate('Room')}>MAS</Text>
            </Button>

            <Button style={styles.firstBtn}>
                <Text style={styles.text} onPress={() => this.props.navigation.navigate('Room')}>STAM</Text>
            </Button>

            <Button style={styles.firstBtn}>
                <Text style={styles.text} onPress={() => this.props.navigation.navigate('Room')}>SMAK</Text>
            </Button>
        </View>

    </Container>
    );
  }
}

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