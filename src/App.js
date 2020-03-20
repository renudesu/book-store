import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import SignIn from './components/signin/signin';
import Signup from './components/signup/signup';
import BookList from './userDashboard/bookList';
import AddBook from '../src/admin/book/addBook';
import AdminDashboard from './admin/dashboard/dashboard';


function App() {
  return (
    <Router>

      <div className="container-fluid">

        <Switch>
          <Route exact path="/">
            <SignIn />

          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/booklist">
            <BookList />
          </Route>
          <Route path="/addbook">
            <AddBook />
          </Route>
          <Route path="/dashboard">
            <AdminDashboard />
          </Route>


        </Switch>

      </div>
    </Router>
  );
}

export default App;
