// ProductList.js
import React from 'react';
import { useCart } from './CartContext';
import productsData from './products.json';

function ProductList() {
  const { addToCart } = useCart();

  return (
    <div className="product-list">
      {productsData.products.map(product => (
        <div key={product.id} className="product">
          <h2>{product.title}</h2>
          <p>Description: {product.description}</p>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
