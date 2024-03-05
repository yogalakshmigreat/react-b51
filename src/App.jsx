// App.js
import React from 'react';
import './App.css';
import ProductList from './ProductList';
import Cart from './Cart';
import { CartProvider } from './CartContext';

function App() {
  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <CartProvider>
        <ProductList />
        <Cart />
      </CartProvider>
    </div>
  );
}

export default App;
