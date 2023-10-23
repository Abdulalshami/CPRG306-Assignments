import React, { useState } from 'react';
import React from "react";
import Item from "./item";

export default function ItemList() {
    
  const [sortBy, setSortBy] = useState('name');


  const sortItem = () => {
    return [...items].sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localCompare(b.name);
      } else if (sortBy === 'category') {
        return a.category.localCompare(b.category);
      }
    });
  };

  const sortedItems = sortItem();

 
  const handleSortByChange = (newSortBy) => {
    setSortBy(newSortBy);
  };

  return (
    <>
      <div>
        <button
          onClick={() => handleSortByChange('name')}
          style={{
            backgroundColor: sortBy === 'name' ? 'lightblue' : 'white',
          }}
        >
          Sort by Name
        </button>
        <button
          onClick={() => handleSortByChange('category')}
          style={{
            backgroundColor: sortBy === 'category' ? 'lightblue' : 'white',
          }}
        >
          Sort by Category
        </button>
      </div>
      <div>
        {sortedItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </>
  );

}