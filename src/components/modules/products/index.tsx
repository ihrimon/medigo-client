import { IProduct } from '@/types';
// import FilterSidebar from './FilterSidebar';
import ProductCard from './ProductCard';

const AllProducts = async ({ products }: { products: IProduct[] }) => {
  
  return (
    <div className='flex gap-8 my-10'>
      <div className='lg:w-[500px] border'>
        {/* <FilterSidebar /> */}
      </div>
      <div>
        <div className='grid grid-cols-3 gap-8'>
          {products.length>0? products?.map((product: IProduct, idx: number) => (
            <ProductCard key={idx} product={product} />
          )) : <p className='text-center text-xl text-green-500'>Products Not Found</p>}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
