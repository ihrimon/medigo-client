import { Home } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center text-center'>
      {/* 404 and bird image */}
      <div className='relative'>
        <div className='dark:text-gray-900/30 text-[180px] md:text-[240px] font-bold leading-none tracking-tighter'>
          404
        </div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <Image
            src='https://res.cloudinary.com/do6tvtff8/image/upload/v1740875772/bird_fwf9lh.gif'
            alt='bird'
            height={500}
            width={500}
          />
        </div>
      </div>

      {/* not found content */}
      <div className='dark:text-white/60 mb-8'>
        <h1 className='text-4xl md:text-5xl font-bold mb-2'>Page Not Found</h1>
        <p className='mt-5'>Oops! Looks like this page took a wrong turn.</p>
        <p>We searched everywhere, but it’s nowhere to be found. 🔎</p>
      </div>
      <Link
        href={'/'}
        className='inline-flex items-center px-3 py-2 bg-primary text-white rounded-sm hover:bg-primary/70 transition-colors dark:bg-gray-800'
      >
        <Home className='mr-2 h-5 w-5' />
        Head back home
      </Link>
    </div>
  );
};

export default NotFound;
