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
            buttonStyle: styles.button,
            answerMessage: "",
            answeredState: false,
            questionCounter: 0,
        }
    }
    static navigationOptions = {
        headerStyle: {
          backgroundColor: '#68B9AD',
          shadowOpacity: 0,
          elevation: 0,
        },
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
        this.setState({
            rightQuestions: rightQuestions
        })
    }

    handleWrongAnswer = () => {
        if(this.state.answeredState == false) {
            this.setState({
                buttonStyle: styles.buttonTrue,
                answerMessage: "Fout antwoord!",
                answeredState: true,
            })
        }
    }

    handleRightAnswer = () => {
        if(this.state.answeredState == false) {
            this.setState({
                buttonStyle: styles.buttonTrue,
                answerMessage: "Correct antwoord!",
                answeredState: true,
            })
        } 
    }

    nextQuestion = () => {
        let questionsCounter = this.state.questionCounter

        if(questionsCounter < this.state.rightQuestions.length - 1 && this.state.answeredState == true) {
            this.setState({
                questionCounter: ++questionsCounter,
                buttonStyle: styles.button,
                answerMessage: "",
                answeredState: false,
            })
        } else if(this.state.answeredState == true){
            this.props.navigation.navigate('Room')
        } else {
            this.setState({
                answerMessage: "Vraag eerst beantwoorden.",
            })
        }

    }

    render() {
        let room = this.props.navigation.getParam('room', 'null')
        let questions = this.state.rightQuestions
        let questionsCounter = this.state.questionCounter
        if(questions[questionsCounter]) {
            return (
                <Container style={styles.container}>
                    <Text style={styles.heading}>{room}</Text>
                    
                    <View style={styles.viewParent}>

                        <Text style={styles.heading}>{questions[questionsCounter].question}</Text>
                        
                        <Button style={styles.button} onPress={this.handleWrongAnswer}>
                            <Text style={styles.txtBtn}>{questions[questionsCounter].falseAnswerOne}</Text>
                        </Button>

                        <Button style={styles.button} onPress={this.handleWrongAnswer}>
                            <Text style={styles.txtBtn}>{questions[questionsCounter].falseAnswerTwo}</Text>
                        </Button>

                        <Button style={this.state.buttonStyle} onPress={this.handleRightAnswer}>
                            <Text style={styles.txtBtn} >{questions[questionsCounter].trueAnswer}</Text>
                        </Button>

                        <Button style={styles.button} onPress={this.handleWrongAnswer}>
                            <Text style={styles.txtBtn}>{questions[questionsCounter].falseAnswerThree}</Text>
                        </Button>

                        <Text style={styles.answerMessage}>{this.state.answerMessage}</Text>

                        <Button style={styles.nextButton} onPress={this.nextQuestion}>
                            <Text style={styles.txtBtn}>Volgende</Text>
                        </Button>

                    </View>
                </Container>
            )
        } else {
            return (
                <Container style={styles.container}>
                    <Text style={styles.heading}>{room}</Text>
                    
                    <View style={styles.viewParent}>

                        <Text style={styles.heading}>Momenteel zijn er geen vragen in deze kamer...</Text>

                    </View>
                </Container>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#68B9AD',
        justifyContent: 'center',
        width: "100%",
    },

    viewParent: {
        width: '80%',
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    answerMessage: {
        marginTop: 12,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 24,
        marginLeft: "auto",
        marginRight: "auto",
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

    buttonTrue: {
        backgroundColor: '#4CD964',
        width: '100%',
        marginTop: 15,
        paddingTop: 15,
      paddingBottom: 15,
        elevation: 0,
        borderRadius: 20
    },

    nextButton: {
        backgroundColor: '#FFCC00',
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