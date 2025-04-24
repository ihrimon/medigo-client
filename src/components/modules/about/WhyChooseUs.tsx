'use client';

import { Flower2, Space as Peace, Users2, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

const features = [
  {
    icon: Flower2,
    title: 'Nutrition counseling',
    description:
      'Receive personalize nutrition guidance to create balanced, sustainable eating.',
  },
  {
    icon: Users2,
    title: 'Holistic approach',
    description:
      'Receive personalize nutrition guidance to create balanced, sustainable eating.',
  },
  {
    icon: Peace,
    title: 'Supportive coaching',
    description:
      'Receive personalize nutrition guidance to create balanced, sustainable eating.',
  },
  {
    icon: Target,
    title: 'Focus on sustainable',
    description:
      'Receive personalize nutrition guidance to create balanced, sustainable eating.',
  },
];

export function WhyChooseUs() {
  return (
    <section className='py-24 bg-[#004D40] text-white'>
      <div className='container mx-auto px-4'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6'>
            <div className='flex items-center gap-2'>
              <span className='text-yellow-400'>✦</span>
              <span className='text-lg font-medium'>Why Choose Us</span>
            </div>

            <h2 className='text-4xl lg:text-5xl font-bold leading-tight'>
              Your partner in lasting wellness
            </h2>

            <p className='text-lg text-gray-200'>
              With a personalized approach and unwavering support, we guide you
              toward sustainable health and lasting well-being. Trust us to help
              you achieve your wellness goals.
            </p>

            <div className='grid sm:grid-cols-2 gap-6 mt-12'>
              {features.map((feature, index) => (
                <Card key={index} className='bg-[#00695C] border-none p-6'>
                  <div className='flex flex-col gap-4'>
                    <feature.icon className='w-10 h-10 text-teal-300' />
                    <h3 className='text-xl font-semibold'>{feature.title}</h3>
                    <p className='text-gray-300'>{feature.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className='relative'>
            <Image
            width={500}
            height={500}
              src='https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop'
              alt='Fitness trainer'
              className='rounded-2xl shadow-xl w-full h-[600px] object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-[#004D40]/50 to-transparent rounded-2xl' />
          </div>
        </div>
      </div>
    </section>
  );
}
