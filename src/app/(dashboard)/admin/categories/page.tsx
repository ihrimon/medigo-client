// import CategoryList from '@/components/modules/admin/category/CategoryList'
// import { getAllCategories } from '@/services/category';

// const AdminCategoryPage = async () => {
//   const { data: categoriesData } = await getAllCategories();
//   const categories = categoriesData?.data;
//   console.log(categories.length)

//   return (
//     <div className='max-w-7xl mx-auto'>
//       <h3 className='text-2xl mb-6'>Categories</h3>
//       {categories?.length > 0 ? (
//         <CategoryList categories={categories} />
//       ) : (
//         <div className='text-center text-3xl font-bold text-red-500'>
//           Categories Are Not Available
//         </div>
//       )}
//     </div>
//   );
// }

// export default AdminCategoryPage

import React from 'react'

const AdminCategoryPage = () => {
  return (
    <div>AdminCategoryPage</div>
  )
}

export default AdminCategoryPage

