'use client'

import { Search } from 'lucide-react';

const FindWithMap = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='w-full max-w-[1280px] mx-auto text-center'>
        <div className='w-full h-96 md:h-[500px] mx-auto relative'>
          <iframe
            title='Google Map'
            className='w-full h-full rounded-lg'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.5662568345216!2d-106.64670682325972!3d52.167366965422816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304e6d9389a136f%3A0x58fb5fb9a1a79e52!2sCostco%20Wholesale!5e0!3m2!1sen!2sca!4v1705000000000!5m2!1sen!2sca'
            allowFullScreen
            loading='lazy'
          ></iframe>
          <div className='absolute top-4 right-4 flex flex-col gap-2'>
            <button
              className='bg-white p-2 rounded-lg shadow-md hover:bg-gray-200'
              onClick={() =>
                window.open(
                  'https://www.google.com/maps?q=52.167366965422816,-106.64670682325972',
                  '_blank'
                )
              }
            >
              <Search />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindWithMap;
