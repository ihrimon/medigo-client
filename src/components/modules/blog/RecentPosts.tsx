import React from 'react';
import { Calendar } from 'lucide-react';
import Image from 'next/image';

interface Post {
  id: number;
  title: string;
  date: string;
  image: string;
}

interface RecentPostsProps {
  posts: Post[];
}

const RecentPosts = ({ posts }: RecentPostsProps) => {
  return (
    <div className='border rounded-xl p-5 shadow-sm'>
      <h3 className='text-lg font-semibold mb-4'>Latest Post</h3>
      <div className='space-y-4'>
        {posts.map((post) => (
          <div key={post.id} className='flex items-start space-x-3 group'>
            <div className='w-16 h-16 rounded-md overflow-hidden flex-shrink-0'>
              <Image
              width={500}
              height={500}
                src={post.image}
                alt={post.title}
                className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
              />
            </div>
            <div>
              <h4 className='text-sm font-medium line-clamp-2 group-hover:text-blog-primary transition-colors'>
                {post.title}
              </h4>
              <div className='flex items-center text-xs text-gray-500 mt-1'>
                <Calendar className='h-3 w-3 mr-1' />
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
