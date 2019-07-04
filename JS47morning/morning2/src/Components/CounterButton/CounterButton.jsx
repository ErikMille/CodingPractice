import React from 'react';



const CounterButton=(props)=>{

      return (
        <>
        <button onClick={props.handleClick}>+</button>
        </>
      );
  }
  export default CounterButton;