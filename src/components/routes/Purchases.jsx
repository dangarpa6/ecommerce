import React, { useEffect } from "react";
import { Badge, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPurchasesThunk } from "../../store/slices/puchases.slice";
import getConfig from "../../utils/getConfig";

const Purchases = () => {
  const dispatch = useDispatch();

  const purchases = useSelector(state => state.purchases);

  useEffect(() => {
    dispatch(getPurchasesThunk());
  }, []);

  return (
    <div className="box">
      <h1>Purchases</h1>
  
  


 
      <ul className="purch-container">
      
        
        {
          purchases.map(purchase =>

            <li key={purchase.id}>

              {purchase.cart.products.map(product => (
                <li>
                  <Link to={`/products/${product?.id}`} style={{ textDecoration: 'none' }}>
                    <h3><span>Product: </span> {product.title} </h3>

                    <h3>Price:${product.price}</h3>

                    <img src={product.productImgs?.[0]} alt="" />

                    <h3 >Purchase Date: {product.createdAt}</h3>
                  </Link>
                </li>

              ))}

            </li>

          )
        }
      </ul>
    </div>
  );
};

export default Purchases;

