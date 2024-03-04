import React, { useState } from 'react';
import './App.css';

function Main() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');

  const addItem = () => {
    setItems([...items, { name: itemName }]);
    setItemName('');
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div className="Main">
      <input
        type="text"
        placeholder="Enter item name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Main;
