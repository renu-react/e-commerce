import React from 'react'
import '../../styles/product-card.css';
import { Link } from "react-router-dom";
//  import productImg from '../../assets/images/arm-chair-01.jpg'
import {Col} from "reactstrap";
import {useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slices/cartSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductCard = ({item}) => {
  const dispatch = useDispatch()

  const addTOCart = ()=>{
    dispatch(cartActions.addItem({
      id: item.id,
      productName: item.productName,
      price: item.price,
      imgUrl: item.imgUrl,
    }))
    toast.success("product add successfully")
  }
  return (
    <Col  lg="3" md="4">
    <div className="product_items">

      <div className='block'>
          <img src={item.imgUrl} alt="" />  
          <h3 className="product_name"><Link to={`/shop/${item.id}`}>{item.productName}</Link></h3>
          <span>{item.category}</span>
      
          <div className="product_card">
              <span className="price">${item.price}
              <span onClick={addTOCart}><i class="ri-add-line"></i>
              </span>
              </span>
          </div>

      </div>
      </div>
    </Col>
    
  )
};

export default ProductCard