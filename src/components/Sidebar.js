import React from 'react';
import './Sidebar.css';

const Sidebar = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="sidebar">
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
