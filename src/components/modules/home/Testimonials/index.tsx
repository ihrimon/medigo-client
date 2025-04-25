'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    id: 2,
    name: 'Rakib Hossain',
    date: 'April 15, 2025',
    text: 'Excellent service. I receive my medicine on time and even got phone consultation from a certified pharmacist.',
    rating: 5,
    productName: 'Napa Extra',
    productImage:
      'https://plus.unsplash.com/premium_photo-1668487826871-2f2cac23ad56?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'Jannatul Ferdous',
    date: 'April 12, 2025',
    text: 'As a working mom, MediGo saves me time and stress. I can refill my baby’s vitamins without rushing to the pharmacy.',
    rating: 4,
    productName: 'PediaSure Powder',
    productImage:
      'https://images.unsplash.com/photo-1638405803126-d12de49c7d47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    name: 'Tariqul Islam',
    date: 'April 18, 2025',
    text: 'They always verify prescriptions before shipping the medicine. Very trustworthy and professional service!',
    rating: 5,
    productName: 'Insulin Pen – Novorapid',
    productImage:
      'https://plus.unsplash.com/premium_photo-1661780250041-86c3331cef25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    name: 'Sumaiya Khan',
    date: 'April 20, 2025',
    text: 'MediGo is a lifesaver for my elderly parents. I can schedule their medicine delivery even though I live in another city.',
    rating: 5,
    productName: 'Amlodipine 5mg',
    productImage:
      'https://images.unsplash.com/photo-1616526628217-c21fd2eef624?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 6,
    name: 'Faisal Mahmud',
    date: 'April 22, 2025',
    text: 'Easy ordering, responsive customer support, and affordable pricing. Highly recommended!',
    rating: 5,
    productName: 'Paracetamol 500mg',
    productImage:
      'https://images.unsplash.com/photo-1703581095777-28bb26229b55?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 1,
    name: 'Dr. Sarah Ahmed',
    date: 'April 10, 2025',
    text: 'MediGo has made it incredibly easy to order my monthly prescriptions. The delivery is always on time and the packaging is hygienic.',
    rating: 5,
    productName: 'Atorvastatin 20mg',
    productImage: '/uploads/products/atorvastatin.png',
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
    <div className='w-full max-w-7xl mx-auto px-4 py-16'>
      <div className='flex justify-between items-center mb-12'>
        <h2 className='text-3xl font-bold text-green-600'>Happy Clients Say</h2>{' '}
        {/* Green color for heading */}
        <div className='flex gap-2'>
          <Button
            variant='outline'
            size='icon'
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={cn(
              'bg-blue-500 text-white hover:bg-blue-600',
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
              'bg-blue-500 text-white hover:bg-blue-600',
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
