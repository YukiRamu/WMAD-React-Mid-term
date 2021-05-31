import React from 'react'
import "./ProductDetail.css";

const ProductDetail = () => {
  return (
    <>
    <div>
      <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"></img>
    </div>
    <div>
      <h2>Title</h2>
      <p>category</p>
      <p>price</p>
      <p>description</p>
      <button>Add to cart</button>
      <div className="ditailContainer">
        <h4>Title</h4>
        <p>Ditails:</p>
      </div>
    </div>
    </>
  );
};

export default ProductDetail

//Add tp cart function
// alaert something when you click the button