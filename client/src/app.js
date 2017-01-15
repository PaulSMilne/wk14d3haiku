import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main.jsx'
import Home from './components/Home.jsx'
import Haiku from './components/Haiku.jsx'
import About from './components/About.jsx'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

window.onload = () => {
     ReactDOM.render(
          <Router history={hashHistory}>
               <Route path='/' component={Main}>
                    <IndexRoute component={Home} />
                    <Route path = 'home' component={Home} />
                    <Route path = 'haiku' component={Haiku} />
                    <Route path = 'about' component={About} />
               </Route>
          </Router>,
          document.getElementById('app')
     )
}