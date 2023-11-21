import React, { useState } from 'react';
import ItemList from './item-list.js';
import NewItem from './new-item.js';
import itemsData from './items.json';
import MealIdeas from './meal-ideas.js'; 
import useUserAuth from './useUserAuth'; 

export default function Page() {
  
  const user = useUserAuth();

  
  if (!user) {
    return <div>Not logged in. Please log in to view the shopping list.</div>;
  }

  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(null);

  function handleSubmit(item) {
    setItems((itemsData) => {
      return [...itemsData, item];
    });
  }

  function handleItemSelect(name) {
    
    const cleanedItemName = name.trim(); 

    
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
