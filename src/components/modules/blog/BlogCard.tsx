import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import SearchBar from './SearchBar';
import CategoryList from './CategoryList';
import RecentPosts from './RecentPosts';
import TagsList from './TagsList';

// Sample data for the blog
const blogPosts = [
  {
    id: 1,
    title: 'Radiant reflections expert dermatology and skin.',
    excerpt:
      'It is a long established fact that a reader will be distracted by the readable content.',
    image: '/lovable-uploads/78fb71df-f5e9-43f8-ba8a-30b28c4ec110.png',
    date: '17 May 2023',
    author: 'Ingrid Martinez',
    category: 'Health',
  },
  {
    id: 2,
    title: 'Glow guide your path to perfect skin health',
    excerpt:
      'It is a long established fact that a reader will be distracted by the readable content.',
    image: '/lovable-uploads/78fb71df-f5e9-43f8-ba8a-30b28c4ec110.png',
    date: '15 May 2023',
    author: 'Ingrid Martinez',
    category: 'Health',
  },
  {
    id: 3,
    title: 'Brilliant skin blog your dermatology care resource',
    excerpt:
      'It is a long established fact that a reader will be distracted by the readable content.',
    image: '/lovable-uploads/78fb71df-f5e9-43f8-ba8a-30b28c4ec110.png',
    date: '7 May 2023',
    author: 'Ingrid Martinez',
    category: 'Health',
  },
  {
    id: 4,
    title: 'Radiant reflections expert dermatology and skin.',
    excerpt:
      'It is a long established fact that a reader will be distracted by the readable content.',
    image:
      'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '7 May 2023',
    author: 'Ingrid Martinez',
    category: 'Therapy',
  },
  {
    id: 5,
    title: 'Glow guide your path to perfect skin health',
    excerpt:
      'It is a long established fact that a reader will be distracted by the readable content.',
    image:
      'https://images.pexels.com/photos/12585199/pexels-photo-12585199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '17 May 2023',
    author: 'Ingrid Martinez',
    category: 'Health',
  },
  {
    id: 6,
    title: 'Brilliant skin blog your dermatology care resource',
    excerpt:
      'It is a long established fact that a reader will be distracted by the readable content.',
    image:
      'https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: '17 May 2023',
    author: 'Ingrid Martinez',
    category: 'Health',
  },
];

const categories = [
  { name: 'Acupressure', count: 10 },
  { name: 'Algernism', count: 5 },
  { name: 'Blood', count: 17 },
  { name: 'Food', count: 15 },
  { name: 'Health', count: 66 },
  { name: 'Mental Health', count: 17 },
  { name: 'Therapy', count: 15 },
  { name: 'Walking', count: 66 },
];

const tags = [
  'Acupressure',
  'Algernism',
  'Blood',
  'Food',
  'Health',
  'Mental Health',
  'Therapy',
  'Walking',
];

const recentPosts = [
  {
    id: 1,
    title: 'The Art of Managing Business and Patient Care',
    date: '17 MAY 2022',
    image: '/lovable-uploads/78fb71df-f5e9-43f8-ba8a-30b28c4ec110.png',
  },
  {
    id: 2,
    title: 'The Art of Managing Business and Patient Care',
    date: '17 MAY 2022',
    image: '/lovable-uploads/78fb71df-f5e9-43f8-ba8a-30b28c4ec110.png',
  },
  {
    id: 3,
    title: 'The Art of Managing Business and Patient Care',
    date: '17 MAY 2022',
    image: '/lovable-uploads/78fb71df-f5e9-43f8-ba8a-30b28c4ec110.png',
  },
];

const BlogPost = ({ post }: { post: (typeof blogPosts)[0] }) => {
  return (
    <div className='bg-white rounded-lg overflow-hidden shadow-sm'>
      <div className='relative h-48 overflow-hidden'>
        <Image
        width={500}
        height={500}
          src={post.image}
          alt={post.title}
          className='w-full h-full object-cover'
        />
      </div>
      <div className='p-5'>
        <div className='flex items-center text-xs text-gray-500 mb-2'>
          <span className='flex items-center'>
            <svg
              className='w-3 h-3 mr-1'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
              />
            </svg>
            {post.date}
          </span>
          <span className='mx-2'>•</span>
          <span>By {post.author}</span>
        </div>
        <h3 className='text-lg font-semibold mb-2 text-blog-primary hover:text-blog-accent transition-colors'>
          {post.title}
        </h3>
        <p className='text-gray-600 text-sm mb-4'>{post.excerpt}</p>
        <button className='text-blog-primary flex items-center text-sm font-medium group'>
          Read More
          <ArrowRight className='ml-1 w-4 h-4 transition-transform group-hover:translate-x-1' />
        </button>
      </div>
    </div>
  );
};

const BlogPage = () => {
  return (
    <div className='bg-blog-background min-h-screen py-10'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
          {/* Main content */}
          <div className='lg:col-span-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {blogPosts.map((post) => (
                <BlogPost key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className='lg:col-span-4 space-y-6'>
            <div className='dark:bg-gray-900 bg-white rounded-xl p-5 shadow-sm'>
              <h3 className='text-lg font-semibold mb-4'>Search</h3>
              <SearchBar />
            </div>

            <CategoryList categories={categories} />

            <RecentPosts posts={recentPosts} />

            <TagsList tags={tags} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
