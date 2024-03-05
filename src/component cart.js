// src/components/Cart.js

import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <h3>Total Quantity: {cartItems.reduce((acc, item) => acc + item.quantity, 0)}</h3>
      <h3>Total Amount: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h3>
    </div>
  );
};

export default Cart;
