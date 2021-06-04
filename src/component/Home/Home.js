/*  This component is for the homepage of our website  */
import React, { useState, useEffect } from "react";
import "./Home.css";
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AllProducts from '../API/AllProducts';

const Home = (props) => {
  /* State Hook */
  const [allProducts, setProduct] = useState([]);
  const [topCollection, setTopCollection] = useState([]);//create top collection
  const [womenClothing, setWomenClothing] = useState([]);
  const [jewelery, setJewelery] = useState([]);
  const [menClothing, setmenClothing] = useState([]);
  const [electronics, setElectronics] = useState([]);
  const [IsDataReady, setData] = useState(false);
  const [displayStyle, setDisplay] = useState({ "display": "none" });
  const [count,setCount] = useState(0);

  const updateCheckoutProduct = (dataFromChild) => {
    alert("clicked")
    console.log(dataFromChild);
  }

  //data fetch
  useEffect(() => {
    (async () => {
      const data = await AllProducts();
      setProduct(data);
    })();
  }, []);

  //prepare state hook
  useEffect(() => {
    getTopCollection();
    getWomenClothing();
    getJewelery();
    getMenClothing();
    getElectronics();
    setData(true);
  }, [allProducts]);

  /* Top Collection - randomly show four items */
  const getTopCollection = () => {
    let copiedProps = allProducts.slice();
    let selectedTopPicks = [];
    while ((selectedTopPicks.length < 4) && (copiedProps.length > 0)) {
      selectedTopPicks.push(copiedProps[Math.floor(Math.random() * copiedProps.length)]);//randomly push 
      copiedProps.splice(Math.floor(Math.random() * copiedProps.length), 1); //delete the target
    }
    setTopCollection(selectedTopPicks); //assign, not callback function
  };

  /* Filtered by category */
  const getWomenClothing = () => {
    let filteredWomenClothing = allProducts.filter(elem => elem.category === "women's clothing");
    setWomenClothing(filteredWomenClothing);
  };

  const getJewelery = () => {
    let filteredJewelery = allProducts.filter(elem => elem.category === "jewelery");
    setJewelery(filteredJewelery);
  };

  const getMenClothing = () => {
    let filteredMenClothing = allProducts.filter(elem => elem.category === "men's clothing");
    setmenClothing(filteredMenClothing);
  };

  const getElectronics = () => {
    let filteredElectronics = allProducts.filter(elem => elem.category === "electronics");
    setElectronics(filteredElectronics);
  };


  /* Show/Hide product description */
  const showDescription = (e) => {
    e.target.nextSibling.attributes[1].value === "display: none;" ?
      e.target.nextSibling.attributes[1].value = "display: block;"
      : e.target.nextSibling.attributes[1].value = "display: none;";
  };

  const hideDescription = (e) => {
    e.target.parentNode.parentNode.attributes[1].value === "display: block;" ?
      e.target.parentNode.parentNode.attributes[1].value = "display: none;"
      : e.target.parentNode.parentNode.attributes[1].value = "display: block;";
  };

  return (
    <>
      {(IsDataReady) ? (
        //when data is ready
        <>
          {/* Hero Contents */}
          <section className="heroContentsSection">
            <Carousel
              fade={true}
              interval={2000}
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
                  <Link
                    to={{
                      pathname: "/womenClothing",
                      state: {
                        data: womenClothing
                      }
                    }}
                    className="categoryLink">Shop the SS21 Women's Collection</Link>
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
                  <Link
                    to={{
                      pathname: "/womenClothing",
                      state: {
                        data: womenClothing
                      }
                    }}
                    className="categoryLink">Shop the SS21 Women's Collection</Link>
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
                  <Link
                    to={{
                      pathname: "/menClothing",
                      state: {
                        data: menClothing
                      }
                    }}
                    className="categoryLink">Shop the SS21 Men's Classic</Link>
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
                  <Link
                    to={{
                      pathname: "jewelery",
                      state: {
                        data: jewelery
                      }
                    }}
                    className="categoryLink">Shop Summer Jewelery Collection</Link>
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
                  <Link
                    to={{
                      pathname: "/electronics",
                      state: {
                        data: electronics
                      }
                    }}
                    className="categoryLink">Shop Stylish Electronics</Link>
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
                    <img src={topCollection[0].image} alt="item1" className="topCollectionImg" onClick={showDescription} />
                    <div className="imgHover" style={{ "display": "none" }}>
                      <Row>
                        <p>{topCollection[0].description}</p>
                        {/* Route to Detail page */}
                        <Link
                          to={{
                            pathname: "/productDetail",
                            state: {
                              product: [topCollection[1],"test"]
                            },
                          }}
                          className="viewMoreBtn">View more</Link>
                        <button type="button" className="closeBtn" onClick={hideDescription}>Close</button>
                      </Row>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col className="imgCol">
                    <h4>{topCollection[1].title}</h4>
                    <img src={topCollection[1].image} alt="item2" className="topCollectionImg" onClick={showDescription} />
                    <div className="imgHover" style={displayStyle}>
                      <Row>
                        <p>{topCollection[1].description}</p>
                        {/* Route to Detail page */}
                        <Link
                          to={{
                            pathname: "/productDetail",
                            state: {
                              product: topCollection[1]
                            },
                          }}
                          className="viewMoreBtn">View more</Link>
                        <button type="button" className="closeBtn" onClick={hideDescription}>Close</button>
                      </Row>
                    </div>
                  </Col>
                  <Col className="imgCol">
                    <h4>{topCollection[2].title}</h4>
                    <img src={topCollection[2].image} alt="item3" className="topCollectionImg" onClick={showDescription} />
                    <div className="imgHover" style={displayStyle}>
                      <Row>
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
                        <button type="button" className="closeBtn" onClick={hideDescription}>Close</button>
                      </Row>
                    </div>
                  </Col>
                  <Col className="imgCol">
                    <h4>{topCollection[3].title}</h4>
                    <img src={topCollection[3].image} alt="item4" className="topCollectionImg" onClick={showDescription} />
                    <div className="imgHover" style={displayStyle}>
                      <Row>
                        <p>{topCollection[3].description}</p>
                        {/* Route to Detail page */}
                        <Link
                          to={{
                            pathname: "/productDetail",
                            state: {
                              product: topCollection[3]
                            
                            },
                          }}
                          className="viewMoreBtn">View more</Link>
                        <button type="button" className="closeBtn" onClick={hideDescription}>Close</button>
                      </Row>
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
        </>
      ) : <h1 className="loading">Loading.... Hang on a sec....</h1>}
    </>
  );
};

export default Home;

