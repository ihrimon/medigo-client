import CategoryCard from './CategoryCard';
import CategoryTabs from './CategoryTabs';
import { getAllProducts } from '@/services/product';
import { IProduct } from '@/types';
import { ArrowLeftRight } from 'lucide-react';

const PopularCategories = async () => {
  const {data: products} = await getAllProducts();

  return (
    <section className='max-w-7xl mx-auto'>
      <div className='flex items-center justify-between mb-10'>
        <h2 className='text-3xl font-bold flex items-center gap-3'><ArrowLeftRight className='text-green-500' /> Populuar Products</h2>

        <div className='flex flex-wrap border-b'>
          <CategoryTabs />
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {products?.data?.map((product: IProduct) => (
          <CategoryCard key={product._id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;
