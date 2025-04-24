'use client'

import React, { useState } from 'react';
import { categories } from '@/constants/categories';

const CategoryTabs = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  return (
        <div className='flex flex-wrap border-b/20'>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1 text-sm transition-colors ${
                activeCategory === category
                  ? 'text-white font-medium bg-blue-500 border-b border-blue-500 rounded-tl-lg rounded-tr-lg'
                  : 'text-gray-700 hover:text-blue-500'
              }`}
            >
              {category}
            </button>
          ))}
    </div>
  );
};

export default CategoryTabs;
