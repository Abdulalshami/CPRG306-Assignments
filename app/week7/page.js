import React, { useState } from 'react';
import ItemList from './item-list.js';
import NewItem from './new-item.js';
import itemsData from './items.json';
import MealIdeas from './meal-ideas.js'; // Import the MealIdeas component

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(null);

  function handleSubmit(item) {
    setItems((itemsData) => {
      return [...itemsData, item];
    });
  }

  function handleItemSelect(name) {
    // Clean up the name if needed
    const cleanedItemName = name.trim(); // You can add more cleaning logic here

    // Update the selectedItemName state
    setSelectedItemName(cleanedItemName);
  }

  return (
    <main className='bg-black min-h-screen p-5 text-white'>
      <div className='text-gray-400 font-bold text-4xl'>
        <h1>Shopping List</h1>
      </div>
      <div className="flex"> {/* Use flex to create the layout with two sides */}
        <div>
          <NewItem onSubmit={(newItem) => handleSubmit(newItem)} />
          <ItemList items={items} onItemSelect={handleItemSelect} /> {/* Pass onItemSelect prop to ItemList */}
        </div>
        <div>
          <MealIdeas ingredient={selectedItemName} /> {/* Pass selectedItemName as ingredient prop to MealIdeas */}
        </div>
      </div>
    </main>
  );
}
