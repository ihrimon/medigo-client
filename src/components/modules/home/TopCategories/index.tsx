import { getAllCategories } from '@/services/category';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNavigation,
} from '../../../../../components/motion-primitives/carousel';
import { ICategory } from '@/types';
import Image from 'next/image';

const TopCategories = async () => {
  const { data: categories } = await getAllCategories();

  return (
    <div className='relative w-full max-w-7xl mx-auto py-10'>
      <Carousel>
        <CarouselContent>
          {categories?.data?.map((category: ICategory) => (
            <CarouselItem key={category._id} className='basis-1/7'>
              <div className='flex aspect-square items-center justify-center text-center'>
                <div className='relative border border-blue-500/20 rounded-md w-40 h-40 overflow-hidden group'>
                  {/* Hover Content (Cover Screen) */}
                  <div className='absolute inset-0 bg-white opacity-100 group-hover:opacity-0 transition-opacity duration-200 z-10'></div>

                  {/* Hover Image: visible only on hover */}
                  <Image
                    src={category.image}
                    fill
                    alt='category image'
                    className='absolute inset-0 object-contain object-center p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0'
                  />

                  {/* Default Content: hidden on hover */}
                  <div className='relative z-10 flex flex-col items-center justify-center h-full space-y-1 transition-opacity duration-300 group-hover:opacity-0'>
                    <div className='relative w-fit h-fit'>
                      {/* Rotating Dashed Border */}
                      <div className='absolute inset-0 border-6 border-dashed border-blue-500 rounded-full animate-[spin_6s_linear_infinite]'></div>

                      {/* Inner Content stays static */}
                      <div className='relative z-10 bg-white p-1 rounded-full'>
                        <div className='bg-blue-500 p-4 rounded-full'>
                          <Image
                            src={category.icon}
                            width={40}
                            height={40}
                            alt='category icon'
                            className='rounded-full filter invert'
                          />
                        </div>
                      </div>
                    </div>

                    <p className='text-sm font-medium'>{category.name}</p>
                    <small className='text-xs text-gray-500'>
                      {category.items || 15} Items
                    </small>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNavigation />
      </Carousel>
    </div>
  );
};

export default TopCategories;
