import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../slices/productsSlice";
import "./productsStyle.css";
import { addToCart } from '../slices/productsSlice';
import { Link } from "react-router-dom"
import Product from './Product';

export default function Products() {
  const productsData = useSelector((state) => state.products.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [])
  
  return (
    <div>
      {productsData[0] && productsData[0].map((p) => (
        <Product key={p.id} product={p} action="Add to cart" handleClick={() => addToCart({product:p, quantity: 0})}/>
      ))}
    </div>
  )
}
