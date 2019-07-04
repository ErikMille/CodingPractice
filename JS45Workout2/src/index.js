import React from 'react';
import ReactDOM from 'react-dom';

import  Article from './message/article.jsx'
import './index.html';
const uuidv1 = require('uuid/v1');

class Hello extends React.Component{
    render(){
        this.title='Antidisestablishmentarianism';
        return (
            furniture.map(item=><Article key={uuidv1()} name={item.name} price={item.price} available={item.available}/>)
        );
    }
}
const furniture = [
    {
      name: 'Table',
      price: 100,
      id:1,
      available: true,
    },
    {
      name: 'Chair',
      price: 20,
      id:2,
      available: false,
    },
    {
      name: 'Bookshelf',
      price: 55,
      id:3,
      available: true,
    },
    {
      name: 'Sofa',
      price: 1200,
      id:4,
      available: true,
    },
    {
      name: 'Coffeetable',
      price: 45,
      id:5,
      available: false,
    },
    {
      name: 'Bed',
      price: 800,
      id:6,
      available: false,
    },
    {
      name: 'Nightstand',
      price: 12,
      id:7,
      available: true,
    },
  ];
ReactDOM.render(<Hello furniture="furniture"/>,document.querySelector('#app'));