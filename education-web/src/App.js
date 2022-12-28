import React from 'react'
import './App.css'
import  Header  from './components/common/heading/Header'
import {BrowserRouter as Router ,Switch} from "react-router-dom";
// import Homepage from './components/homepage/Homepage';
const App = () => {
  return (
      <div>
      <Router>
      <Header />
        <Switch>
          {/* <Route path='/' exact component={Homepage} /> */}

        </Switch>
      </Router>

      </div>
  )
}

export default App