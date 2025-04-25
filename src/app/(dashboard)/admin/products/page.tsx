// import ProductList from '@/components/modules/admin/products/ProductList';
// import { getAllBrands } from '@/services/brand';
// import { getAllCategories } from '@/services/category';
// import { getAllProducts } from '@/services/product';

// const AdminProductPage = async () => {
//   const { data: productsData } = await getAllProducts();
//   const {data: categoriesData} = await getAllCategories();
//   const {data: brandsData} = await getAllBrands();

//   const products = productsData?.data;
//   const categories = categoriesData?.data;
//   const brands = brandsData?.data;
//   console.log(brandsData)
//   console.log(productsData);
//   return (
//     <div className='max-w-7xl mx-auto'>
//       <h3 className='text-2xl mb-6'>Products</h3>
//       {products.length > 0 ? (
//         <ProductList products={products} categories={categories} brands={brands}/>
//       ) : (
//         <div className='text-center text-3xl font-bold text-red-500'>
//           Products Are Not Available
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminProductPage;
