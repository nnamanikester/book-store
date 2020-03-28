import React, {Component} from "react";
import "./componentStyles/Home.css";
import Home from './components/home'
import {BrowserRouter as Router} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Home />
      </Router>
    );

  }
  
}

export default App;
