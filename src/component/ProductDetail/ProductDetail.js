import React from 'react';

const ProductDetail = (props) => {

console.log("product detail", props.location.state)
  return (
    <>
      <h1>Product Detail Page</h1>
      <h2>{props.location.state.product.title}</h2>
    </>
  );
}

export default ProductDetail;
