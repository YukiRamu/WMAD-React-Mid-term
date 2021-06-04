import React from 'react';
import "./ProductDetail.css";
import { IoCartOutline } from "react-icons/io5";


const ProductDetail = (props) => {


//  function myFunction() {
//   alert("Your file is being uploaded!")
// }


  return (
    <>

    <div className="mainContainer">
      <div className="imgContainer">
       <img src={props.location.state.product.image}/>
      </div>
      <div className="detailsContainer">
         <div>
           <h2>{props.location.state.product.title}</h2>
           <h6>{props.location.state.product.category}</h6>
           <h5>${props.location.state.product.price} CAD</h5>
           <button onClick={
             props.location.state.handleUpdate
           }>Add To Cart  <IoCartOutline/></button>
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
