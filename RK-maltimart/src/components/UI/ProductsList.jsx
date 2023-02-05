import React from 'react'
import ProductCard from './ProductCard'
import '../../styles/product-list.css';
//   import ProductSales from './ProductSales'
const ProductsList = ({data}) => {
  return (
    <div className='product_list'>
      {
        data.map((item,index) =>(
          <ProductCard item = {item} key={index}/>

        ))
      }
        
    </div>
  
  );
}

export default ProductsList