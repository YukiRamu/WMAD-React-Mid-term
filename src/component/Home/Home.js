/*  This component is for the homepage of our website  */
import React, { useState, useEffect } from "react";
import "./Home.css";
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import { Redirect, BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ProductDetail from "../ProductDetail/ProductDetail";

const Home = (props) => {
  /* State Hook */
  const [topCollection, setTopCollection] = useState([]);//create top collection
  const [isClicked, setIsClicked] = useState({
    isClicked: false,
    data: {}
  }); //redirect to detail page

  /* Top Collection - randomly show four items */
  let copiedProps = props.product.slice();
  let selectedTopPicks = [];
  const getTopCollection = () => {
    while ((selectedTopPicks.length < 4) && (copiedProps.length > 0)) {
      selectedTopPicks.push(copiedProps[Math.floor(Math.random() * copiedProps.length)]);//randomly push 
      copiedProps.splice(Math.floor(Math.random() * copiedProps.length), 1); //delete the target
    }
    console.log(selectedTopPicks);
    setTopCollection(selectedTopPicks); //assign, not callback function
  };

  useEffect(() => {
    getTopCollection();
    return () => {
    };
  }, []);

  /* Redirect to Detail Page when the view detail button is clicked*/
  // if (isClicked.isClicked) {
  //   props.getTargetProduct(isClicked.data); //pass props to parent
  //   return <Redirect to="/productDetail" />;
  // }

  // console.log("clicked?", isClicked.isClicked);

  // if (isClicked.isClicked) {
  //   console.log("I am here", isClicked.data);
  //   props.getTargetProduct(isClicked.data); //pass props to parent
  //   return <Redirect to="/productDetail" />;
  // }

  useEffect(() => {
    if (isClicked.isClicked) {
      console.log("I am here");
      props.getTargetProduct(isClicked.data); //pass props to parent
      return <Redirect to="/productDetail" />;
    }
  }, [isClicked]);

  return (
    <>
      {/* Hero Contents */}
      <section className="heroContentsSection">
        <Carousel
          fade={true}
          interval={3000}
          autoPlay={true}
          controls={true}
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

          <Carousel.Item
            style={{
              background: "url(./img/heroContent4.jpg)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}>
            <Carousel.Caption>
              <p>Lorem ipsum dolor sit amet</p>
              <h2>Jewelery collections</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione dolorum pariatur aut sunt dolore vel unde vitae dolores, ipsa eligendi minus adipisci optio recusandae nam itaque consectetur dignissimos beatae velit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item
            style={{
              background: "url(./img/heroContent5.jpg)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}>
            <Carousel.Caption>
              <p>Lorem ipsum dolor sit amet</p>
              <h2>Stylish Electronics</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione dolorum pariatur aut sunt dolore vel unde vitae dolores, ipsa eligendi minus adipisci optio recusandae nam itaque consectetur dignissimos beatae velit.</p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>
      </section>

      {/* Top Collection */}
      <section className="topCollectionSection">
        {topCollection.length !== 0 ? (
          <Container fluid>
            <Row>
              <Col
                className="titleCol"
                style={{
                  background: "url(./img/topCollection2.jpg)",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat"
                }}>
                <div className="collectionTitleContainer">
                  <div className="collectionTitle">
                    <h2>Top Deals</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum doloribus temporibus ut neque tenetur, esse asperiores aut accusantium optio, eligendi autem explicabo quidem laboriosam distinctio iste! Incidunt deleniti deserunt alias!</p>
                  </div>
                </div>
              </Col>

              <Col className="imgCol">
                <h4>{topCollection[0].title}</h4>
                <img src={topCollection[0].image} alt="item1" className="topCollectionImg" />
                <div className="imgHover">
                  <div>
                    <p>{topCollection[0].description}</p>
                    {/* Route to Detail page */}
                    <Link
                      to={{
                        pathname: "/productDetail",
                        state: {
                          product: topCollection[0],
                        },
                      }}
                      className="viewMoreBtn">View more</Link>
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col className="imgCol">
                <h4>{topCollection[1].title}</h4>
                <img src={topCollection[1].image} alt="item2" className="topCollectionImg" />
                <div className="imgHover">
                  <div>
                    <p>{topCollection[1].description}</p>
                    {/* Route to Detail page */}
                    <Link
                      to={{
                        pathname: "/productDetail",
                        state: {
                          product: topCollection[1],
                        },
                      }}
                      className="viewMoreBtn">View more</Link>
                  </div>
                </div>
              </Col>
              <Col className="imgCol">
                <h4>{topCollection[2].title}</h4>
                <img src={topCollection[2].image} alt="item3" className="topCollectionImg" />
                <div className="imgHover">
                  <div>
                    <p>{topCollection[2].description}</p>
                    {/* Route to Detail page */}
                    <Link
                      to={{
                        pathname: "/productDetail",
                        state: {
                          product: topCollection[2],
                        },
                      }}
                      className="viewMoreBtn">View more</Link>
                  </div>
                </div>
              </Col>
              <Col className="imgCol">
                <h4>{topCollection[3].title}</h4>
                <img src={topCollection[3].image} alt="item4" className="topCollectionImg" />
                <div className="imgHover">
                  <div>
                    <p>{topCollection[3].description}</p>
                    {/* Route to Detail page */}
                    <Link
                      to={{
                        pathname: "/productDetail",
                        state: {
                          product: topCollection[3],
                        },
                      }}
                      className="viewMoreBtn" >View more</Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        ) : ""}
      </section>

      {/* Brand Highlight */}
      <section className="brandHighlight">
        <img src="" alt="" />
      </section>

      {/* Navigate to Detail page */}
      {/* <Router>
        <Switch>
          <Route exact path="/productDetail" component={ProductDetail} />
        </Switch>
      </Router> */}

    </>
  );
};

export default Home;

