'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const images = [
  {
    src: 'https://plus.unsplash.com/premium_photo-1668898899024-02f028349666?q=80&w=2070&auto=format&fit=crop',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1668605108427-695ef1c16256?w=500&auto=format&fit=crop&q=60',
    colSpan: 1,
    rowSpan: 2,
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1668884111644-0522a824760d?q=80&w=2080&auto=format&fit=crop',
    colSpan: 1,
    rowSpan: 2,
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1664456804528-9e07c732a2af?q=80&w=1940&auto=format&fit=crop',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1670981099426-2eaeaab354b7?q=80&w=1920&auto=format&fit=crop',
    colSpan: 1,
    rowSpan: 2,
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1670981099502-fb0ea624fa9a?q=80&w=1972&auto=format&fit=crop',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1670981099297-319458480c3c?q=80&w=2024&auto=format&fit=crop',
    colSpan: 1,
    rowSpan: 1,
  },
  {
    src: 'https://images.unsplash.com/photo-1631980838946-755ba8443ab7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    colSpan: 1,
    rowSpan: 1,
  },
];

const HomeGallery = () => {
  return (
    <div className='max-w-7xl mx-auto px-4 py-12'>
      <h2 className='text-3xl md:text-4xl font-bold text-center mb-10 text-green-600'>
        Our Medicine Gallery
      </h2>

      <div className='grid grid-cols-4 gap-4'>
        {images.map((img, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className={clsx(
              'relative rounded-xl overflow-hidden shadow-md',
              `col-span-${img.colSpan}`,
              `row-span-${img.rowSpan}`
            )}
            style={{
              aspectRatio: '4 / 3', 
            }}
          >
            <Image
              src={img.src}
              alt={`Gallery Image ${index + 1}`}
              fill
              className='object-cover hover:scale-105 transition-transform duration-500'
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HomeGallery;
