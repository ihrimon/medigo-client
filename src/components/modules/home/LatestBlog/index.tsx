import React from 'react';
import BlogCard from './BlogCard';

// Sample blog data
const blogPosts = [
  {
    id: 1,
    image: 'https://placehold.co/600x400/e6f7ff/0099cc',
    title: 'There Are Many Variations Of Passage Available Majority Suffered.',
    excerpt:
      'There are many variations available the majority have suffered alteration randomised words.',
    date: 'Aug 12, 2024',
    author: 'Alicia Davis',
    commentCount: '2.5k',
  },
  {
    id: 2,
    image: 'https://placehold.co/600x400/f5f5ff/6666cc',
    title: 'Contrary To Popular Belief Making Simply Random Text Latin.',
    excerpt:
      'There are many variations available the majority have suffered alteration randomised words.',
    date: 'Aug 15, 2024',
    author: 'Alicia Davis',
    commentCount: '3.1k',
  },
  {
    id: 3,
    image: 'https://placehold.co/600x400/f0fff0/33cc33',
    title: 'If You Are Going Use Passage You Need Sure There Middle Text.',
    excerpt:
      'There are many variations available the majority have suffered alteration randomised words.',
    date: 'Aug 18, 2024',
    author: 'Alicia Davis',
    commentCount: '1.6k',
  },
];

const LatestBlog = () => {
  return (
    <div className='w-full max-w-7xl mx-auto px-4 py-12'>
      <div className='text-center mb-10'>
        <h4 className='text-teal-500 uppercase font-medium tracking-wider mb-2'>
          OUR BLOG
        </h4>
        <h2 className='text-3xl md:text-4xl font-bold'>
          Our Latest News & <span className='text-teal-500'>Blog</span>
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {blogPosts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;
