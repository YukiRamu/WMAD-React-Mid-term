//This component is for the homepage of our website
import React, { useState, useEffect } from "react";
import "./Home.css";
import FetchAPI from "../API/FetchAPI";

const Home = (props) => {
  console.log(props);

  let heroContents = [];
  for (let i = 0; i < props.product.length; i++) {
    heroContents.push(props.product[i]);
  }
  console.log(heroContents);

  return (
    <>
      <h1 className="title">Home page</h1>

      {/* Hero Contents */}
      

    </>
  );
};

export default Home;

