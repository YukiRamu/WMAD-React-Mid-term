//This component is for the homepage of our website
import React, { useState, useEffect } from "react";
import "./Home.css";
import FetchAPI from '../API/FetchAPI';

const Home = () => {
 console.log(props)
  return (
    <>
      <h1 className="title">Home page</h1>
      <h2>{props.title}</h2>

    </>
  );
};

export default Home;

