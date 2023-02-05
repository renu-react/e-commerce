import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import { Container,Row, Col } from 'reactstrap'
import logo from "../../assets/images/eco-logo.png"
const Footer = () => {

  const year = new Date().getFullYear()

  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='3'>
         <div className="logo">
                <img src={logo} alt="logo" />
                <div>
                    <h2>RK_Multimart</h2>
                </div>
         </div>
         <p className="footer_text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/>
               Quaerat nulla repellat quo eaqe alias corporis sunt, <br/>
               facilis nesciunt rem fugit
                </p>
        </Col>
        <Col lg='3'>
        <div className="footer_quick-links">
        <h4 className="quick-links-title">Top Categories</h4>
        <listgroup>
          <ul>
          <li>
            <Link to='#'>Mobile Phones</Link>
          </li>
          <li>
            <Link to='#'>Morden sofa</Link>
          </li>
          <li>
            <Link to='#'>Arm chairs</Link>
          </li>
          <li>
            <Link to='#'>Smart Watches</Link>
          </li>
          </ul>
        </listgroup>
        </div>
        </Col>
        <Col lg='2'>
        <div className="footer_quick-links">
        <h4 className="quick-links-title">Usefull Links</h4>
        <listgroup>
          <ul>
          <li>
            <Link to='/shop'>Shop</Link>
          </li>
          <li>
            <Link to='/cart'>Cart</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='#'>Privacy Policy</Link>
          </li>
          </ul>
        </listgroup>
      </div>
        </Col>
        <Col lg='4'>
        <div className="footer_quick-links">
        <h4 className="quick-links-title">Contact</h4>
        <listgroup>
          <ul>
          <li>
            <Link>
            <span><i class="ri-map-pin-line"></i>  123 Renu,Krishnagiri,Tamilnadu</span>
            </Link>
          </li>
          <li>
            <Link>
          <span><i class="ri-contacts-book-2-fill"></i>  +917094808996</span>
          </Link>
          </li>
          <li>
            <Link>
          <span><i class="ri-mail-line"></i>  renukumar11m@gmail.com</span>
          </Link>
          </li>
          </ul>
        </listgroup>
      </div>  
        </Col>
      </Row>
      <div>
      <p className="footer_copy-rights">Copyrights {year} developed by Renu kumar MRK . All rights reserved</p>
    </div> 
    </Container>
  </footer>
  
}

export default Footer