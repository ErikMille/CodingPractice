import React, { Component } from 'react'
import lisaImg from '../../img/lisa.jpg'
import homerImg from '../../img/homer.jpg'
import bartImg from '../../img/bart.jpg'
import maggieImg from '../../img/maggie.jpg'
import margeImg from '../../img/marge.jpg'
import './App.scss'

import User from '../User/User.jsx'

class App extends Component {
    
    state = {
    users:[
        {
            name: 'Lisa Simpson',
            email: 'lisa.simpson@gmail.com',
            image: lisaImg
        },
        {
            name: 'Bart Simpson',
            email: 'bart.simpson@gmail.com',
            image: bartImg
        },
        {
            name: 'Marge Simpson',
            email: 'marge.simpson@gmail.com',
            image: margeImg
        },
        {
            name: 'Homer Simpson',
            email: 'homer.simpson@gmail.com',
            image: homerImg
        },
        {
            name: 'Maggie Simpson',
            email: 'maggie.simpson@gmail.com',
            image: maggieImg 
        }
    ]}

    render() {
        const users=this.state.users.map((user,index)=>{
            return <User user={user} key={index}/>
        })
        return (
            <div className="contacts">
                {users}
            </div>
        )
    }
}

export default App
