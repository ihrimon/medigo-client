import React from 'react';
import { ArrowRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { dealProducts } from './dealDate';
import DealCard from './DealCard';
// import { getCurrentWeekDeal } from '@/services/weekDeals';

const WeekDeals = async () => {
  // const {data: weekDealsData} = await getCurrentWeekDeal();
  // console.log(weekDealsData)

  return (
    <section className='py-8 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto'>
      <div className='flex items-center justify-between mb-6'>
        <div>
          <p className='text-sky-500 font-medium uppercase tracking-wide mb-1'>
            BEST VITAMIN DEALS
          </p>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
            Deals Of The Week!
          </h2>
        </div>
        <a
          href='#'
          className='hidden md:flex items-center gap-2 bg-sky-500 text-white px-5 py-2 rounded-full hover:bg-sky-600 transition-colors'
        >
          VIEW ALL <ArrowRight size={16} />
        </a>
      </div>

      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className='w-full'
      >
        <CarouselContent>
          {dealProducts.map((product, index) => (
            <CarouselItem
              key={index}
              className='md:basis-1/2 lg:basis-1/3 pl-4 md:pl-6'
            >
              <DealCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className='hidden md:flex justify-end gap-2 mt-6'>
          <CarouselPrevious className='relative inset-0 translate-y-0 bg-white border-gray-200 hover:bg-gray-50' />
          <CarouselNext className='relative inset-0 translate-y-0 bg-white border-gray-200 hover:bg-gray-50' />
        </div>
      </Carousel>

      <div className='flex justify-center mt-6 md:hidden'>
        <a
          href='#'
          className='flex items-center gap-2 bg-sky-500 text-white px-5 py-2 rounded-full hover:bg-sky-600 transition-colors'
        >
          VIEW ALL <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
};

export default WeekDeals;
