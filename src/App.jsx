// src/App.js

import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './store/cartSlice';
import Product from './components/Product';
import Cart from './components/Cart';
import productsData from './product.json'; // Assuming product.json is in the same directory

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Shopping App</h1>
        <div>
          {productsData.products.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        <Cart />
      </div>
    </Provider>
  );
};

export default App;
