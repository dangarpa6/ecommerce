import React, { useEffect } from 'react'
import { Badge, Button, ListGroup, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { checkoutCartThunk, getCartThunk } from '../../store/slices/cart.slice';

const Cart = ({ show, handleClose }) => {

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(getCartThunk())
  }, [])

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>SHOPPING CART</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>


          <ListGroup as="ol" numbered>
          {cart.map(products => (
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{products.title}</div>
               
              </div>
              <Badge bg="primary" pill>
               {products.price}
              </Badge>
            </ListGroup.Item>
          ))}
          </ListGroup>



         
            <div></div>
          <Button onClick={() => dispatch(checkoutCartThunk())}>Checkout</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};



export default Cart;