import React from 'react';
import BlogCard from './BlogCard';

const blogPosts = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=2140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: '5 Essential Medicines Every Household Should Keep',
    excerpt:
      'From paracetamol to oral rehydration salts — here are 5 must-have medicines you should always keep at home.',
    date: 'Apr 10, 2025',
    author: 'Dr. Nazia Haque',
    commentCount: '1.2k',
  },
  {
    id: 2,
    image:
      'https://plus.unsplash.com/premium_photo-1673953510199-321e05bf6440?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'How to Store Your Medicines Safely at Home',
    excerpt:
      'Proper storage of medicine is crucial for safety and effectiveness. Learn how temperature and moisture impact your meds.',
    date: 'Apr 14, 2025',
    author: 'Faisal Rahman, RPh',
    commentCount: '980',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1631980839320-77eed020776c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Understanding Prescription Labels: What You Must Know',
    excerpt:
      'Decoding your medicine label can prevent harmful mistakes. Learn how to read dosage, timing, and more.',
    date: 'Apr 17, 2025',
    author: 'Alicia Davis',
    commentCount: '1.6k',
  },
];


const LatestBlog = () => {
  return (
    <div className='w-full max-w-7xl mx-auto px-4 py-12'>
      <div className='text-center mb-10'>
        <h4 className='text-blue-500 uppercase font-medium tracking-wider mb-2'>
          OUR BLOG
        </h4>
        <h2 className='text-3xl md:text-4xl font-bold'>
          Our Latest News & <span className='text-blue-500'>Blog</span>
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
