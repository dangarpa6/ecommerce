import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterProducts, getAllProducts } from '../../store/slices/products.slice'
import { Button } from 'react-bootstrap'
import CardHome from '../home/CardHome'
import { Link } from 'react-router-dom';
import axios from 'axios';
const Home = () => {

  const dispatch = useDispatch();
  
  
  const products = useSelector(state => state.products)
  const [categoriesList, setCategoriesList] = useState([])
  
  useEffect(() => {
    dispatch(getAllProducts())
    axios.get('https://e-commerce-api.academlo.tech/api/v1/products/categories')
    .then(res => setCategoriesList(res.data.data.categories));
  }, [])


  return (
    <div className='home'>
      <h1>Products</h1>
      {
        categoriesList.map(category=>(
          <Button onClick={()=>dispatch(filterProducts(category.id)) }
          >{category.name} </Button>
        ))
      }
      <div className='products__container'>
      <ul className='cards '>
        {products.map(product=>(
          <li>
            <Link to={`/products/${product.id}`}> 
            {product.title}
            <br />
            <img src={product.productImgs[0]} style={{width: 150}} alt="" />
            </Link>
          </li>
        ))}
      </ul>
      </div>
  
    </div>
  )
}

export default Home