import React from 'react';



const CounterDisplay=(props)=>{
    const count=props.count
      return (
        <>
        <div className="question">{count}</div>
        </>
      );
  }
  export default CounterDisplay;