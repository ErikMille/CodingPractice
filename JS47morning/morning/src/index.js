import React from 'react';
import ReactDOM from 'react-dom';
import Question from './Question/Question.jsx';
import './index.scss';
import './index.html';

class Hello extends React.Component {
  constructor (){
  super()
  this.state={
  questions:[{
          text:"reeeeeee",
          answer:true
        },
        {
          text:"auuuuuu",
          answer:undefined
        },
        {
          text:"pooooooo",
          answer:undefined
        }
      ]
    };
  }
  render() {
    const quest=this.state.questions.map((question,index)=>{
      return(
        <Question key={index} answer={question.answer}>
          {question.text}
        </Question>
        );
    })
    
    return (
      <>
        {quest}
      </>
    );
  }
}

ReactDOM.render(<Hello />, document.querySelector('#app'));