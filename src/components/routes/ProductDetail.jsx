import React, { useEffect, useState } from 'react'
import { Carousel, Col, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
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
    product.category.id === productsFound.category.id &&
    product.id !== productsFound.id

  )

  console.log(relatedProducts)


  return (
    <div>
      <h1>{productsFound?.title} </h1>
      <Row>
        <Col lg={9}>


        <Carousel>
      <Carousel.Item>
        <img src={productsFound?.productImgs[0]} alt=""

          className="img-fluid"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={productsFound?.productImgs[1]} alt=""

          className="img-fluid"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={productsFound?.productImgs[2]} alt=""

          className="img-fluid"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

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

                  
                  <img src={product.productImgs[0]} alt="" className="img-fluid" />
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