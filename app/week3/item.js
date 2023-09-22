import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="bg-white p-4 shadow-md rounded-lg mb-4">
      <h2 className="text-lg font-semibold mb-2">{name}</h2>
      <p className="text-gray-600">Quantity: {quantity}</p>
      <p className="text-gray-600">Category: {category}</p>
    </li>
  );
};

export default Item;
