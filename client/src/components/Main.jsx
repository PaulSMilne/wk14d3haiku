import React from 'react'
import About from './About.jsx'
import Haiku from './Haiku.jsx'
import {Link} from 'react-router'

class Main extends React.Component{

     render(){
          return (
               <section>
                    <h1>My Haikus</h1>
                    <ul>
                         <li><Link to='/home'>Home</Link></li>
                         <li><Link to='/haiku'>Haiku</Link></li>
                         <li><Link to='/about'>About</Link></li>
                    </ul>
                    {this.props.children}
               </section>
          )
     }
}

export default Main
