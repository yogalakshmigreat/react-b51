import React from 'react';

function PriceCard(props) {
  return (
    <div className="price-card">
      <h2>{props.title}</h2>
      <div className="price">${props.price}/month</div>
      <ul className="features">
        {props.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="buy-button">Buy Now</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <PriceCard
        title="Basic Plan"
        price="19.99"
        features={['Feature 1', 'Feature 2', 'Feature 3']}
      />
      <PriceCard
        title="Pro Plan"
        price="39.99"
        features={['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']}
      />
      <PriceCard
        title="Premium Plan"
        price="59.99"
        features={['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5']}
      />
    </div>
  );
}


  export default App;