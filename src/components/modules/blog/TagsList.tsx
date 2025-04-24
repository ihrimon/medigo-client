import React from 'react';
import { motion } from 'framer-motion';

interface TagsListProps {
  tags: string[];
}

const TagsList = ({ tags }: TagsListProps) => {
  return (
    <div className='border rounded-xl p-5 shadow-sm'>
      <h3 className='text-lg font-semibold mb-4'>Tags</h3>
      <div className='flex flex-wrap gap-2'>
        {tags.map((tag, index) => (
          <motion.a
            key={tag}
            href='#'
            className='px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full hover:bg-blog-primary hover:text-white transition-colors'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            {tag}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default TagsList;
