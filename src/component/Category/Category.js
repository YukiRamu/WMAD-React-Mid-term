import React, { useState, useEffect } from "react";
import "./Category.css";
import FilterByCategory from '../API/FilterByCategory';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Category = (props) => {
  const [filteredProduct, setFilteredProduct] = useState([]);

  console.log(props.location);

  //prepare state hook
  useEffect(() => {
    let isMounted = true; //mutable flag
    (async () => {
      const data = await FilterByCategory(props.location.state.parameter);
      if (isMounted) setFilteredProduct(data);
    })();
  }, [props.location.state.parameter]);

  const clickHandler = (e) => {
    console.log("view more clicked");
    console.log(e);
  };

  //Change the layout based of the index (odd or even)
  const mapHTML = () =>
    filteredProduct.map((value, index) =>
      (index % 2 !== 0) ?
        <>
          <Row key={filteredProduct[index].id} className="oddNum">
            <Col className="titleCol">
              <Row>
                <h3>{filteredProduct[index].title}</h3>
                <p>${filteredProduct[index].price} CAD</p>
                {/* Route to Detail page */}
                <Link
                  to={{
                    pathname: "/productDetail",
                    state: {
                      product: filteredProduct[index],
                    },
                  }}
                  className="viewMoreBtn">View more</Link>
              </Row>
            </Col>
            <Col className="imgCol"><img src={filteredProduct[index].image} alt="productPhoto" /></Col>
          </Row>
        </>
        : <>
          <Row key={filteredProduct[index].id} className="evenNum">
            <Col className="imgCol"><img src={filteredProduct[index].image} alt="productPhoto" /></Col>
            <Col className="titleCol">
              <Row>
                <h3>{filteredProduct[index].title}</h3>
                <p>${filteredProduct[index].price} CAD</p>
                {/* Route to Detail page */}
                <Link
                  to={{
                    pathname: "/productDetail",
                    state: {
                      product: filteredProduct[index],
                    },
                  }}
                  className="viewMoreBtn">View more</Link>
              </Row>
            </Col>
          </Row>
        </>);

  return <section className="categoryContainer"><h2 className="title">{props.location.state.parameter}</h2>{mapHTML()}</section>;
};

export default Category;
