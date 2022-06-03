import React from 'react';
import * as moment from 'moment'
import { useDispatch } from 'react-redux';
import { removeItem } from '../features/cart/cartSlice';


const CartItem = ({ id, name, area, category, openingdate , closingdate }) => {
  const dispatch = useDispatch();
  let currentStatus = "";
  let  current = new Date();
  let date = moment(current).format("MMMM Do YYYY")
  {
    let d = new Date(closingdate);
    let cdate = moment(d).format("MMMM Do YYYY")
    if (date !== cdate)
    {
      currentStatus = "Opened"
    }
    else
    {
      currentStatus = "Closed"
    }
  }


  return (
    <article className='cart-item'>

      <div className='info'>
        <div><h4>{name}</h4></div>
        <div><h4 className='item-price'> {area}</h4></div>
        <div><p className='status'>{currentStatus}</p></div>
        <div><p className='amount'>{category}</p></div>
        <div><button className='remove-btn' onClick={() => { dispatch(removeItem(id)); }} > remove</button></div>
      </div>
    </article>
  );
};

export default CartItem;