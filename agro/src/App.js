
import React from 'react'
import './App.css'
import  Header  from './components/common/heading/Header'
import {BrowserRouter as Router, Route ,Switch} from "react-router-dom";
import Home from './components/homepage/Home';
import About from './components/about/About';
const App = () => {
  return (
      <div>
      <Router>
      <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />

        </Switch>
      </Router>

      </div>
  )
}

export default App