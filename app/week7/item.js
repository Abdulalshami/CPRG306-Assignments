import React from 'react';

// Define a functional component named "Item" that takes props as input
export default function Item({ name, quantity, category, onSelect }) {
    // This component represents a clickable item with information

    return (
        // Render a div element with specified CSS classes for styling
        <div className="px-2 py-4 m-4 bg-gray-800 hover:bg-white hover:text-black cursor-pointer" onClick={onSelect}>
            {/* Display the item name with specified styles */}
            <h1 className="text-2xl font-bold">{name}</h1>
            {/* Display the quantity and category of the item */}
            <p>Buy {quantity} in {category}</p>
        </div>
    );
}
