// CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.product.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (product) => {
    setCart(cart.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decreaseQuantity = (product) => {
    const existingItem = cart.find(item => item.product.id === product.id);
    if (existingItem.quantity === 1) {
      setCart(cart.filter(item => item.product.id !== product.id));
    } else {
      setCart(cart.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity - 1 } : item));
    }
  };

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  const totalAmount = cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, increaseQuantity, decreaseQuantity, totalQuantity, totalAmount }}>
      {children}
    </CartContext.Provider>
  );
}
