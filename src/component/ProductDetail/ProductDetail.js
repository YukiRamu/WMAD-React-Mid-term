import React from 'react';
import "./ProductDetail.css";
import { IoCartOutline } from "react-icons/io5";


const ProductDetail = (props) => {

 console.log("product detail new", props.allProducts[0].title)

 let ProductData = props.allProducts[0];
//  console.log("ProductToday",ProductData)

  return (
  
    <>
    <div className="mainContainer">
      <div className="imgContainer">
       <img src={ProductData.image}></img>
      </div>
      <div className="detailsContainer">
         <div>
           <h2>{ProductData.title}</h2>
           <h6>{ProductData.category}</h6>
           <h5>${ProductData.price} CAD</h5>
           <button>Add To Cart <IoCartOutline/></button>
        </div>
        <div className="description">
           <h6>{ProductData.title}</h6>
           <span>Details:</span>
           <br></br>
           <p>{ProductData.description}</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductDetail;
