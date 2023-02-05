import React from 'react'
import {Container,Row,Col} from 'reactstrap'
import {useParams} from 'react-router-dom'
import products from '../assets/data/products'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection' 
import '../styles/product-details.css'
import {cartActions} from '../redux/slices/cartSlice'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'

const ProductDetails = () => {
  const dispatch=useDispatch()
  const addTOCart =()=>{
    dispatch(cartActions.addItem({
      id,image:imgUrl,productName,price
    }

    ))
    toast.success('product added successfully');
  }
  const {id} = useParams()
  const product = products.find(item=> item.id === id)
  const {imgUrl, productName,  price,avgRating,reviews, description,shortDesc } = product

  return <Helmet title={productName}>
    <CommonSection title={productName}/>
    <section className='pt=0'>
      <Container>
        <Row>
          <Col lg='6'>
            <img src={imgUrl} alt="" />
          </Col>
          <Col lg='6'>
            <div className="product_details">
              <h2>{productName}</h2>
              <div className="product_rating ">
                <div>
                  <span>
                  <i class="ri-star-fill"></i>
                  </span>
                  <span>
                  <i class="ri-star-fill"></i>
                  </span>
                  <span>
                  <i class="ri-star-fill"></i>
                  </span>
                  <span>
                  <i class="ri-star-fill"></i>
                  </span>
                  <span>
                  <i class="ri-star-half-fill"></i>
                  </span>
                </div>
                <p>(<span>{avgRating}</span>ratings)</p>
              </div>
              <span className='product_price'>${price}</span>
              <p className='product_short'>{shortDesc}</p>

              <button className='buy_btn' onClick={addTOCart}>Add to Cart</button>
            </div>
          </Col>
        </Row>
      </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className="tab_wrapper d-flex align-items-center gap-5">
                <h6>Description</h6>
                <h6>Reviews({reviews.length})</h6>
              </div>
              <div className="tab_content">
                <p>{description}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  </Helmet>
}

export default ProductDetails