import React from 'react';
import './Question.scss'
const Question = (props) => {
    const yesSelected = props.answer === true;
    const noSelected = props.answer === false;
    const answerClass = (props.answer == props.correctAnswer)?'question-correct':'question-incorrect';
    return (
        <div className='question-container'>
            <div className='question-text-wrapper'>
                <h3 className='question-number'>{props.number}</h3>
                <h3 className='question-text'>{props.children}</h3>
            </div>
            <div className='question-answers'>
                <button className={yesSelected ? answerClass : ''} onClick={()=>props.handleAnswerClick(props.number,true)}>Yes</button>
                <button className={noSelected ? answerClass : ''} onClick={()=>props.handleAnswerClick(props.number,false)}>No</button>
            </div>
        </div>
    )
}

export default Question;
