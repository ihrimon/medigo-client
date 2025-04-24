import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className='relative'>
      <input
        type='search'
        placeholder='Search'
        className='w-full rounded-lg border border-gray-200 px-4 py-2 pr-12 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blog-primary'
      />
      <button className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blog-primary transition-colors'>
        <Search className='h-5 w-5' />
      </button>
    </div>
  );
};

export default SearchBar;
