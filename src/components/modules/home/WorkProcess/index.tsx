'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Patient Registration',
    description:
      'The first step in our process is to welcome our patients and ensure they have a experience.',
    image:
      'https://images.unsplash.com/photo-1588776814546-b474f3b44f40?auto=format&fit=crop&w=800&q=80',
    color: 'text-green-600 border-green-500',
  },
  {
    id: '02',
    title: 'Check-Ups',
    description:
      'Once the patient is checked in, healthcare professional conduct a thorough evaluation.',
    image:
      'https://images.unsplash.com/photo-1606220838311-46c8063efb7b?auto=format&fit=crop&w=800&q=80',
    color: 'text-blue-600 border-blue-500',
  },
  {
    id: '03',
    title: 'Get Report',
    description:
      'Analyzing the result of diagnostic tests & incorporating them into the diagnosis.',
    image:
      'https://images.unsplash.com/photo-1588776814546-b474f3b44f40?auto=format&fit=crop&w=800&q=80',
    color: 'text-green-600 border-green-500',
  },
  {
    id: '04',
    title: 'Ongoing Care',
    description:
      'Our commitment to our patient extend beyond the initial visit. we ensure continuity of care.',
    image:
      'https://images.unsplash.com/photo-1584467735871-6eec52163f42?auto=format&fit=crop&w=800&q=80',
    color: 'text-blue-600 border-blue-500',
  },
];

const WorkProcess = () => {
  return (
    <section className='py-16 bg-no-repeat bg-cover'>
      <div className='text-center mb-12'>
        <p className='text-sm font-medium text-[#00BFA6] tracking-widest'>
          WORK PROCESS
        </p>
        <h2 className='text-3xl md:text-4xl font-bold mt-2'>
          Let’s See How We Work Process
        </h2>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center gap-12 max-w-6xl mx-auto px-4'>
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className='relative text-center max-w-xs'
          >
            {/* Image with circular border and number */}
            <div
              className={`relative border-4 rounded-full overflow-hidden w-40 h-40 mx-auto ${step.color}`}
            >
              <Image
                src={step.image}
                alt={step.title}
                fill
                className='object-cover'
              />
              <div
                className={`absolute -top-3 -right-3 bg-white shadow-md rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold ${step.color}`}
              >
                {step.id}
              </div>
            </div>
            {/* Title and Description */}
            <h3 className='text-lg font-bold mt-6'>{step.title}</h3>
            <p className='text-gray-500 text-sm mt-2'>{step.description}</p>

            {/* Arrow */}
            {index < steps.length - 1 && (
              <div className='hidden md:block absolute top-20 -right-20'>
                <ArrowRight size={32} className='text-gray-300' />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkProcess;
