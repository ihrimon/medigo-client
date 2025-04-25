import { getAllBrands } from '@/services/brand';
import { IBrand } from '@/types';
import { MoveLeft, MoveRight } from 'lucide-react';
import Image from 'next/image';

const PopularBrands = async () => {
  const { data: brandsData } = await getAllBrands();
  const brands = brandsData?.data;

  return (
    <div className='max-w-7xl mx-auto mt-20'>
      <div className='flex items-center justify-between'>
        <h2 className='text-3xl font-bold'>Top Brands</h2>
        <div className='border px-1 flex items-center py-1 rounded-full border-green-500 gap-1 text-white'>
          <button className='bg-blue-500 w-10 h-8 flex items-center justify-center rounded-tl-full rounded-bl-full hover:bg-green-500 transition-all duration-500'>
            <MoveLeft className='w-4 h-4' />
          </button>

          <button className='bg-blue-500 w-10 h-8 flex items-center justify-center rounded-tr-full rounded-br-full hover:bg-green-500 transition-all duration-500'>
            <MoveRight className='w-4 h-4' />
          </button>
        </div>
      </div>
      <div className='grid grid-cols-5 gap-8 my-10'>
        {brands?.map((brand: IBrand) => (
          <div key={brand.slug} className='relative group'>
            {/* Brand Image */}
            <Image
              src={brand.image}
              width={250}
              height={100}
              alt='brand image'
              className='rounded-2xl'
            />

            <div className='absolute left-2 right-2 -bottom-6 flex items-center gap-3 px-3 py-2 bg-white rounded-full transition-all duration-500 ease-in-out group-hover:bg-blue-500'>
              <div className='w-10 h-10 rounded-full overflow-hidden'>
                <Image
                  src={brand.logo}
                  width={40}
                  height={40}
                  alt='brand logo'
                  className='group-hover:grayscale group-hover:brightness-0 group-hover:invert transition duration-1500'
                />
              </div>
              <div>
                <h3 className='text-green-500 group-hover:text-white hover:underline font-medium transition duration-1000 cursor-pointer'>
                  {brand.name}
                </h3>
                <small className='text-gray-500 group-hover:text-white transition duration-800'>
                  {brand.tagline}
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularBrands;
