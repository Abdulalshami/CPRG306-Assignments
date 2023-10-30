"use client";
import React, { useState } from 'react';
import Item from './item.js';

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState('name');

  const sortItems = (items, sortBy) => {
    return [...items].sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'category') {
        return a.category.localeCompare(b.category);
      }
    });
  };

  const sortedItems = sortItems(items, sortBy);

  const handleSortByChange = (newSortBy) => {
    setSortBy(newSortBy);
  };

  return (
    <>
      <div className=" flex items-center">
        <p>Sort by:</p>
        <button
          className="block bg-orange-400 m-4 p-2 w-40"
          onClick={() => handleSortByChange('name')}
          style={{
            backgroundColor: sortBy === 'name' ? 'lightblue' : 'white',
          }}
        >
          Name
        </button>
        <button
          className="block bg-orange-500 m-4 p-2 w-40"
          onClick={() => handleSortByChange('category')}
          style={{
            backgroundColor: sortBy === 'category' ? 'lightblue' : 'white',
          }}
        >
          Category
        </button>
        <button
          className="block bg-orange-600 m-4 p-2 w-40"
          onClick={() => handleSortByChange('groupedCategory')}
          style={{
            backgroundColor: sortBy === 'groupedCategory' ? 'lightblue' : 'white',
          }}
        >
          Grouped Category
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
