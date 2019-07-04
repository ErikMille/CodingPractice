import React from 'react'

const Search = (props) => {
    const results=props.searchResults.map((article,index)=>{
        return(<div>{article.title}</div>)
    })
    return (
        <div>
        {results}
        </div>
    )
}

export default Search