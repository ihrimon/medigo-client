import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { getAllProducts } from '@/services/product';
import { IProduct } from '@/types';
import ProductCard from '../../products/ProductCard';

export const TrendingItems = async () => {
  const {data: productsData} = await getAllProducts();
  const products = productsData?.data;

  return (
    <section className='py-16 px-4 max-w-7xl mx-auto'>
      <div className='flex items-center justify-between mb-8'>
        <h2 className='text-2xl font-bold text-slate-800'>
          Trending Items
          <div className='h-1 w-12 bg-teal-500 mt-2' />
        </h2>
        <a
          href='#'
          className='text-teal-500 font-medium hover:text-teal-600 flex items-center gap-1'
        >
          View More
          <ChevronRight className='w-4 h-4' />
        </a>
      </div>

      <div className='relative'>
        <button className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-50'>
          <ChevronLeft className='w-5 h-5 text-gray-600' />
        </button>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {products?.map((product: IProduct) => (
            <ProductCard key={product._id} product={product}/>
          ))}
        </div>

        <button className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-50'>
          <ChevronRight className='w-5 h-5 text-gray-600' />
        </button>
      </div>
    </section>
  );
}
