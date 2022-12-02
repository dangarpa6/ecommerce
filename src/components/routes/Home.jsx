import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterProducts, filtredTitle, getAllProducts } from '../../store/slices/products.slice'
import { Button, Card, Col, Form, InputGroup, ListGroup, Row } from 'react-bootstrap'
import CardHome from '../home/CardHome'
import { Link } from 'react-router-dom';
import axios from 'axios';
const Home = () => {

  const dispatch = useDispatch();
  const products = useSelector(state => state.products)


  const [categoriesList, setCategoriesList] = useState([])
  const [inputSearch, setInputSearch] = useState('')


  useEffect(() => {
    dispatch(getAllProducts())
    axios.get('https://e-commerce-api.academlo.tech/api/v1/products/categories')
      .then(res => setCategoriesList(res.data.data.categories));
  }, [])


  return (
    <div className='home'>
      <Row>
        <Col lg={3}>

          <ListGroup defaultActiveKey="#link1">

            {
              categoriesList.map(category => (
                <ListGroup.Item onClick={() => dispatch(filterProducts(category.id))}
                  style={{ cursor: 'pointer' }}
                >

                  {category.name}  </ListGroup.Item>
              ))
            }

          </ListGroup>



        </Col>



        <Col lg={9}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={inputSearch}
              onChange={e => setInputSearch(e.target.value)}
            />
            <Button
              variant="outline-secondary"
              onClick={() => dispatch(filtredTitle(inputSearch))}
            >
              Search
            </Button>
          </InputGroup>




          <div className='products__container'>
            <ul className='cards '>

              <Row xs={1} md={2} lg={3} className="g-4">
              {products.map(product => (
                  <Col>
                    <Card>
                    <Link to={`/products/${product.id}`} style={{textDecoration:'none'}}>
                      <Card.Img variant="top" 
                      src={product.productImgs[0]} 
                     style={{height:200, objectFit:'contain'}}
                      />
                      <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                          <h4>Price:</h4>
                         <h4>{product.price} </h4>
                        </Card.Text>
                      </Card.Body>
                      </Link>
                    </Card>
                  </Col>
                ))}
              </Row>
            </ul>
          </div>
        </Col>

      </Row>




    </div>
  )
}

export default Home