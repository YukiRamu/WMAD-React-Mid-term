import React from 'react';

const ProductDetail = (props) => {

console.log("product detail", props.location.state)
  return (
    <div>
      <h1>Product Detail Page</h1>
      <h2>{props.location.state.product.title}</h2>
    </div>
  );
}

export default ProductDetail;
