import React from 'react';
import ReactDOM from 'react-dom';

import  Message from './message/message.jsx'
import './index.html';
import './index.scss';

class Hello extends React.Component{
    render(){
        return (
        <>
            <h1>Hello world</h1>
            <Message title="Title again?" body="body"/>
        </>
        );
    }
}

ReactDOM.render(<Hello/>,document.querySelector('#app'));