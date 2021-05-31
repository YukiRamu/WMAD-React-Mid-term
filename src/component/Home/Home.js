//This component is for the homepage of our website
import React, { useState, useEffect } from "react";
import "./Home.css";
import FetchAPI from "../API/FetchAPI";
import { Carousel, Container, Row, Col } from 'react-bootstrap';


const Home = (props) => {
  console.log("Child component !!!!!!!");
  console.log(props);

  const [topCollection, setTopCollection] = useState([]);

  //Create a fake array for each contents
  //Top Collection - randomly show four items
  let copiedProps = props.product.slice();
  let selectedTopPicks = [];
  const getTopCollection = () => {
    console.log("executing");
    while ((selectedTopPicks.length < 4) && (copiedProps.length > 0)) {
      selectedTopPicks.push(copiedProps[Math.floor(Math.random() * copiedProps.length)]);//randomly push 
      copiedProps.splice(Math.floor(Math.random() * copiedProps.length), 1); //delete the target
    }
    console.log(selectedTopPicks);
    setTopCollection(selectedTopPicks); //assign, not callback function
    console.log(topCollection);
  };

  useEffect(() => {
    getTopCollection();
    return () => {
    };
  }, []);

  return (
    <>
      {/* Hero Contents */}
      <section className="heroContentsSection">
        <Carousel
          fade={true}
          interval={3000}
          autoPlay={true}
          controls={false}
          indicators={true}>

          <Carousel.Item
            style={{
              background: "url(./img/heroContent1.jpg)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}>
            <Carousel.Caption>
              <p>Lorem ipsum dolor sit amet</p>
              <h2>Elegance & Luxury</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus cupiditate quas, quibusdam est distinctio odit maxime totam dolorum cumque atque facilis, reprehenderit perferendis esse nam inventore doloribus assumenda numquam? Rerum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item
            style={{
              background: "url(./img/heroContent2.jpg)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}>
            <Carousel.Caption>
              <p>Be ready for Summer</p>
              <h2>Summer Vibes</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item
            style={{
              background: "url(./img/heroContent3.jpg)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}>
            <Carousel.Caption>
              <p>Lorem ipsum dolor sit amet</p>
              <h2>Men's Classic</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione dolorum pariatur aut sunt dolore vel unde vitae dolores, ipsa eligendi minus adipisci optio recusandae nam itaque consectetur dignissimos beatae velit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      {/* Top Collection */}
      <section className="topCollectionSection">
        <h2>Top Picks</h2>

        {topCollection.length !== 0 ? (
          <Container fluid>
            <Row>
              <Col>
                <img src={topCollection[0].image} alt="item1" className="topCollectionImg" />
              </Col>
              <Col>
                <img src={topCollection[1].image} alt="item2" className="topCollectionImg" />
              </Col>
              <Col>
                <img src={topCollection[2].image} alt="item1" className="topCollectionImg" />
              </Col>
              <Col>
                <img src={topCollection[3].image} alt="item2" className="topCollectionImg" />
              </Col>
            </Row>
          </Container>
        ) : (console.log("length 0"))}
      </section>

    </>
  );
};

export default Home;


// <div className="container">
// <div className="row">
//   <div className="col">
//     <img src={props.product[0].image} alt="item1" />
//   </div>
//   <div className="col">
//     2 of 2
//   </div>
// </div>
// </div>

