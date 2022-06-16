import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Product from './Product';
import { increase } from '../slices/productsSlice';

export default function Checkout() {
  const inCartData = useSelector((state) => state.products.inCart);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(inCartData);
  })

  return (
    <div>
      {inCartData.products && inCartData.products.map(c => (
        <Product key={c.id} product={c} action="add more" handleClick={() => increase(c.id)}/>
      ))}
      <br/>
      Total price:{inCartData.price}

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  )
}
