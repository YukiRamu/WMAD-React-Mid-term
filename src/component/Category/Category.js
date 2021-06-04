import React, { useState, useEffect } from "react";
import "./Category.css";
import FilterByCategory from '../API/FilterByCategory';
import { Row, Col } from 'react-bootstrap';

const Category = (props) => {
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [IsDataReady, setData] = useState(false);

  console.log(props.location);

  //prepare state hook
  useEffect(() => {
    let isMounted = true; //mutable flag
    (async () => {
      const data = await FilterByCategory(props.location.state.parameter);
      if (isMounted) setFilteredProduct(data); setData(true);
      console.log(data);
    })();
  }, []);

  return (
    <>
      {(IsDataReady) ? (
        //when data is ready
        <>
          <section className="categoryContainer">
            <h2 className="title">{props.location.state.parameter}</h2>
            <Row>
              <Col className="imgCol"><img src={filteredProduct[0].image} alt="productPhoto" /></Col>
              <Col className="titleCol">
                <Row>
                  <h3>{filteredProduct[0].title}</h3>
                  <p>CAD {filteredProduct[0].price}</p>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col className="titleCol">
                <Row>
                  <h3>{filteredProduct[1].title}</h3>
                  <p>CAD {filteredProduct[1].price}</p>
                </Row>
              </Col>
              <Col className="imgCol"><img src={filteredProduct[1].image} alt="productPhoto" /></Col>
            </Row>
          </section>
        </>) : <h1 className="loading">Loading.... Hang on a sec....</h1>}
    </>
  );
};

export default Category;
