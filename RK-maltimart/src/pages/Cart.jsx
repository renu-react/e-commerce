import React from 'react'
import '../styles/cart.css';
import Helmet from '../components/Helmet/Helmet'
import CommonSection from "../components/UI/CommonSection"
import { Container,Row,Col } from 'reactstrap';
// import {cartActions} from "../redux/slices/cartSlice"
import { useSelector,} from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/checkout.css'
const Cart = () => {
  const cartItems = useSelector((state)=> state.cart.cartItems)
  const totalAmount = useSelector((state)=> state.cart.totalAmount)
  return (
   <Helmet title="cart">
    <CommonSection tiltle="Shopping Cart"/>
    <section>
      <Container>
        <Row>
          <Col lg='9'>
            {
              cartItems.length === 0 ? (
                <h2>No items added to the Cart</h2>
              ):(
            
          <table className="table">
          <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
            {
              cartItems.map((item,index)=>(
          <tr key={index}>
            <td><img src={item.imgUrl} alt=""></img></td>
            <td>{item.productName}</td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
            <td><i class="ri-delete-bin-7-line"></i></td>
          </tr>
           ))
           }

        </tbody>
        </table>
              )}
          </Col>
          <Col lg='3'>
            <div>
            <h1 className='d-flex align-item-center justify-content-center'>Subtotal</h1>
            <span className='fs-5 fw-200'>${totalAmount}</span>
            </div>
            <p>taxes added shipping will calculate in checkout</p>
            <div>
              <button className="buy_button">
                <Link to ='/shop'>Continue shopping</Link>
              </button>
              <button className="buy_button">
                <Link to ='/checkout'>Checkout</Link>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
   </Helmet>
  )
}

export default Cart