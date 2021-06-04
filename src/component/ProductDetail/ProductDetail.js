import React from 'react';
import "./ProductDetail.css";
import { IoCartOutline } from "react-icons/io5";


const ProductDetail = (props) => {
  console.log(props);
  console.log("state is ", props.location.state);
  console.log(props.location.state.product.image);

  return (

    <>
      <div className="mainContainer">
        <div className="imgContainer">
          <h1>{props.location.state.product.title}</h1>
          <img src={props.location.state.product.image} alt="photo" />
        </div>
        <div className="detailsContainer">
          <div>
            <h2>{props.location.state.title}</h2>
            <h6>{props.location.state.category}</h6>
            <h5>${props.location.state.price} CAD</h5>
            <button>Add To Cart <IoCartOutline /></button>
          </div>
          <div className="description">
            <h6>{props.location.state.title}</h6>
            <span>Details:</span>
            <br></br>
            <p>{props.location.state.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
