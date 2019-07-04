import React, { Component } from 'react';
import Question from '../Question/Question.jsx';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            questions: [
                {
                    text: "Albert Einstein failed every subject in school that wasn't math or physics.",
                    answer: undefined,
                    correctAnswer: false
                },
                {
                    text: "Franklin Roosevelt's face can be seen on Mount Rushmore",
                    answer: undefined,
                    correctAnswer: false
                },
                {
                    text: "Tea has more caffeine than soda and coffee",
                    answer: undefined,
                    correctAnswer: true
                },
            ]
        }
    }

    handleAnswerClick = (questionNumber, answer) => {
        this.setState(prevState=>{
            return{
            questions:prevState.questions.map((question,index)=>{
                if(questionNumber-1===index){
                    question.answer=answer 
                    return(question)
                }else{
                    return(question)
                } 
            })}
          })
    }

    render() {
        const questionComponents = this.state.questions.map((question, index) => {
            return (
                <Question 
                handleAnswerClick={this.handleAnswerClick}
                number={index + 1} 
                key={index} 
                correctAnswer={question.correctAnswer}
                answer={question.answer}>
                    {question.text}
                </Question>
            )
        })
        return (
            <>
                {questionComponents}
            </>
        )
    }
}

export default App;
