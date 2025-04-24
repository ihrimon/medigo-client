'use client';

import { Check } from 'lucide-react';
import { Card } from '@/components/ui/card';

const skills = [
  'Radiant Skin Dermatology',
  'Flawless Dermatology',
  'Luminous Dermatology',
  'Laser Resurfacing',
  'Refined Skin Dermatology',
  'Anti Aging',
];

const awards = [
  {
    title: 'ClinicMaster 2024',
    subtitle: 'Quality and Accreditation Institute',
    label: 'Best Dermatologists',
    icon: 'WHO',
    type: 'hexagon',
  },
  {
    title: 'ClinicMaster 2024',
    subtitle: 'Quality and Accreditation Institute',
    label: 'Best Dermatologists',
    icon: 'WHO',
    type: 'wreath',
  },
];

export function Features() {
  return (
    <section className='py-24 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div className='relative'>
            <div className='absolute -top-6 -left-6 bg-white rounded-lg shadow-lg py-3 px-6 flex items-center gap-3'>
              <span className='text-4xl font-bold text-cyan-500'>20+</span>
              <span className='text-gray-600 font-medium'>
                Years
                <br />
                Experienced
              </span>
            </div>
            <img
              src='https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop'
              alt='Dr. Natali Jackson'
              className='rounded-2xl shadow-xl w-full h-[600px] object-cover'
            />
          </div>

          <div className='space-y-8'>
            <h2 className='text-4xl lg:text-5xl font-bold text-navy-900'>
              Meet Dr. Natali Jackson
            </h2>

            <p className='text-lg text-gray-600'>
              Dr. Natali jackson There are many variations of passages of Lorem
              Ipsum available, but the majority have suffered alteration.
            </p>

            <div>
              <h3 className='text-2xl font-semibold text-cyan-500 mb-6'>
                About Skills
              </h3>

              <div className='grid sm:grid-cols-2 gap-4'>
                {skills.map((skill, index) => (
                  <div key={index} className='flex items-center gap-3'>
                    <div className='w-6 h-6 rounded-full bg-cyan-100 flex items-center justify-center'>
                      <Check className='w-4 h-4 text-cyan-500' />
                    </div>
                    <span className='text-gray-700'>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className='grid sm:grid-cols-2 gap-6'>
              {awards.map((award, index) => (
                <Card key={index} className='p-4 border-2 border-gray-100'>
                  <div className='flex items-start gap-4'>
                    <div
                      className={`w-12 h-12 flex items-center justify-center ${
                        award.type === 'hexagon'
                          ? 'bg-navy-50 text-navy-600'
                          : 'bg-cyan-50 text-cyan-600'
                      } rounded-lg font-bold`}
                    >
                      {award.icon}
                    </div>
                    <div>
                      <h4 className='font-semibold text-gray-900'>
                        {award.title}
                      </h4>
                      <p className='text-sm text-gray-600'>{award.subtitle}</p>
                      <p className='text-sm text-cyan-500 mt-1'>
                        {award.label}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
