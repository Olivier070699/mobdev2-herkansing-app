import React from 'react';
import { StyleSheet, Text, Image, View, } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'


export default class Question extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            rightQuestions: [
                {
                    question: "",
                }
            ],
        }
    }
    static navigationOptions = {
    header: null
    }
    
    componentWillMount(){
        this.getQuestionsFromAPI()
    }

    getQuestionsFromAPI = async() => {
        const url = "http://192.168.5.135:8080/api/v1/questions"

        await fetch(url, {
            method: 'GET',
            headers:{
            'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(async(response) => {
            await this.setState({
            data: response
            })
        })
        .then(() => this.checkQuestions())
        .catch(error => console.error('Error:', error))
    }

    checkQuestions = () => {
        let museum_id = this.props.navigation.getParam('museum_id', 'null')
        let room = this.props.navigation.getParam('room', 'null')
        let rightQuestions = []
        this.state.data.forEach(function(question) {
            if(question.museumsId == museum_id && question.room == room) {
                rightQuestions.push(question)
            }
        });
        console.log(rightQuestions)
        this.setState({
            rightQuestions: rightQuestions
        })
    }

    render() {
        let room = this.props.navigation.getParam('room', 'null')
        return (
            <Container style={styles.container}>
                <Text style={styles.heading}>{room}</Text>
                
                <View style={styles.viewParent}>

                    <Text style={styles.heading}>{this.state.rightQuestions[0].question}</Text>
                    
                    <Button style={styles.button}>
                        <Text style={styles.txtBtn}>{this.state.rightQuestions[0].falseAnswerOne}</Text>
                    </Button>

                    <Button style={styles.button}>
                        <Text style={styles.txtBtn}>{this.state.rightQuestions[0].falseAnswerTwo}</Text>
                    </Button>

                    <Button style={styles.button}>
                        <Text style={styles.txtBtn}>{this.state.rightQuestions[0].trueAnswer}</Text>
                    </Button>

                    <Button style={styles.button}>
                        <Text style={styles.txtBtn}>{this.state.rightQuestions[0].falseAnswerThree}</Text>
                    </Button>

                </View>
            </Container>
        )
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
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    text: {
        textAlign: 'center',
        fontSize: 24,
        color: 'white',
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

    button: {
        color: '#fff',
        width: '100%',
        marginTop: 15,
        paddingTop: 15,
        paddingBottom: 15,
        elevation: 0,
        borderRadius: 20
    },

    txtBtn: {
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 24,
        color: 'white',
    },
});