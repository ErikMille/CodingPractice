import React from 'react';
import './Chapter.scss';

const Chapter= (props) => {

    return(
        
        <div className="container">
            <div className="date"><span>{props.chapter.day}</span><p>{props.chapter.date}</p></div>
            <div className="text">
                <h3>{props.chapter.title}</h3>
                <div>{props.chapter.summary}</div>
            </div>
        </div>
    )
}
export default Chapter;
