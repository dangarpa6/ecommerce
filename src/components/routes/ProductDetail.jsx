import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { getAllProducts } from '../../store/slices/products.slice';

const ProductDetail = () => {

const {id} = useParams();

const dispatch=useDispatch();



useEffect(() => {
  dispatch(getAllProducts())
}, [])

const producstLists = useSelector(state => state.products);

const productsFound= producstLists.find(product=>product.id === Number(id))
const relatedProducts= producstLists.filter(product=>
  product.category.id === productsFound.category.id)

console.log(relatedProducts)


  return (
    <div>
      <h1>{productsFound?.title} </h1>
      <img src={productsFound?.productImgs[0]} alt="" />

      <h1>Related Products</h1>
      {relatedProducts.map(product=>(
       
       <li>
        <Link to ={`/products/${product.id}`}>{product.title} </Link>
        </li> 

       
      ))}
      
    </div>
  )
}

export default ProductDetail