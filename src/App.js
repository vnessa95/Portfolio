import React from 'react';
import './App.css';
import Portfolio from './Components/Portfolio/portfolio'
import Landing from './Components/Landing/landing'
import About from './Components/AboutMe/abt'
import { BrowserRouter as Router, Route } from 'react-router-dom';




function App() {
  return (
    <Router>
      <div>
    <Route exact path="/" component ={Landing} />
    <Route exact path="/abtme" component ={About} />
    <Route exact path="/portfolio" component ={Portfolio} />
 
      </div>
    </Router>
  );
}

export default App;
