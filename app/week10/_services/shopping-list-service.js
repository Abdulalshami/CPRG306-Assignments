import React, { useEffect, useState } from 'react';
import { getItems, addItem } from './shopping-list-service';

const ShoppingList = ({ user }) => {
  const [items, setItems] = useState([]);

  const loadItems = async () => {
    try {
      const result = await getItems(user.uid);
      setItems(result);
    } catch (error) {
      console.error('Error loading items:', error);
    }
  };

  useEffect(() => {
    loadItems();
  }, [user.uid]);

  const handleAddItem = async (newItem) => {
    try {
      const newItemId = await addItem(user.uid, newItem);
      setItems((prevItems) => [...prevItems, { id: newItemId, data: newItem }]);
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <div>
      <button onClick={() => handleAddItem()}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
