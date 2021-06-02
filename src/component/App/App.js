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
import AllProducts from '../API/AllProducts';
import ProductDetail from "../ProductDetail/ProductDetail";
import Category from "../Category/Category";
import Header from "../Header/Header";
import Footer from "../Layout/Footer";


const App = () => {
  const [allProducts, setProduct] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchedData = await AllProducts();
      setProduct(fetchedData); //set state hook
    })();
  }, []);

  return (
    <>
      {/* React Router*/}
      <Router>
        <Header />
        {/* Router Switch */}
        <Switch>
          {allProducts.length !== 0 ? (
            <>
              <Route exact path="/" render={() => <Home product={allProducts} />} />
              <Route path="/login" component={LogIn} />
              <Route path="/checkout" component={CheckOut} />
              <Route path="/productDetail" component={ProductDetail} />
              <Route path="/womenClothing" component={Category} />
              <Route path="/menClothing" component={Category} />
              <Route path="/jewelery" component={Category} />
              <Route path="/electronics" component={Category} />
            </>
          ) : ("")}
        </Switch>
      </Router>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
