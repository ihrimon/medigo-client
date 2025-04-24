import React from 'react';
import { Star } from 'lucide-react';

interface RatingBreakdown {
  stars: number;
  percentage: number;
}

const ratingBreakdown: RatingBreakdown[] = [
  { stars: 5, percentage: 80 },
  { stars: 4, percentage: 55 },
  { stars: 3, percentage: 45 },
  { stars: 2, percentage: 25 },
  { stars: 1, percentage: 8 },
];

export function CustomerReviewStats() {
  const averageRating = 4.8;
  const totalReviews = 2878;

  return (
    <div className='rounded-lg shadow-sm p-6 border border-gray-100'>
      <h2 className='text-xl font-semibold text-gray-800 mb-6'>
        Customer Reviews
      </h2>

      <div className='flex items-start gap-12 mb-8'>
        <div>
          <div className='text-5xl font-semibold text-gray-900 mb-2'>
            {averageRating}
          </div>
          <div className='flex items-center gap-1 mb-2'>
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`w-5 h-5 ${
                  index < Math.floor(averageRating)
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <div className='text-sm text-emerald-600'>
            {totalReviews.toLocaleString()} Reviews
          </div>
        </div>

        <div className='flex-1'>
          <div className='space-y-3'>
            {ratingBreakdown.map((rating) => (
              <div key={rating.stars} className='flex items-center gap-4'>
                <div className='w-16 text-sm text-gray-600'>
                  {rating.stars} Stars
                </div>
                <div className='flex-1 h-2 bg-gray-100 rounded-full overflow-hidden'>
                  <div
                    className='h-full bg-emerald-500 rounded-full'
                    style={{ width: `${rating.percentage}%` }}
                  />
                </div>
                <div className='w-12 text-sm text-gray-600 text-right'>
                  {rating.percentage}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='text-sm text-gray-500 text-center'>(4.3 out of 5)</div>
    </div>
  );
}
