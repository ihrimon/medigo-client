import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import Image from 'next/image';

interface TestimonialCardProps {
  name: string;
  date: string;
  text: string;
  rating: number;
  productName: string;
  productImage: string;
}

const TestimonialCard = ({
  name,
  date,
  text,
  rating,
  productName,
  productImage,
}: TestimonialCardProps) => {
  return (
    <div className='bg-white rounded-xl p-6 shadow-sm'>
      <div className='flex space-x-1 mb-4'>
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className='w-5 h-5 fill-orange-400 text-orange-400' />
        ))}
      </div>

      <p className='text-gray-700 mb-6 line-clamp-3'>{text}</p>

      <div className='flex items-center gap-4'>
        <Image
          src={productImage}
          alt={productName}
          height={500}
          width={500}
          className='w-16 h-16 object-cover rounded-lg'
        />
        <div className='flex-1'>
          <p className='text-sm text-gray-600'>{productName}</p>
        </div>
      </div>

      <div className='flex items-center gap-3 mt-6 pt-6 border-t'>
        <Avatar>
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          <AvatarImage
            src={`https://api.dicebear.com/7.x/initials/svg?seed=${name}`}
          />
        </Avatar>
        <div>
          <p className='font-medium text-sm'>{name}</p>
          <p className='text-sm text-gray-500'>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
