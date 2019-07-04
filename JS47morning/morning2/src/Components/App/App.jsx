import React from 'react';
import CounterButton from '../CounterButton/CounterButton.jsx';
import CounterDisplay from '../CounterDisplay/CounterDisplay.jsx';

export default class App extends React.Component {
  constructor(){
    super()
    this.state={
      count:0
    }
  }  
  handleClick=()=>{
    this.setState(prevState=>{
      return{
        count:prevState.count+1
      }
    })
  }
  
  render() {
      return (
        <>
        <CounterDisplay count={this.state.count}/>
        <CounterButton handleClick={this.handleClick}/>
        </>
      );
    }
  }