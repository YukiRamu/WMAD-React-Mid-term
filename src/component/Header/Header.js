import React, { useState, useEffect } from 'react';
import { FaHome, FaUser, FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import "./Header.css";

const Header = () => {

  const [welcomeMsg, setWelcomeMsg] = useState();

  return (
    <>
      <header>
        <h1 className="siteTitle"><a href="/">Lifestyle Connect</a></h1>
        
        {/* welcome message */}
        {/* <h2 className="welcome">Welcome, <span>name </span>Have a good shopping.</h2>
        <Button type="button"  className="logOutBtn">Log Out</Button> */}

        {/* Navbar */}
        <nav className="navBar">
          <ul>
            <li>
              <Link to="/"><FaHome></FaHome> Home</Link>
            </li>
            <li>
              <Link to="/login"><FaUser></FaUser> Log In</Link>
            </li>
            <li>
              <Link to="/checkout"><FaShoppingCart></FaShoppingCart> Check Out</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
