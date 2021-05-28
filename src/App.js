import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Home from "./component/Home/Home";
import LogIn from "./component/LogIn/LogIn";
import CheckOut from "./component/CheckOut/CheckOut";
import FetchAPI from './component/API/FetchAPI'

const App = () => {
  return (
    <>
      {/* React Router : Navbar */}
      <Router>
        <div>
          <header>
            <h1 className="siteTitle">Website Title / Logo here</h1>
            <nav className="navBar">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/login">Log In</Link>
                </li>
                <li>
                  <Link to="/checkout">Check Out</Link>
                </li>
              </ul>
            </nav>
          </header>

          {/* Router Switch */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <LogIn />
            </Route>
            <Route path="/checkout">
              <CheckOut />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
