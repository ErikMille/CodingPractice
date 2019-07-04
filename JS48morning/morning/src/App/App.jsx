import React, { Component } from 'react';
import Chapter from '../Chapter/Chapter.jsx';

 class App extends Component {
    state = {
        chapters: [
            {
              day: "Mo",
              date: "3.9.",
              title: "Lorem ipsum dolor sit amet",
              summary: "Eligendi enim accusantium velit reiciendis laborum aliquam earum voluptates necessitatibus reprehenderit fugiat.",
            },
            {
              day: "Tu",
              date: "4.9.",
              title: "Consectetur adipisicing elit",
              summary: "Architecto nam quasi explicabo eveniet dolores dignissimos fuga ex, et corporis ipsum assumenda ducimus tempora, quis eligendi voluptatum, cumque neque.",
            },
            {
              day: "We",
              date: "5.9.",
              title: "Eligendi enim accusantium",
              summary: "Dolor temporibus veritatis pariatur quod repellendus vitae earum minus incidunt unde sunt. Veritatis reiciendis incidunt tempora delectus minus explicabo magni.",
            },
          ]
    }
    render() {
        const chapters=this.state.chapters.map((chapter,index)=>{
            return(
                <Chapter chapter={chapter} key={index}/>
            )
        })
        return (
            <>
                {chapters}
            </>
        )
    }
}
export default App;