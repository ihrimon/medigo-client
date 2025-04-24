import React from 'react';
import { motion } from 'framer-motion';

interface Category {
  name: string;
  count: number;
}

interface CategoryListProps {
  categories: Category[];
}

const CategoryList = ({ categories }: CategoryListProps) => {
  return (
    <div className='border rounded-xl p-5 shadow-sm'>
      <h3 className='text-lg font-semibold mb-4'>Category</h3>
      <ul className='space-y-2'>
        {categories.map((category, index) => (
          <motion.li
            key={category.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <a
              href='#'
              className='flex items-center justify-between text-sm hover:text-blog-primary transition-colors'
            >
              <span className='flex items-center'>
                <span className='mr-2 text-blog-primary'>→</span>
                {category.name}
              </span>
              <span className='text-gray-500'>({category.count})</span>
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
