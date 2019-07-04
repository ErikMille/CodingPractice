import React, { Component } from 'react'
import './App.scss'
import Search from '../Search/Search.jsx'
import Results from '../Results/Results.jsx'

class App extends Component {
    state = {
        searchInput: '',
        randomArticle: undefined,
        searchResults: [],
    }
    loadArticles=()=>{
        fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=${this.state.searchInput}`)
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                searchResults:data.query.search
            })
        })
    }
    randomArticle=()=>{
        fetch('https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=random')
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                randomArticle:data.query.random[0]
            })
        })
    }
    handleTyping = (e) => {
        this.setState({
            searchInput: e.target.value,
        })
    }

    handleSearchClick = () => {
        this.loadArticles();
    }

    componentDidMount() {
        this.randomArticle()
    }

    render() {
        console.log(this.state.searchResults)

        return (
            <div className='app-container'>
                <h1>Wikipedia Search</h1>
                <Search
                    handleTyping={this.handleTyping}
                    inputValue={this.state.searchInput}
                    handleSearchClick={this.handleSearchClick}
                />
                <div style={{color:'red'}}>{this.state.randomArticle && this.state.randomArticle.title}</div>
                <Results searchResults={this.state.searchResults}/>
            </div>
        )
    }
}

export default App;
