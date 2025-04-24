import BrandList from '@/components/modules/admin/brand/BrandList';
import { getAllBrands } from '@/services/brand';

const AdminBrandPage = async () => {
  const { data: brandsData } = await getAllBrands();
  const brands = brandsData?.data;
  
  return (
    <div className='max-w-7xl mx-auto'>
      <h3 className='text-2xl mb-6'>Brands</h3>
      {brands?.length > 0 ? (
        <BrandList brands={brands} />
      ) : (
        <div className='text-center text-3xl font-bold text-red-500'>
          Brands Are Not Available
        </div>
      )}
    </div>
  );
};

export default AdminBrandPage;
