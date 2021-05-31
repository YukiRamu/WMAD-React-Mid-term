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
import Footer from "../Layout/Footer";
import AllProducts from '../API/AllProducts';

const App = () => {
  const [allProducts, setProduct] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedData = await AllProducts();
      console.log("fetchedData is", fetchedData);
      setProduct(fetchedData); //set state hook
      console.log(allProducts);
    })();

    return () => {
    };
  }, []);

  //**************************************** */
  // Below temporarily added to code Home.js
  //**************************************** */
  // const [allProducts, setAllProducts] = useState([]);
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then(response => {
  //       if (response.status !== 200) {
  //         console.log(`We have a problem! ${response.status}`);
  //       }
  //       response.json()
  //         .then(data => {
  //           setAllProducts(data);
  //         });
  //     })
  //     .catch((error) => {
  //       console.log((`Error ${error}`));
  //     });
  //   return () => {

  //   };
  // }, []);
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
          {allProducts.length !== 0 ? (
            <>
              < Route exact path="/" render={() => <Home product={allProducts} />} />
              <Route path="/login">
                <LogIn />
              </Route>
              <Route path="/checkout">
                <CheckOut />
              </Route>
            </>
          ) : (
            console.log("allProducts not yet ready"))}

        </Switch>
      </Router>
      <Footer />
      
    </>
  );
};

export default App;
