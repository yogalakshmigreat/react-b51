// src/components/CartItem.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../store/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItem(item));
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
  };

  return (
    <div>
      <h3>{item.title}</h3>
      <p>Price: ${item.price}</p>
      <input type="number" value={item.quantity} onChange={handleQuantityChange} />
      <p>Total: ${item.price * item.quantity}</p>
      <button onClick={handleRemoveItem}>Remove</button>
    </div>
  );
};

export default CartItem;
