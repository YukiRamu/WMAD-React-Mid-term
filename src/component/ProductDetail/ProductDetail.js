import React, {userState, useState}from 'react';
import "./ProductDetail.css";
import AlertComponent from "./Alert";
import { IoCartOutline } from "react-icons/io5";


const ProductDetail = (props) => {
  console.log(props);
  console.log("state is ", props.location.state);
  console.log(props.location.state.product.image);


  const [showAlert, setShowAlert] = useState(false);

 
  // Save a item to localStorage
  function addCart() {
    if(!localStorage.hasOwnProperty("product")) {
      console.log('add cart status')
      localStorage.setItem("product",JSON.stringify([props.location.state.product]));
      {/*  */}
      setShowAlert(true);
    } else {
      alert('You added this item in your cart')
      let product = JSON.parse(localStorage.getItem("product"));
      product.push(props.location.state.product);
      localStorage.setItem("product",JSON.stringify(product));
      setShowAlert(true);
    }
  }
  return (

    <>
      <div className="mainContainer">
        <div className="imgContainer">
          <img src={props.location.state.product.image} alt="photo" />
        </div>
        <div className="detailsContainer">
          <div>
            <h2>{props.location.state.product.title}</h2>
            <h6>{props.location.state.product.category}</h6>
            <h5>${props.location.state.product.price} CAD</h5>
            {/*  */}
            <button onClick={addCart} >Add To Cart <IoCartOutline /></button>
            {showAlert ? <AlertComponent />  : null}

          </div>
          <div className="description">
            <h6>{props.location.state.product.title}</h6>
            <span>Details:</span>
            <br></br>
            <p>{props.location.state.product.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
