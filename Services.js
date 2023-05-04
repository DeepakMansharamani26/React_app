import React,{ useState } from 'react'
import ProductCard from './Product_List/ProductCard';

import ProductList from "./Product_List/ProductApi.js"

function Services() {
  const [products,setProducts] =useState(ProductList);
  console.log(products);
  

  return (
    <>
      <ProductCard  products={products}/>
    </>
  )
}

export default Services;
