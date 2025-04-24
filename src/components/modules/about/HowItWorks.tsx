'use client';

import { GitGraph, Headphones, Wrench, Grid } from 'lucide-react';

const steps = [
  {
    number: '1',
    icon: GitGraph,
    title: 'Custom Coaching Plan',
    description: 'Begin with a comprehensive health assessment to understand.',
  },
  {
    number: '2',
    icon: Headphones,
    title: 'Ongoing Support',
    description: 'begin with a comprehensive health assessment to understand.',
  },
  {
    number: '3',
    icon: Wrench,
    title: 'Practical Tools',
    description: 'Begin with a comprehensive health assessment to understand.',
  },
  {
    number: '4',
    icon: Grid,
    title: 'Flexible Engagement',
    description: 'Begin with a comprehensive health assessment to understand.',
  },
];

export function HowItWorks() {
  return (
    <section className='py-24 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='max-w-3xl mx-auto text-center mb-16'>
          <div className='flex items-center justify-center gap-2 mb-4'>
            <span className='text-yellow-400'>✦</span>
            <span className='text-lg font-medium text-gray-600'>
              How It Work
            </span>
          </div>

          <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
            Step-by-step guide to better health
          </h2>

          <p className='text-lg text-gray-600'>
            Achieving your health goals has never been easier. Our step-by-step
            approach provides personalized guidance, actionable strategies, and
            ongoing support.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {steps.map((step, index) => (
            <div key={index} className='relative'>
              <div className='relative'>
                <div className='w-24 h-24 rounded-full border-2 border-teal-600 flex items-center justify-center mb-6 mx-auto'>
                  <step.icon className='w-10 h-10 text-teal-600' />
                  <div className='absolute -top-2 -right-2 w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white font-semibold'>
                    {step.number}
                  </div>
                </div>
              </div>

              <div className='text-center'>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>
                  {step.title}
                </h3>
                <p className='text-gray-600'>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
