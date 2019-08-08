import React from 'react';
import { StyleSheet, Text, Image, View, } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'


export default class Room extends React.Component {

static navigationOptions = {
    headerStyle: {
        backgroundColor: '#EE5A24',
        color: 'white',
        shadowOpacity: 0,
        elevation: 0,
    },
    }

    // CUSTOMISE HEADER PIJLTJE
    // header: ({ goBack }) => ({
    //     left: ( <Icon name={'chevron-left'} onPress={ () => { goBack() } }  /> ),  
    // }),

  render() {
    return (
    <Container style={styles.container}>
        <Text style={styles.text}>In wich room are you?</Text>
        
        <View style={styles.viewParent}>
            <Button style={styles.firstBtn} onPress={() => this.props.navigation.navigate('Question')}>
                <Text style={styles.text}>Room 1</Text>
            </Button>

            <Button style={styles.firstBtn} onPress={() => this.props.navigation.navigate('Question')}>
                <Text style={styles.text}>Room 2</Text>
            </Button>

            <Button style={styles.firstBtn} onPress={() => this.props.navigation.navigate('Question')}>
                <Text style={styles.text}>Room 3</Text>
            </Button>

            <Button style={styles.firstBtn} onPress={() => this.props.navigation.navigate('Question')}>
                <Text style={styles.text}>Room 4</Text>
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
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'stretch',
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 24,
        marginLeft: "auto",
        marginRight: "auto",
    },

    firstBtn: {
        height: 120,
        width: 120,
        margin: 10,
    },
});