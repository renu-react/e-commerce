import React , {useState, useEffect} from 'react'
import products from '../assets/data/products'
import {Link} from "react-router-dom"
import Helmet from '../components/Helmet/Helmet'
import "../styles/home.css";
import Services from '../services/Services';
import ProductsList from '../components/UI/ProductsList';
// import ProductSales from '../components/UI/ProductSales';
 import ClockTime from '../components/UI/ClockTime';
// import ProductNew from '../components/UI/ProductNew';
// import ProductPopular from '../components/UI/ProductPopular';
import { Container, Row, Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img.png'
import "bootstrap/dist/css/bootstrap.css";
// import { useEffect, useState } from 'react'
const Home = () => {

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear()

  useEffect(()=>{
    const filteredTrendingProducts = products.filter(item=> item.category==="chair")
    const filteredBestSalesProducts = products.filter(item=> item.category==="sofa")
    const filteredMobileProducts = products.filter(item=> item.category==="mobile")
    const filteredWirelessProducts = products.filter(item=> item.category==="wireless")
    const filteredPopularProducts = products.filter(item=> item.category==="watch")
    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  },[]);
  return ( <Helmet title={"Home"}>
    <section className="hero_section">
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero_content">
              <h4 className="hero_subtitle">Trending product in {year}</h4>
              <h2>Make your interior more minimalistic & morden</h2>
              <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
               Quaerat nulla repellat quo eaqe alias corporis sunt, facilis nesciunt rem fugit
              </p>
              <button className="buy_btn"><Link to='/shop'>SHOP NOW</Link></button>
            </div>
          </Col>
          <Col lg='4' md="5">
            <div className="hero_img">
              <img src={heroImg} alt="" />
            </div>  
          </Col>
        </Row>
      </Container>
    </section>
    <Services/>
    <section className="trending_products">
    <Container>
      <Row>
        <Col lg='12'className='text-center'>
        <h2 className='section_title'>Trending Products</h2>
      <ProductsList data={trendingProducts}/>
        </Col>
      </Row>
    </Container>
    </section>
     <section className="best_sales">
     <Container>
      <Row>
        <Col lg='12'className='text-center'>
        <h2 className='section_title'>Best Sales</h2>
        <ProductsList data={bestSalesProducts}/>
        </Col>
      </Row>
      </Container>
    </section>


   <section className="timer_count">
      <div className="clock_top_content">
        <h4>Limited offers</h4>
        <h3>Quality Armchairs</h3>
      </div>
    <ClockTime/>
    <div>
    <button className="buy_btn"><Link to='/shop'>Visit Store</Link></button>
      <div className="timer_img">
        <img src="" alt="" />
      </div>
      </div>
    </section>

    <section className="new_arrivals">
     <Container>
      <Row>
        <Col lg='12'className='text-center'>
        <h2 className='section_title'>New Arrivals</h2>
        <ProductsList data={mobileProducts}/>
        <ProductsList data={wirelessProducts}/>
        </Col>
      </Row>
      </Container>
    </section>

    <section className="popular_category">
     <Container>
      <Row>
        <Col lg='12'className='text-center'>
        <h2 className='section_title'>Popular Category</h2>
        <ProductsList data={popularProducts}/>
        </Col>
      </Row>
      </Container>
    </section>
    
  </Helmet>

  )
  
}

export default Home