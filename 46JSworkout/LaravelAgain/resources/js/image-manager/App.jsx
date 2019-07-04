import React from 'react'
import ReactDOM from 'react-dom'

import UploadForm from './UploadForm.jsx'

export default class App extends React.Component{
    render(){
        return(
            <div className="image-manager">
                <UploadForm/>
                
                <div className="images">
                <p>Image</p>
                
                </div>
            
            </div>
        )
    }
}