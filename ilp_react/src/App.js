import React, { Component } from 'react';
import { Route,BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Navbarcomp from './Components/App-navbar/app-navbar';
import NewIssue from './Components/NewIssue/NewIssue.js';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="container pad-top10">
          <Navbarcomp />
          {/* <Route exact path="/" component={Navbarcomp} />
          <Route path="/newissue" component={Navbarcomp} /> */}
          <NewIssue />
        </div>
      </Router>
    );
  }
}

export default App;
