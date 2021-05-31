import './App.css';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "../Home/Home";
import LogIn from "../LogIn/LogIn";
import CheckOut from "../CheckOut/CheckOut";
import FetchAPI from '../API/FetchAPI';

const App = () => {

  //**************************************** */
  // Below temporarily added to code Home.js
  //**************************************** */
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => {
        if (response.status !== 200) {
          console.log(`We have a problem! ${response.status}`);
        }
        response.json()
          .then(data => {
            console.log("PRODUCTS DATA" + data);
            setAllProducts(data);
          });
      })
      .catch((error) => {
        console.log((`Error ${error}`));
      });
    return () => {

    };
  }, []);
  //**************************************** */
  return (
    <>
      {/* React Router : Navbar */}
      <Router>
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
            <Route exact path="/" render={() => <Home product={allProducts} />} />
            <Route path="/login">
              <LogIn />
            </Route>
            <Route path="/checkout">
              <CheckOut />
            </Route>
          </Switch>
      </Router>
    </>
  );
};

export default App;
