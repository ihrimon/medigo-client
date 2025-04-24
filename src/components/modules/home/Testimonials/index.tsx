'use client'

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    id: 1,
    name: 'Patrick M. Newman',
    date: 'May 27, 2024',
    text: 'Real authentic genuine quality however it fit me like an XL size when In fact Im L. Beware',
    rating: 5,
    productName: 'Aerodynamic Copper Lamp',
    productImage: '/lovable-uploads/4ad09c09-7e4d-43f9-9989-b1c9ad656018.png',
  },
  {
    id: 2,
    name: 'Philip King',
    date: 'May 27, 2024',
    text: 'Idque dolorum mandamus mei te. An nibh putant suavitate est, sea regione fabulas deterruisset cu.',
    rating: 5,
    productName: 'Aerodynamic Copper Lamp',
    productImage: '/lovable-uploads/4ad09c09-7e4d-43f9-9989-b1c9ad656018.png',
  },
  {
    id: 3,
    name: 'Patrick M. Newman',
    date: 'May 27, 2024',
    text: 'Real authentic genuine quality however it fit me like an XL size when In fact Im L. Beware',
    rating: 5,
    productName: 'Aerodynamic Copper Lamp',
    productImage: '/lovable-uploads/4ad09c09-7e4d-43f9-9989-b1c9ad656018.png',
  },
  {
    id: 4,
    name: 'Patrick M. Newman',
    date: 'May 27, 2024',
    text: 'Real authentic genuine quality however it fit me like an XL size when In fact Im L. Beware',
    rating: 5,
    productName: 'Aerodynamic Copper Lamp',
    productImage: '/lovable-uploads/4ad09c09-7e4d-43f9-9989-b1c9ad656018.png',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <div className='w-full max-w-7xl mx-auto px-4 py-16 bg-[#F1F0FB]'>
      <div className='flex justify-between items-center mb-12'>
        <h2 className='text-3xl font-bold'>Happy Clients Say</h2>
        <div className='flex gap-2'>
          <Button
            variant='outline'
            size='icon'
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={cn(
              'bg-white',
              currentIndex === 0 && 'opacity-50 cursor-not-allowed'
            )}
          >
            <ArrowLeft className='h-4 w-4' />
          </Button>
          <Button
            variant='outline'
            size='icon'
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className={cn(
              'bg-white',
              currentIndex >= maxIndex && 'opacity-50 cursor-not-allowed'
            )}
          >
            <ArrowRight className='h-4 w-4' />
          </Button>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {testimonials
          .slice(currentIndex, currentIndex + itemsPerPage)
          .map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
      </div>
    </div>
  );
};

export default Testimonials;
