import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "../Home/Home";
import LogIn from "../LogIn/LogIn";
import Account from "../Account/Account";
import CheckOut from "../CheckOut/CheckOut";
import ProductDetail from "../ProductDetail/ProductDetail";
import Category from "../Category/Category";
import Header from "../Header/Header";
import Footer from "../Layout/Footer";

const App = () => {

  return (
    <>
      {/* React Router*/}
      <Router>
        <Header />
        {/* Router Switch */}
        <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/login" component={LogIn} />
              <Route path="/checkout" component={CheckOut} />
              <Route path="/productDetail" component={ProductDetail} />
              <Route path="/womenClothing" component={Category} />
              <Route path="/menClothing" component={Category} />
              <Route path="/jewelery" component={Category} />
              <Route path="/electronics" component={Category} />
              <Route path="/account" component={Account} />
        </Switch>
      </Router>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
