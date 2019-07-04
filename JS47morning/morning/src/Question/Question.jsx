import React from 'react';



const Question=(props)=>{
    const answer=props.answer
    const text=props.children
      return (
        <>
        <div className="question">{text}</div>
        <button className={answer?"selected":""}>yes</button>
        <button>no</button>
        </>
      );
  }

  export default Question;