import React from 'react'
import { useDispatch } from "react-redux";

export default function Product(props) {
  const dispatch = useDispatch();

  return (
    <div>
      {props.product.title}<br/>{props.product.price}$
      <img src={props.product.image}></img>
      <button onClick={() => dispatch(props.handleClick())}>{props.action}</button>
    </div>
  )
}
