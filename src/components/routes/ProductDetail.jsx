import React, { useEffect, useState } from 'react'
import { Button, Carousel, Col, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { createProductThunk } from '../../store/slices/cart.slice';
import { getAllProducts } from '../../store/slices/products.slice';

const ProductDetail = () => {

  const { id } = useParams();

  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  const producstLists = useSelector(state => state.products);

  const productsFound = producstLists.find(product => product.id === Number(id))
  const relatedProducts = producstLists.filter(product =>
    product.category.id === productsFound?.category.id &&
    product.id !== productsFound.id

  )

  const [quantity, setQuantity] = useState('');

  const addCart = () => {
    const productToCart = {
      id: productsFound.id,
      quantity: quantity

    }

    console.log(productToCart)
    dispatch(createProductThunk(productToCart))
  }


  // const addProducts = () =>{
  // const product = {
  // product: productsFound.id
  // }
  //}


  return (
    <div>
      <h1>{productsFound?.title} </h1>
      <Row>
        <Col lg={9}>


          <Carousel>
            <Carousel.Item>
              <img src={productsFound?.productImgs[0]} alt=""
                className="pic"
              />
            
              
              <Carousel.Caption>
                
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={productsFound?.productImgs[1]} alt=""
                
                className="pic"
              />

              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={productsFound?.productImgs[2]} alt=""

                className="pic"
              />

              <Carousel.Caption>
                <h3></h3>
                <p>
                 
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          <Button onClick={addCart}>Buy</Button>

          <h1>{productsFound?.price}</h1>
          {productsFound?.description}


        </Col>




        <Col lg={3}>


          <h1>Related Products</h1>
          <ListGroup variant="flush">
            {relatedProducts.map(product => (
              <ListGroup.Item>
                <Link

                  to={`/products/${product.id}`}>


                  <img src={product.productImgs[0]} alt="" className="img-fluid" style={{ height: 200 }} />
                  {product.title}
                </Link>
              </ListGroup.Item>
            ))}
          </ListGroup>

        </Col>
      </Row>



    </div>
  )
}

export default ProductDetail