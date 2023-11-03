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
      <div className="row"> 
      <div className="column"></div> 
      <div className="column"></div> 
      <div className="column"></div>     
        </div>

    </div>
  );
}

function App() {
  return (
    <div className="App">

      <PriceCard
        title="FREE"
        price="$0/month"
        features={['Single User', '50GB Storage', 'Unlimited public projects',
        'community access','Unlimited private projects',
        'Dedicated phone support','free subdomain','monthly status reports']}
      />
      <PriceCard
        title="PLUS" 
        price="$9/month"
        features={['5 User', '50GB Storage', 'Unlimited public projects',
        'community access','Unlimited private projects',
        'Dedicated phone support','free subdomain','monthly status reports']}
      />
      <PriceCard
        title="PRO"
        price="$49/month"
        features={['Unlimated User', '50GB Storage', 'Unlimited public projects',
        'community access','Unlimited private projects',
        'Dedicated phone support','free subdomain','monthly status reports']}
      />
    </div>
  );
}


  export default App;