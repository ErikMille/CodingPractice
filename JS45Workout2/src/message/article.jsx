import React from 'react';
// import icon from './img/fedor.png';
export default class Article extends React.Component{
    render(){
        return(
            <div className="message">
                <div className="title">{this.props.name}</div>
                <div className="body">{this.props.price}</div>
                <div className="body">{this.props.available?'yes':'no'}</div>
            </div>
        );
    }
}
