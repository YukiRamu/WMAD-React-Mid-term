//This component is for the homepage of our website
import React, { useState, useEffect } from "react";
import "./Home.css";
import FetchAPI from "../API/FetchAPI";
import {Carousel} from 'react-bootstrap'

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
      <Carousel fade
      interval={5000}
      autoPlay={true}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./img/heroContent1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


    </>
  );
};

export default Home;

