import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SignUp from './components/sign-up/sign-up';
import './App.css';

class App extends Component{
  
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <Switch>
            <Route path="/">
              <SignUp />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
