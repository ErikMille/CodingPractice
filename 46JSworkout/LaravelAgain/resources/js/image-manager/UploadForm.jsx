import React from 'react'
import ReactDOM from 'react-dom'

export default class UploadForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            is_hiden:false
        }
    }
    closeCliscked(){
        console.log('REEEEE');
        this.setState({
            is_hidden:true
        });
    }
    render(){
        let className=this.state.is_hidden?'hidden':'';
        return(
        <form className={className} action="" method="post" encType="multipart/form-data">
            <input type="file" name="file"/>
            <input type="submit" value="SUBMIT"/>
            <div className="close" onClick={()=>this.closeCliscked()}>REEEE?</div>
        </form>
        )
    }
}