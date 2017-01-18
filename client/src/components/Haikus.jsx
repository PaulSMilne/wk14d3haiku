import React from 'react'
import Poem from './Poem.jsx'

class Haikus extends React.Component {

     constructor(props){
          super(props)
          this.state = { haikus: []}
     }

     loadPoems(url){
          const request = new XMLHttpRequest()
          request.open('GET', url)
          request.onload = () => {

               if (request.status===200){
                    const jsonString = request.responseText
                    const poemList = JSON.parse(jsonString)
                    console.log(poemList)
                    this.setState({haikus:poemList.haikus})
               }
          }
          request.send()
     }

     componentDidMount(){
          this.loadPoems('http://localhost:3000/haikus')
     }

     
     render(){
     return (
          <div className='poemlist'>
          {this.state.haikus.map(function (haiku, index) {

               return (
                    <Poem 
                         key={index}
                         title={haiku.title}
                         line1={haiku.poem.line1}
                         line2={haiku.poem.line2}
                         line3={haiku.poem.line3}
                    />
               )

               })
          }</div>

          
     )}
}


export default Haikus
