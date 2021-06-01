import React, { useState, useEffect } from "react";

const Category = (props) => {

  console.log(props.location.pathname);
  console.log("category selected is", props.location.state);

  const [title, setTitle] = useState("");

  useEffect(() => {
    switch (props.location.pathname) {
      case "/womenClothing":
        setTitle("SS Summer Collection");
        break;
      case "/menClothing":
        setTitle("SS Men's Classic");
        break;
      case "/jewelery":
        setTitle("Summer Jewelery Collection");
        break;
      case "/electronics":
        setTitle("Stylish Electronics");
        break;
      default:
        break;
    }
  }, []);

  return (
    <>
      <h1>{title}</h1>

    </>
  );
};

export default Category;
