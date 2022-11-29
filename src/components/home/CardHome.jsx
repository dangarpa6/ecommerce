import React from 'react'
import {useNavigate} from 'react-router-dom'

const CardHome = ({product}) => {

const navigate = useNavigate()

const handleclick= () => {
  navigate(`/product/${product.id}`)
}



  return (
    <article className='card-home'>
      <header className= 'card-home__header'>
        <img className= 'card-home__img' src={product.productImgs[0]} alt="" />
      </header>
    </article>
  )
}

export default CardHome