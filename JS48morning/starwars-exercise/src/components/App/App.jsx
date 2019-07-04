import React, { Component } from 'react'

class App extends Component {
    state = {
        character:{},
        films:[],
    }
    loadCharacter=()=>{
        fetch('https://swapi.co/api/people/1')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            this.setState({
                character:data,
            })
        })
    }

    loadFilms=()=>{
        this.state.character.films.map((film,index)=>{
            fetch(film)
            .then(res=>res.json())
            .then(data=>{
                this.setState(prevState=>{
                    const films=prevState.films.concat(data)
                    return {films}
                })
            })
        })
    }
    componentDidMount(){
        this.loadCharacter()
    }

    render() {
        const filmsList=this.state.films.map((film,index)=>{
            console.log(this.state.films)
            return(<div key={index}>{film.title}</div>)
        })
        return (
            <div style={{
                backgroundColor: 'lightgray',
                padding: '2rem',
            }}>
             <h1 onClick={this.loadFilms}>Star Wars!</h1>
             <div>{this.state.character && this.state.character.name}</div>
             <div>{filmsList}</div>
            </div>
        )
    }
}

export default App
