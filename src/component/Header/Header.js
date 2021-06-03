import React from 'react';
import { FaHome, FaUser, FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {

  return (
    <>
      <header>
        <h1 className="siteTitle"><a href="/">Lifestyle Connect</a></h1>

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
