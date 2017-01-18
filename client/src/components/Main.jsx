import React from 'react'
import About from './About.jsx'
import Haikus from './Haikus.jsx'
import {Link} from 'react-router'

const Main = (props) => {

      return (
               <section className="navbar">
                    <h1>My Haikus</h1>
                    <ul>
                         <li><Link to='/home'>Home</Link>&nbsp;&nbsp;</li>
                         <li><Link to='/haikus'>Haikus</Link>&nbsp;&nbsp;</li>
                         <li><Link to='/about'>About</Link></li>
                    </ul>
                    {props.children}
               </section>
          )
     
}

export default Main
