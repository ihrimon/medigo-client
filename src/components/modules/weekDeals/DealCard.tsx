import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { ProductDeal } from './dealDate';
import Timer from './Timer';

interface DealCardProps {
  product: ProductDeal;
}

const DealCard: React.FC<DealCardProps> = ({ product }) => {
  const {
    image,
    brand,
    rating,
    title,
    currentPrice,
    originalPrice,
    timeRemaining,
  } = product;

  return (
    <Card className='overflow-hidden border-gray-200 h-full'>
      <CardContent className='p-0'>
        <div className='relative'>
          <Image
            src={image}
            alt={title}
            width={700}
            height={600}
            className='w-full h-64 object-contain p-6 bg-gray-50'
          />
          <div className='absolute top-3 right-3'>
            <Timer timeRemaining={timeRemaining} />
          </div>
        </div>

        <div className='p-4'>
          <div className='flex justify-between items-center mb-2'>
            <p className='text-gray-600'>{brand}</p>
            <div className='flex'>
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                      clipRule='evenodd'
                    />
                  </svg>
                ))}
            </div>
          </div>

          <h3 className='font-semibold text-lg mb-3'>{title}</h3>

          <div className='flex items-center gap-3'>
            <span className='text-sky-500 font-bold text-xl'>
              ${currentPrice}
            </span>
            {originalPrice && (
              <span className='text-gray-400 line-through'>
                ${originalPrice}
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DealCard;
