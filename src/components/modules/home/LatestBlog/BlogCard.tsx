import { ArrowRight, Calendar, MessageSquare, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface BlogCardProps {
  id: number;
  image: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  commentCount: string;
}

const BlogCard = ({
  image,
  title,
  excerpt,
  date,
  author,
  commentCount,
}: BlogCardProps) => {
  return (
    <div className='bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300'>
      <div className='relative'>
        <Image src={image} alt={title} width={500} height={500} className='w-full h-56 object-cover' />
        <div className='absolute bottom-3 right-3 bg-teal-500 text-white px-3 py-1 rounded-md flex items-center gap-1 text-sm'>
          <Calendar className='w-4 h-4' />
          <span>{date}</span>
        </div>
      </div>

      <div className='p-5'>
        <div className='flex items-center gap-6 mb-4 text-gray-600 text-sm'>
          <div className='flex items-center gap-1'>
            <User className='w-4 h-4 text-teal-500' />
            <span>By {author}</span>
          </div>
          <div className='flex items-center gap-1'>
            <MessageSquare className='w-4 h-4 text-teal-500' />
            <span>{commentCount} Comments</span>
          </div>
        </div>

        <h3 className='text-xl font-semibold mb-3 line-clamp-2 hover:text-teal-600 transition-colors'>
          {title}
        </h3>

        <p className='text-gray-600 mb-4 line-clamp-3'>{excerpt}</p>

        <Button
          variant='default'
          className='bg-teal-500 hover:bg-teal-600 text-white rounded-md'
        >
          Read More <ArrowRight className='ml-1 w-4 h-4' />
        </Button>
      </div>
    </div>
  );
};

export default BlogCard;
