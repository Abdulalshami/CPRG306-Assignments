import React, { useState } from 'react';
import Item from './item';

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
