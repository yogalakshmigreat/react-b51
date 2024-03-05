// Cart.js
import React from 'react';
import { useCart } from './CartContext';

function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, totalQuantity, totalAmount } = useCart();

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.map(item => (
        <div key={item.product.id} className="cart-item">
          <h3>{item.product.title}</h3>
          <p>Price: ${item.product.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => increaseQuantity(item.product)}>+</button>
          <button onClick={() => decreaseQuantity(item.product)}>-</button>
        </div>
      ))}
      <div className="total">
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Amount: ${totalAmount}</p>
      </div>
    </div>
  );
}

export default Cart;
